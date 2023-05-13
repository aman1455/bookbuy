import express from 'express';
import { usersignup,userlogin } from '../Controller/usercontroller.js';
import { fetchproducts,getProductById} from '../controller/productcontroller.js';
const router =express.Router();


// to get signup data from user to backend 
router.post('/signup',usersignup);
router.post('/login',userlogin);
// to show products  data from backend to the user 
router.get('/products',fetchproducts);


// to show productdetails data from backend to the user
// router.get('/product/:',gptid)
router.get('/product/:id', getProductById)
export default router;