import json
from db import DB


def lambda_handler(event, _):
    items_type = event["pathParameters"]["type"]
    items = DB.get_items(items_type)

    return {
        "statusCode": 200,
        "body": json.dumps(items),
        "headers": {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
    }
