const fetch = require('node-fetch')

module.exports = {
    search: async (req, res) => {
        const getPosts = await fetch('https://gnews.io/api/v4/search?q='+ req.params.arg +'&token=' + process.env.API_TOKEN + '&lang=en' + '&max=9')
        const posts = await getPosts.json();
        res.send({error: false, articles: posts})
    },

}