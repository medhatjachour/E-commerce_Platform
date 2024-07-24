const Category = require('../models/category');

const getall =  async(req, res) => {

    const categories = await Category.find()
    res.json({categories})

}

const getCategory  =  async(req, res) => {

    const categoryId =  req.params.id 
    const category = await Category.findById(categoryId)
    res.json({the_Category: category})

}

const addCategory =async (req, res) => {
    // get the sent in data off the request body
    const {name,description} = req.body
    // or 
    //  const name = req.body.name;
    //  const body = req.body.body;
    // create a new category object
    const category = await Category.create({
        name: name,
        description:description,
    })
    // respond with the new category
    res.json({category:category});
}

const updateCategory = async (req, res) => {
    // get  the id 
    const categoryId = req.params.id;
    // get the data off the req body
    const {name,description} = req.body
    // or 
    // const name = req.body.name;
    // const description = req.body.description;

    // find and update 
    const category = await Category.findByIdAndUpdate(categoryId, {
        name:name,
         description:description
    })
    // find updated 
    const updated= await Category.findById(categoryId)
    res.json({
        category:category,
        updated : updated
    });

}
 const deleteCategory = async(req, res) => {
    const categoryId =  req.params.id 
    const category = await Category.deleteOne({id:categoryId})
    res.json({success:"deleted successfully"})

}

module.exports = {
    getall,
    getCategory:getCategory,
    addCategory :addCategory,
    updateCategory,
    deleteCategory
}