# AWS CLI

## -- DynamoDB --

### Create a DynamoDB table using CLI on EC2 instance

1) After running AWS Configure, create a DynamoDB table using the following command:

```sh
aws dynamodb create-table --table-name ProductCatalog --attribute-definitions \
AttributeName=Id,AttributeType=N --key-schema \
AttributeName=Id,KeyType=HASH \
--provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

### Populate DynamoDB table using json file in EC2 instance

1) This is the command to populate the table:

**NOTE: make sure items.json is located in your working directory**

```sh
aws dynamodb batch-write-item --request-items file://items.json
```

1) This is the command to query Dynamodb from EC2 command line - make sure the region is correct. You shoud be working in us-east-1 - to verify `batch-write-item` command success.

```sh
aws dynamodb get-item --table-name ProductCatalog --region us-east-1  --key '{"Id":{"N":"403"}}'
```
