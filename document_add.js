var client = require('./connection.js');
const faker = require('faker/locale/vi');
const fs = require('fs');
const { argv } = require('process');

let stream = fs.createWriteStream('faker-data.txt', {flags: 'a'})

let index = 0;

function test(a) {

  const myBody = {
    name: faker.commerce.product(),
    description: faker.lorem.text(),
    price: faker.random.number(1000000),
    updatedAt: faker.random.number(2000),
    tags: faker.random.word(),
    location: faker.address.country(),
    promotions: faker.random.word(),
    brands: faker.random.word(),
    categories: {
      properties: {
        id: faker.random.uuid(),
        ownerId: faker.random.uuid(),
        version: faker.random.number(39),
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
      isDeleted: faker.random.boolean(),
      name: faker.name.lastName(),
      itemId: faker.random.uuid(),
      ordinal: faker.random.number(33),
      priceMoney: [{
        amount: faker.random.number(),
        currency: faker.random.word("curency")
      }],
      pricingType: "vnd",
      sku: faker.random.word(),
      trackInventory: faker.random.boolean(),
      upc: faker.random.word(),
      options: [{
        id: faker.random.uuid(),
        name: faker.name.lastName(),
        displayName: faker.name.jobTitle(),
        description: faker.random.word(),
        value: faker.random.number(3000)
      }]

    }],
    modifiers: [{
      id: faker.random.uuid(),
      ownerId: faker.random.uuid(),
      version: faker.random.number(),
      isDeleted: faker.random.boolean(),
      name: faker.name.jobTitle(),
      ordinal: faker.random.number(333),
      priceMoney: {
        amount: faker.random.number(333333),
        currency: faker.random.words(),
      }
    }]

  }
  const index1 = {
    index: 'catalog',
    type: 'constituencies',
    body: myBody
  }
  const index2 = JSON.stringify(myBody)
  const index3 = index2 + "\n"
  console.log(index3)
  stream.write(index3)

  if (index < a) {
    process.nextTick(test, a);
    index += 1
  } else {
    console.log('end')
    stream.end()
  }
}

const count = Number(argv[2]) || 5
console.log(count)
test(count)