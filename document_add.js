var client = require('./connection.js');
const myBody = 
{
    "properties": {
      "name": {
        "type": "text",
        "fields": {
          "kw": {
            "type": "keyword"
          }
        }
      },
      "description": {"type": "text"},
      "price": {"type": "long_range"},
      "updatedAt": {"type": "long"},
      "tags": {"type": "keyword"},
      "location": {"type": "keyword"},
      "promotions": {"type": "keyword"},
      "brands": {"type": "keyword"},
      "categories": {
        "type": "nested",
        "properties": {
          "id": {"type": "text"},
          "ownerId": {"type": "text"},
          "version": {"type": "long"},
          "isDeleted": {"type": "boolean"},
          "name": {
            "type": "text",
            "fields": {
              "kw": {"type": "keyword"}
            }
          }
        }
      },
      "taxs": {
        "type": "nested",
        "properties": {
          "id": {"type": "text"},
          "ownerId": {"type": "text"},
          "version": {"type": "long"},
          "isDeleted": {"type": "boolean"},
          "name": {"type": "text"},
          "percentage": {"type": "text"}
        }
      },
      "variations": {
        "type": "nested",
        "properties": {
          "id": {"type": "text"},
          "ownerId": {"type": "text"},
          "version": {"type": "long"},
          "isDeleted": {"type": "boolean"},
          "name": {"type": "text"},
          "itemId": {"type": "text"},
          "ordinal": {"type": "long"},
          "priceMoney": {
            "properties": {
              "amount": {"type": "long"},
              "currency": {"type": "text"}
            }
          },
          "pricingType": {"type": "text"},
          "sku": {"type": "text"},
          "trackInventory": {"type": "boolean"},
          "upc": {"type": "text"},
          "options": {
            "type": "nested",
            "properties": {
              "id": {"type": "text"},
              "name": {"type": "text"},
              "displayName": {"type": "text"},
              "description": {"type": "text"},
              "value": {"type": "text"}
            }
          }
        }
      },
      "modifiers": {
        "type": "nested",
        "properties": {
          "id": {"type": "text"},
          "ownerId": {"type": "text"},
          "version": {"type": "long"},
          "isDeleted": {"type": "boolean"},
          "name": {"type": "text"},
          "ordinal": {"type": "long"},
          "priceMoney": {
            "properties": {
              "amount": {"type": "long"},
              "currency": {"type": "text"}
            }
          }
        }
      }
    }
}
function test(){client.index({  
  index: 'gov',
  type: 'constituencies',
  body: myBody
},function(err,resp,status) {
  test()
    console.log(resp);
});}

test()