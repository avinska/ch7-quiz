const {
    Product,
    Stock
} = require('../models')

//route to home page
const Home = async (req, res) => {
    const productList = await Product.findAll()
    res.render('home', {
        data: productList
    })
}

//route create
const getAdd = (_, res) => {
    res.render('addProduct')
}
const postAdd = async (req, res) => {
    const product = await Product.create({
        product_name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        img_url: req.body.img_url,
    });
    await Stock.create({
        sold: req.body.sold,
        in_stock: req.body.in_stock,
        product_id: product.uuid
    })
    res.redirect('/')
}

const findProduct = async (req, res) => {
    const productList = await Product.findOne({
        where: {
            id: req.params.uuid
        },
        include: ['stock']
    })
    res.render('productDetails', {
        data: productList
    })
}

module.exports = {
    Home,
    getAdd,
    postAdd,
    findProduct

}