const searchDb =require('../schemas/searchSchema')
const clickedArticleDb =require('../schemas/clickedArticlesSchema')


module.exports = {
    search: async (req, res) => {
        console.log(`User searched for "${req.params.arg}"`)
        let newSearchItem = new searchDb.searchSchema
        newSearchItem.keywords = req.params.arg
        newSearchItem.time = Date.now()
        newSearchItem.save().then(() => {
            res.send({error: false, message: 'Search saved'})
        }).catch(e => {
            res.send({error: true, message: e})
            console.log(e)
        })
    },
    clickedArticle: async (req, res) => {
        console.log(`User clicked on the article: ${req.body.title}` )
        let newClickedArticle = new clickedArticleDb.articleSchema
        newClickedArticle.title = req.body.title
        newClickedArticle.description = req.body.description
        newClickedArticle.image = req.body.image
        newClickedArticle.url = req.body.url
        newClickedArticle.time = Date.now()
        newClickedArticle.save().then(() => {
            res.send({error: false, message: 'Click saved'})
        }).catch(e => {
            res.send({error: true, message: e})
            console.log(e)
        })
    },

}