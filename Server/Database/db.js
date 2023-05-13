import mongoose from "mongoose";


export const connection =async(username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@adityacode.dbctto5.mongodb.net/?retryWrites=true&w=majority`;
    try { 
        // this will help to connect with our mongoose lib \
       await mongoose.connect(URL,{useunifiedTopology:true,useNewUrlParser:true});
       console.log(`database connected sucessfully`)
    } catch (error) {
        console.log('Unable to connect with database')
    }
}
export default connection;