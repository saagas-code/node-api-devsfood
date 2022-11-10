import { Router, Request } from 'express';
import * as Controller from '../controllers/Controller';
import * as AuthController from '../controllers/AuthController';
import * as CategoryController from '../controllers/CategoryController';
import * as FoodController from '../controllers/FoodController';
import * as DiscountController from '../controllers/DiscountController'
import * as AddressController from '../controllers/AddressController'
import * as OrderController from '../controllers/OrderController'

import { Auth } from '../middlewares/Auth';
import {AuthValidator} from '../validators/AuthValidator'



const router = Router();

router.get('/ping', Controller.ping);

// Auth ---------
router.post('/user/signup', AuthValidator.signup, AuthController.signup);
router.post('/user/signin', AuthValidator.signin, AuthController.signin);
router.get('/user/request', Auth.private, AuthController.AccountREQUEST);

// Categories -----------
router.get('/devsfood/categories', CategoryController.GetAll );

// Foods -------------
router.get('/devsfood/foods', FoodController.GetAll );

// Discounts -----------------
router.get('/devsfood/discounts/:code', DiscountController.GetOne)

// Addresses -----------------
router.get('/devsfood/addresses/:idUser', AddressController.GetOne)
router.post('/devsfood/addresses/:idUser', AddressController.UpdateOne)


// Orders -------------
router.get('/devsfood/orders/:id', OrderController.GetAll)
router.post('/devsfood/orders', OrderController.CreateItems)
router.put('/devsfood/orders', OrderController.UpdateStatus)
router.post('/devsfood/orders/delete', OrderController.DeleteOrder)



export default router;