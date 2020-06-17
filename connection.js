var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'http://157.230.251.64:9200/'
  ]
});

module.exports = client;  