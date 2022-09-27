import { Router } from 'express';
import userController from '../Controllers/userController';
import { authController } from '../Controllers/authController';
import cors from 'cors';
const router = Router();
router.use(cors());
router.post('/register', authController.registerUser);
//RETRIEVE ALL USERS
router.get('/users', userController.getAllUser);
//RETRIEVE AN USER BY ID
router.get('/users/:id', userController.getUserById);
//CREATE AN USER WITH USER EMAIL AND NAME
router.post('/createuser', userController.createUser);
//UPDATE AN USER PASSING AN ID
router.put('/updateuser/:id', userController.updateUser);
//DELETE AN USER PASSING AN ID
router.delete('/deleteuser/:id', userController.deleteUser);
export default router;
