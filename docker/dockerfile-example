# https://github.com/stephen-fox/chrome-docker/blob/master/image/Dockerfile
FROM ubuntu:16.04

RUN apt-get update && apt-get clean && apt-get install -y \
    x11vnc \
    xvfb \
    fluxbox \
    wmctrl \
    wget \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
    && apt-get update && apt-get -y install google-chrome-stable

RUN useradd apps \
    && mkdir -p /home/apps \
    && chown -v -R apps:apps /home/apps

COPY bootstrap.sh /

# If you're using Puppeteer, set chromium path
#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
#ENV CHROMIUM_PATH $NVM_INSTALL_PATH/lib/node_modules/google-chrome-stable
# Configure puppeteer user
#RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
#    && mkdir -p /home/pptruser/Downloads \
#    && chown -R pptruser:pptruser /home/pptruser \
#    && chown -R pptruser:pptruser $NVM_INSTALL_PATH/lib/node_modules \
#    && chown -R pptruser:pptruser /usr/local
#USER pptruser

CMD '/bootstrap.sh'