const dotenv = require("../configs/dotenv")

const errorHandler = async(err, req,res, next)=>{
    return res.status(err.statusCode || 500).json({
        message:err.message || "something went wrong", 
        error: process.env.NODE_ENV === 'development' ? err.stack : null
    })
}

const undefinedRoutes = async(req,res, next)=>{
    const error = new Error("Route not found");
    error.statusCode = 404;
    return next(error);
}

module.exports = {errorHandler, undefinedRoutes}