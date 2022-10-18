const express = require("express");

var cityController = require("../Controllers/Location");
var mealTypeController = require("../Controllers/MealType");
var restaurantController = require("../Controllers/Restaurant");

const router = express.Router();

router.get("/getallrestaurants", cityController.getCityList);
router.get(
  "/getrestaurantsbycity/:city_name",
  restaurantController.getRestaurantByCity
);
router.get("/widget", mealTypeController.getMealType);

module.exports = router;
