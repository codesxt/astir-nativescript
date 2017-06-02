// Los tipos de modelos son:
// 1. event
// 2. provider

// Entidad tipo event
{
  "id": "ObjectID",
  "type": "String:event",
  "attributes": {
    "title":"String",
    "category":"String",
    "description":"String",
    "when":{
      "start":"String",
      "finish":"String"
    },
    "where":{
      "address":"String"
    },
    "cost":[
      {
        "value":"Number",
        "text":"String"
      }
    ]
  },
  "relationships": {
    "provider": {
      "data":{
        "id":"ObjectID",
        "type":"provider"
      }
    }
  },
  "included": [
    {
      "id":"ObjectID",
      "type":"provider",
      "attributes":{
        
      }
    }
  ]
}

// Entidad tipo provider
{
  "id":"ObjectID",
  "type":"String:provider",
  "attributes":{
    "name":"String"
  },
  "relationships":{
    "contact":"String"
  }
}
