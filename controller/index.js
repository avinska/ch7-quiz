const { Product, Stock } = require("../models");

//route to home page
const Home = async (req, res) => {
  const productList = await Product.findAll();
  res.render("productDetails", {
    data: productList,
  });
};

//route create
const getAdd = (_, res) => {
  res.render("addProduct");
};
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
    product_id: product.uuid,
  });
  res.redirect("/");
};

// Update
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
  // res.json(productList);
};

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
module.exports = {
  Home,
  getAdd,
  postAdd,
  editProduct,
  updateProduct,
};
