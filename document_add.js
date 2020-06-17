var client = require('./connection.js');
const faker = require('faker/locale/vi');
const fs = require('fs');
const { argv } = require('process');

let stream = fs.createWriteStream('faker-data-3.json', {flags: 'a'})

let index = 0;


async function auto_insert(a) {
  const numVari = faker.random.number(10)
  const numModi = faker.random.number(10)
  let vari = [];
  let modi = [];
for (let j = 0; j < numModi; j++) {
  await modi.push({
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
  })  
}
  for (let j = 0 ; j < numVari ; j++) {
  await vari.push({
  id: faker.random.uuid(),
  ownerId: faker.random.uuid(),
  version: faker.random.number(33),
  isDeleted: faker.random.boolean(),
  name: faker.name.lastName(),
  itemId: faker.random.uuid(),
  ordinal: faker.random.number(33),
  priceMoney: [{
    amount: faker.random.number(),
    currency: faker.random.arrayElement(["vnd","dollar","bath","gr"])
  }],
  pricingType: faker.random.arrayElement(["FIXED_PRICING","VARUABLE_PRICING"]),
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
})
  }
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
    variations: vari,
    modifiers: modi
  }
  const string_line = JSON.stringify(myBody)
  const string = string_line + "\n"
  stream.write(string)

  if (index < a) {
    process.nextTick(auto_insert, a);
    index += 1
  } else {
    console.log('end')
    stream.end()
  }
}

const count = Number(argv[2]) || 5
auto_insert(count)