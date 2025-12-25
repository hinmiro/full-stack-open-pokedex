#!/bin/bash

echo "Build script starting..."

# Build
npm run build

# Start backend
npm run start-prod

# Start frontend
npm run start
