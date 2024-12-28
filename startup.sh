#!/bin/sh

# Start json-server on port 3000 in the background
json-server --watch db.json --port 3000 &

# Start the Remix app using Vite on port 5173
npm run dev -- --host 0.0.0.0
