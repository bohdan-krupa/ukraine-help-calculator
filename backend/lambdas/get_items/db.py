import boto3
from boto3.dynamodb.conditions import Attr
from boto3_type_annotations.dynamodb.service_resource import ServiceResource


class DB:
    dynamodb: ServiceResource = boto3.resource("dynamodb")
    table = dynamodb.Table("UkraineHelpItems")

    @staticmethod
    def get_items(type: str):
        response = DB.table.scan(FilterExpression=Attr("type").eq(type))
        items = response.get("Items", [])
        _ = [item.update(price=int(item["price"])) for item in items]

        return items
