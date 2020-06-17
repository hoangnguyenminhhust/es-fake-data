var client = require('./connection.js');
const faker = require('faker');
const fs = require('fs');
const { fake } = require('faker');
const { random } = require('underscore');
function test(x) {
  const myBody = 
  {
   name: faker.commerce.product(),
   description: faker.lorem.text(),
   price: faker.random.number(1000000),
   updatedAt: faker.random.number(2000),
   tags:faker.random.word(),
   location: faker.address.country(),
   promotions: faker.random.word()
   ,
   brands: faker.random.word(),
   categories: {
    properties: {
       id: faker.random.uuid(),
       ownerId:faker.random.uuid() ,
       version:    faker.random.number(39),
       isDeleted: faker.random.boolean(),
       name: faker.name.jobTitle(),
     }
   },
   taxs: {
     properties: {
       id: faker.random.uuid(),
       ownerId: faker.random.uuid(),


       
       version: faker.random.number(),
       isDeleted: faker.random.boolean(),
       name: faker.name.lastName(),
       percentage: faker.random.word()
     }
   },
   variations: [{
       id: faker.random.uuid(),
       ownerId: faker.random.uuid(),
       version: faker.random.number(33),
       isDeleted:faker.random.boolean(),
       name:faker.name.lastName(),
       itemId: faker.random.uuid(),
       ordinal: faker.random.number(33),
       priceMoney: 
       [   {
           amount: faker.random.number(),
           currency: faker.random.word('vnd', 'dollar')
         }]
       ,
       pricingType: faker.random.word('vietnamdong', 'usd'),
       sku: faker.random.word(),
       trackInventory: faker.random.boolean(),
       upc: faker.random.word(),
       options: [{
           id: faker.random.uuid()           ,
           name: faker.name.lastName(),
           displayName:faker.name.jobTitle(),
           description:faker.random.word(),
           value: faker.random.number(3000)
       }]
     
   }],
   modifiers: 
 [{
       id: faker.random.uuid(),
       ownerId: faker.random.uuid(),
       version:faker.random.number(),
       isDeleted:faker.random.boolean(),
       name: faker.name.jobTitle(),
       ordinal:faker.random.number(333),
       priceMoney: {
           amount: faker.random.number(333333),
           currency: faker.random.word(),
     }
   }]
 
}
 const index =  {
      index: 'gov',
      type: 'constituencies',
      body: myBody
  }
const idnex2= JSON.stringify(index)
  fs.writeFileSync('./docker.json', idnex2)
  
}

test()