if [ "$NODE_ENV" == "production" ]; then
    npm run build
else
    exit 0
fi
