var client = require('./connection.js');

client.indices.delete({index: 'catalog'},function(err,resp,status) {  
  console.log("delete",resp);
});