# Start the backend 

`cd .\azure-cosmos-db\`
`dab start`

# Start the frontend

`cd ./client`
`npm start`

# Enable CORS

Go to dab-config.json and add cors: origins : ["*"];

Reference for building the client - https://www.educative.io/courses/full-stack-applications-with-graphql/7DqRnw15w88

# TO-DO

When requests are made to /data-api -> should be re-directed to http://localhost:5001 