
import Product from "../Model/productSchema.js"



export const fetchproducts = async(req,res)=>{
try {
  const products = await  Product.find({});
    // to get this data in frontend 

    res.status(200).json(products)

} catch (error) {
    res.status(500).json({message:error.message});
}
}

// export const gptid = async (req,res) =>{
//   try {
//     const id =req.params.id;
//    const product = await Product.findOne({'id':id})


//    res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message:error.message})
//   }
// }


export const getProductById = async (request, response) => {
  try {
      const products = await Product.findOne({ 'id': request.params.id });
      response.json(products);
  }catch (error) {
      console.log('error in product controller gpid')
  }
}
