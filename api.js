const api = require ('axios');

/*const api  = axios.create({
    baseURL: "http://a.teall.info/dice/"
});

module.exports = api;

//NO ARQUIVO INDEX

app.get ("/dice", async (req, res) => {
    try {
        const {data} = await api.get("dice");
    }
    catch(error){
        res.send({error: error.message})
    }
})*/

api.get("http://a.teall.info/dice").then(function(data){
    console.log(data);
})
module.exports = api;