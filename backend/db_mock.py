import boto3
from boto3_type_annotations.dynamodb.service_resource import ServiceResource


dynamodb: ServiceResource = boto3.resource(
    "dynamodb", endpoint_url="http://localhost:8000"
)

table = dynamodb.create_table()

table.put_item(
    Item={},
)

table.put_item(
    Item={},
)

table.put_item(
    Item={},
)
