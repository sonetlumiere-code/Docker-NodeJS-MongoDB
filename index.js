const mongoose = require('mongoose')
const express = require('express')
const PORT = 3000;

const thisIsContainer = true
let connectTo = ''
if (thisIsContainer) {
  connectTo = 'my-mongodb-container'
} else {
  connectTo = 'localhost'
}

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb://myuser:mypassword@${connectTo}:27017/my-node-app?authSource=admin`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

const User = mongoose.model('User', userSchema);

const app = express()

app.get('/', async (_req, res) => {
  console.log('list users...')
  const users = await User.find()
  return res.send(users)
})

app.get('/create', async (_req, res) => {
  console.log('creating user...')
  await User.create({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  })
  return res.send('User created')
})

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
