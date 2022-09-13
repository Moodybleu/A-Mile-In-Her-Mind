const crypto = require('crypto-js')

// encryption is a two way process -- data is encrypted using an algorithm and a key
// you must know the key to decrypt the data

// const mySecrets = 'I had a quesadilla for breakfast'

// const myEncryption = crypto.AES.encrypt(mySecrets, 'myEncKey')
// console.log(myEncryption.toString())
// const myDecrypt = crypto.AES.decrypt(myEncryption.toString(), 'myEncKey')
// console.log(myDecrypt.toString(crypto.enc.Utf8)) // select character encoding

// Hashing -- one way process
//  1. hash functions always return the same size hash regardless of the input
//  2. hash functions return the same value for the same input
//  all passwords will be hashed in the database
const bcrypt = require('bcrypt')
const myPassword = 'Bluebunny'

const hashedPassword = bcrypt.hashSync(myPassword, 12)
console.log(hashedPassword)

//  we can only compare strings to a hash to see if they match 

console.log(bcrypt.compareSync('Bluebunny', hashedPassword))