// helper.js
const exeQuery = require('../dataContext/PrimeDBContext');
const { handleResponse } = require('../utils/responseHandler');

// Common response handler function
const handleRequest = async (req, res, serviceMethod) => {
    try {
        const Data = req.body || req.query;
        const result = await serviceMethod(Data);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { handleRequest };
