var crypto = require('crypto');

var encrypt = function (message, method, secret, hmac) {
    //var iv = crypto.randomBytes(16).toString('hex').substr(0,16);    //use this in production
    var iv = secret.substr(0, 16);    //using this for testing purposes (to have the same encryption IV in PHP and Node encryptors)
    var encryptor = crypto.createCipheriv(method, secret, iv);
    var encrypted = new Buffer(iv).toString('base64') + encryptor.update(message, 'utf8', 'base64') + encryptor.final('base64');
    hmac.value = crypto.createHmac('md5', secret).update(encrypted).digest('hex');
    return encrypted;
};

var decrypt = function (encrypted, method, secret, hmac) {
    if (crypto.createHmac('md5', secret).update(encrypted).digest('hex') == hmac.value) {
        var iv = new Buffer(encrypted.substr(0, 24), 'base64').toString();
        var decryptor = crypto.createDecipheriv(method, secret, iv);
        return decryptor.update(encrypted.substr(24), 'base64', 'utf8') + decryptor.final('utf8');
    }
};

var encryptWithTSValidation = function (message, method, secret, hmac) {
    var messageTS = new Date().toISOString().substr(0, 19) + message;
    return encrypt(messageTS, method, secret, hmac);
}

var decryptWithTSValidation = function (encrypted, method, secret, hmac, intervalThreshold) {
    var decrypted = decrypt(encrypted, method, secret, hmac);
    var now = new Date();
    var year = parseInt(decrypted.substr(0, 4)), month = parseInt(decrypted.substr(5, 2)) - 1,
        day = parseInt(decrypted.substr(8, 2)), hour = parseInt(decrypted.substr(11, 2)),
        minute = parseInt(decrypted.substr(14, 2)), second = parseInt(decrypted.substr(17, 2));
    var msgDate = new Date(Date.UTC(year, month, day, hour, minute, second))
    if (Math.round((now - msgDate) / 1000) <= intervalThreshold) {
        return decrypted.substr(19);
    }
}

var message = 'My super secret information.';
var method = 'AES-256-CBC';
var secret = "My32charPasswordAndInitVectorStr"; //must be 32 char length
var hmac = {};

//var encrypted = encrypt(message, method, secret, hmac);
//var decrypted = decrypt(encrypted, method, secret, hmac);
var encrypted = encryptWithTSValidation(message, method, secret, hmac);
var decrypted = decryptWithTSValidation(encrypted, method, secret, hmac, 60 * 60 * 12); //60*60m*12=12h

console.log("Use HTTP header 'x-hmac: " + hmac.value + "' for validating against MitM-attacks.");
console.log("Encrypted: " + encrypted);
console.log("Decrypted: " + decrypted);