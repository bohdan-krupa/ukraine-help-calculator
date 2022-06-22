# Ukraine help calculator backend

## Developing locally
1. ```python -m venv venv```
2. activate venv (depends on the OS)
3. ```pip install -m layers/packages/requirements.txt```

## Start locally
1. ```docker-compose up``` (run dynamodb locally)
2. run dynamodb mock (only once, see below)
3. ```sam local start-api```


## Run DynamoDB mock
1. ```docker-compose up``` (run dynamodb locally)
2. ```python db_mock```
3. ```aws configure``` (create fake credentials for AWS)
    - ```AWS Region: "local"```
    - ```AWS Access Key ID: "fakeMyKeyId"```
    - ```AWS Secret Access Key: "fakeSecretAccessKey"```
4. ```aws dynamodb list-tables --endpoint-url http://localhost:8000``` (check table)
