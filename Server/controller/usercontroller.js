
import User from '../Model/userSchema.js'


export const usersignup= async(req,res)=>{
try {

    const already=await User.findOne({username:req.body.username})
    if (already){
        return res.status(401).json({message:"user already there"})
    }
    // console.log(req.body);
    const user = req.body;
   const newUser= new User(user);
   await newUser.save();

res.status(200).json({message: user});
} catch (error) {
    res.status(500).json({message:error.message});
}
}
export const userlogin =async (req,res)=>{
    try {
        const username =req.body.username;
        const password =req.body.password;

        let user= await  User.findOne({username:username ,password:password});
        if(user){
            return res.status(200).json({data:user})
        }else{
            return res.status(401).json('Not registered');
        }
    } catch (error) {
        res.status(500).json('Error while login')
    }
}