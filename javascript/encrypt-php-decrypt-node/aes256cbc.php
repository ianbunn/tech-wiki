<?php

function encrypt ($message, $method, $secret, &$hmac) {
    //$iv = substr(bin2hex(openssl_random_pseudo_bytes(16)),0,16);    //use this in production
    $iv = substr($secret, 0, 16);        //using this for testing purposes (to have the same encryption IV in PHP and Node encryptors)
    $encrypted = base64_encode($iv) . openssl_encrypt($message, $method, $secret, 0, $iv);
    $hmac = hash_hmac('md5', $encrypted, $secret);
    return $encrypted;
}

function decrypt ($encrypted, $method, $secret, $hmac) {
    if (hash_hmac('md5', $encrypted, $secret) == $hmac) {
        $iv = base64_decode(substr($encrypted, 0, 24));
        return openssl_decrypt(substr($encrypted, 24), $method, $secret, 0, $iv);
    }
}

function encryptWithTSValidation ($message, $method, $secret, &$hmac) {
    date_default_timezone_set('UTC');
    $message = substr(date('c'),0,19) . "$message";
    return encrypt($message, $method, $secret, $hmac);
}

function decryptWithTSValidation ($encrypted, $method, $secret, $hmac, $intervalThreshold) {
    $decrypted = decrypt($encrypted, $method, $secret, $hmac);
    $now = new DateTime();
    $msgDate = new DateTime(str_replace("T"," ",substr($decrypted,0,19)));
    if (($now->getTimestamp() - $msgDate->getTimestamp()) <= $intervalThreshold) {
        return substr($decrypted,19);
    }
}

$message = "My super secret information.";
$method = "AES-256-CBC";
$secret = "My32charPasswordAndInitVectorStr";  //must be 32 char length

//$encrypted = encrypt($message, $method, $secret, $hmac);
//$decrypted = decrypt($encrypted, $method, $secret, $hmac);

$encrypted = encryptWithTSValidation($message, $method, $secret, $hmac);
$decrypted = decryptWithTSValidation($encrypted, $method, $secret, $hmac, 60*60*12); //60*60m*12=12h

echo "Use HTTP header 'x-hmac: $hmac' for validating against MitM-attacks.\n";
echo "Encrypted: $encrypted\n";
echo "Decrypted: $decrypted\n";
