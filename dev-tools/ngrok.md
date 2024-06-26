# ngrok

ngrok - tunnel local ports to public URLs and inspect traffic

**DESCRIPTION**:
ngrok exposes local networked services behinds NATs and firewalls to the
public internet over a secure tunnel. Share local websites, build/test
webhook consumers and self-host personal services.
Detailed help for each command is available with 'ngrok help <command>'.
Open http://localhost:4040 for ngrok's web interface to inspect traffic.

**EXAMPLES**:

```
ngrok http 80                    # secure public URL for port 80 web server
ngrok http -subdomain=baz 8080   # port 8080 available at baz.ngrok.io
ngrok http foo.dev:80            # tunnel to host:port instead of localhost
ngrok http https://localhost     # expose a local https server
ngrok tcp 22                     # tunnel arbitrary TCP traffic to port 22
ngrok tls -hostname=foo.com 443  # TLS traffic for foo.com to port 443
ngrok start foo bar baz          # start tunnels from the configuration file
```

**VERSION**:
2.3.35

**AUTHOR**:
inconshreveable - <alan@ngrok.com>

**COMMANDS**:

```
authtoken    save authtoken to configuration file
credits      prints author and licensing information
http         start an HTTP tunnel
start        start tunnels by name from the configuration file
tcp          start a TCP tunnel
tls          start a TLS tunnel
update       update ngrok to the latest version
version      print the version string
help         Shows a list of commands or help for one command
```

**ngrok** is a command line application, try typing `ngrok.exe http 80`
on a terminal prompt to expose port 80.

[Back home](../README.md)
