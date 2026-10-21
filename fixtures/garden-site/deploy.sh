#!/bin/sh
# Deploy strony garden-site na wolumen UI (CGC). Odpalane jobem w klastrze po klonie repo:
#   git clone --depth 1 -b <branch> https://github.com/…/docs-chat-widget /tmp/w
#   sh /tmp/w/fixtures/garden-site/deploy.sh
# Zakłada wolumen UI zamontowany na /data (cgc job: -v <vol> -fp /data).
set -e
cd /tmp/w
npm install -w fixtures/garden-site --no-audit --no-fund
npm run build -w fixtures/garden-site
rm -rf /data/*
cp -a fixtures/garden-site/build/. /data/
echo DEPLOY_OK
ls /data
