require('dotenv').config()

const express = require('express')
// const { default: OpenAI } = require('openai')
const path = require('path')
// const openai = new OpenAI({
//         baseURL: 'https://api.deepseek.com',
//         apiKey: process.env.DEEPSEEK_API_KEY,
// });

const app = express()

app.use('/libs', express.static(path.join(__dirname, 'node_modules')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')))
app.use('/scripts', express.static(path.join(__dirname, 'js')))

// async function getFromAI() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "system", content: "You are a helpful assistant." }],
//         model: "deepseek-chat",
//         temperature: 0
//     });

//     console.log(completion.choices[0].message.content);
// }

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname + '/html/index.html'))
})

app.get('')

app.listen(80, () => {
    console.log('Web is forking')
})