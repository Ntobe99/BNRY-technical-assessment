//import express
const express = require('express');
//import axios
const axios = require('axios');
//import dotenv
const dotenv = require('dotenv');
// cors
const cors = require('cors');
//cookie-parser
const cookieParser = require('cookie-parser');
//path
const path = require('path');
//port
const PORT = process.env.PORT || 4000;
dotenv.config();
const app = express();
app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next();
});
  app.use(
  cors(), 
  cookieParser(),
  express.json,
  express.urlencoded({extended: false})
)

// Get top headlines
app.get('/news/headlines', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
    res.send(response.data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Search articles
app.get('/news/search/:query', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${req.params.query}&apiKey=${process.env.NEWS_API_KEY}`);
    res.send(response.data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
app.get("^/$|/BNRY-test", (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'./view/index.html'));
  })

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


