import { productsdata } from "./constant/constantdata.js"
import Product from "./Model/productSchema.js";

const DefaultData =async()=>{
try {
 
   await Product.insertMany(productsdata);
    console.log("data has been inserted successfully");
} catch (error) {
    console.log('Data not fetched');
}
}
export default DefaultData;