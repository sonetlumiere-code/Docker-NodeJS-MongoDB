const mongoose = require('mongoose')
const express = require('express')
const PORT = 3444;

const app = express()

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://myuser:mypassword@localhost:27019/mydatabase?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

const User = mongoose.model('User', userSchema);

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
