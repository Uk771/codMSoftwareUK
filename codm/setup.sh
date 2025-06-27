#!/bin/bash

echo "Setting up CODM Software Next.js project..."

# Create public directory if it doesn't exist
mkdir -p public

# Copy assets from parent directory
echo "Copying assets..."
cp -r ../assets ./public/

# Install dependencies
echo "Installing dependencies..."
npm install

echo "Setup complete! Run 'npm run dev' to start the development server." 