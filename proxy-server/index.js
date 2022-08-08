const express = require('express');
const cors = require('cors');
const bodyPaser = require('body-parser');
const axios = require('axios');
const PORT = 4444;

const DESTINATION_URI = 'http://api-staging.mercator.ai'

const app = express();
app.use(cors());
app.use(bodyPaser.json());

app.use(async (req, res) => {
    const config = {
        'method': req.method.toLowerCase(),
        'url': DESTINATION_URI + req.url,
        'headers': {
        }
      };
      
      try{
        console.log('REDIRECTING')
        const result = await axios(config)
        console.log('SUCCESS', result.data)
        res.status(200).json(result.data).send()
      } catch (err) {
        console.error(err)
        res.status(400).send()
      }
      
})

app.listen(PORT, () => console.log('Listening on', PORT));