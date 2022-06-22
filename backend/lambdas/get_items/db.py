import boto3
from boto3_type_annotations.dynamodb.service_resource import ServiceResource


class DB:
    dynamodb: ServiceResource = boto3.resource(
        "dynamodb", endpoint_url="http://localhost:8000"
    )
    table = dynamodb.Table("TableName")

    @staticmethod
    def get_items():
        ...
