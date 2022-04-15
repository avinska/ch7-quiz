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

//route to create page 
const getAdd = (_, res) => {
    res.render('addProduct')
}

//route to post newly created data
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

//route to edit page
const editProduct = async (req, res) => {
    try {
      const productList = await Product.findByPk(req.params.uuid, {
        include: [
          {
            model: Stock,
            as: "Stock",
          },
        ],
      });
      res.render("editProduct", {
        product: productList,
      });
    } catch (err) {
      res.send("Data Tidak Di Temukan");
    }
  };

//route to update edited data
  const updateProduct = async (req, res) => {
    try {
      const product = await Product.update(
        {
          product_name: req.body.product_name,
          price: req.body.price,
          description: req.body.descript,
          img_url: req.body.imgproduct,
        },
        {
          where: {
            uuid: req.params.uuid,
          },
        }
      );
      await Stock.update(
        {
          sold: req.body.sold,
          in_stock: req.body.in_stock,
        },
        {
          where: {
            product_id: req.params.uuid,
          },
        }
      );
    } catch (err) {
      res.send("Data Produk Gagal Masuk");
    }
    
    res.redirect(`/details/${req.params.id}`)
  };

// route to delete data
const Delete = async (req, res) => {
    await Product.destroy({
        where: {
            uuid: req.params.id
        }
    });
}

module.exports = {
    Home, getAdd, postAdd, editProduct, updateProduct, Delete, 
}
