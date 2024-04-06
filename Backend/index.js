const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const respons = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username,secret: username, firstname: username},
        {headers: {"private-key": "fa5be3e2-8eb2-44de-89d2-dd20c3149f12"}}
    )
        return res.status(respons.status).json(respons.data);
  }catch (e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);