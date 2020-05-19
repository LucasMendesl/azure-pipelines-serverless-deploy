# Azure Pipelines Serverless Deploy

> a simple demonstration from ci/cd process using serverless framework and azure pipelines

## Run Local

this project uses serverless-offline plugin to help us run the project locally

```sh
   npm run offline
```

## Deploy

if you want to deploy application without using azure pipelines, you can run a simple command, following the example below:

```sh
    #create aws bucket using terraform

    terraform init #init terraform to provision env resources

    terraform plan #validate created resources

    terraform apply -var="access_key=your_access_key" -var="secret_key=your_secret_key" -auto-approve
    #apply terraform changes, passing aws access key and secret to provision s3 bucket

    # if your bucket exists, ignore terraform script
    npm run deploy:dev #or use other env like hml or prod
```