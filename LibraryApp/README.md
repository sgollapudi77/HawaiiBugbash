# library-demo-swa-dab

## To get started
1. Fork this repository
1. Create a Static Web Apps resource in the Azure Portal with your fork
1. Create a Azure SQL database in the Azure Portal. 
    1. Add your own IP address to the network configurations of the database and allow access from Azure services.
    1. Add the schema & data to your database. You can copy and execute the script found in file script.sql
1. Go to your Static Web Apps resource and connect to the database via the Database connections tab.
1. Go to your repository and modify the workflow file.
    1. Change the `uses: Azure/static-web-apps-deploy@v1` to `uses: Azure/static-web-apps-deploy@latest`
    1. Add a new line containing `data_api_location: "db-connections-config"` below `output_location: "build" # Built app content directory - optional`

The setup is complete!