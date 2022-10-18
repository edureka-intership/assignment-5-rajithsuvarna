const City = require('../Models/Location.json');


exports.getCityList = (req, res) => {
    res.status(200).json({ message: "City Fetched Sucessfully", city: City })
}