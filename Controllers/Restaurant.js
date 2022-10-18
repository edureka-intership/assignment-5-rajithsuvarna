const Restaurant = require("../Models/Restaurant.json");

exports.getRestaurantByCity = (req, res) => {
  const filteredRestaurants = Restaurant.filter(
    (item) => item.city_name == req.params.city_name
  );
  filteredRestaurants.length
    ? res.status(200).json({
        message: "restaurants by city fetched successfully",
        restaurantList: filteredRestaurants,
      })
    : res.status(200).json({
        message: "restaurants by city fetched successfully 0 records fetched",
      });
};
