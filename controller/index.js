const { Product, Stock } = require('../models')

//route to home page
const Home = async (req, res) => {
    const productList = await Product.findAll()
    res.render('productDetails', {
        data: productList
    })
}


module.exports = {
    Home
}