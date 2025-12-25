#!/bin/bash

echo "Build script starting..."

# Install dependencies
npm install
# Build
npm run build

# mkdir /var/www/pokedex

# cp /full-stack-open-pokedex/dist/index.html /var/www/pokedex/
# cp /full-stack-open-pokedex/dist/bundle.js /var/www/pokedex/

# systemctl start pokedex
# journalctl -u pokedex
