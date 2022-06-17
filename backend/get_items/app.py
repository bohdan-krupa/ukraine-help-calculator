import json


def lambda_handler(event, _):
    return {
        "statusCode": 200,
        "body": json.dumps(['item1', 'item2','item3']),
    }
