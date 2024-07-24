const Product = require('../models/product')

const getall =  async(req, res) => {
    try {
    const product = await Product.find()
        if (!product) {
          return  res.status(404).json({message:"not found"})
        }
        res.json({product})
    }catch(err) {
        res.status(500).json({message:"not found"})
    }
    
}

const getProduct  =  async(req, res) => {
    try{
        // get the id 
        const productId =  req.params.id 
        // get the product by id 
        const product = await Product.findById(productId)
        // give feedback and response
        if (!product){
           return res.status(404).json({message:"not found"})
        }
        res.json({the_product: product})
    }catch(err) {
        res.status(500).json({message:"not found"})
    }

}

const addProduct =async (req, res) => {
    try{
        //create a new product 
        const product = await Product.create(req.body)
        if (!product){
            return res.status(404).json({message:"not found"})
        }
        // respond with the new product
        res.json({product:product});
    }catch(err) {
        res.status(500).json({message:"not found"})
    }
}

const updateProduct = async (req, res) => {
    try{
        // get  the id 
        const productId = req.params.id;
        // find and update 
        const product = await Product.findByIdAndUpdate(productId,req.body)
        // GIVE FEEDBACK
        if (!product){
            return res.status(404).json({message:"Product not found"});
        }
        const updated= await Product.findById(productId)
        res.status(200).json({"updated product":updated})
    }catch(err) {
        res.status(500).json({message:"product not found"})
    }

}
 const deleteProduct = async(req, res) => {
    try {
    const productId =  req.params.id 
    const product  = await Product.deleteOne({id:productId})
    if (!product) {
       return  res.status(404).json({message:"Product not found"})
    }
        res.json({success:"deleted successfully"})
    }catch(err) {
        res.status(500).json({message:"not found"})
    }
}

module.exports = {
    getall,
    getProduct:getProduct,
    addProduct :addProduct,
    updateProduct,
    deleteProduct
}