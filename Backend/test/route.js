// import express 
import express from "express";
// import functions from controller 
import {
    showFoods,
    showFoodById,
} from "./order";

// init express router
const router = express.Router();

////////////////////////// FOOD ////////////////////////////////
// get all Food
router.get("/api/order", showFoods);

// get single Food 
router.get("/api/order/:id", showFoodById);

// export default router
export default router;