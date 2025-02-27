const express = require("express")
const { prescription, supplier, purchase, stocks, getMedicineDetails, getSupplierBySupplierId, getSupplierNumber, getOrderNumber, getProductCode, getAllSupplierName, getAllGenericName, insertManyStock } = require("../controllers/pharmacy.controller")
const pharmacyRouter = express.Router()

// prescription routes

pharmacyRouter.get("/get-prescription/:appointmentId", prescription)
pharmacyRouter.post("/post-prescription/:appointmentId", prescription)
pharmacyRouter.put("/update-prescription/:appointmentId", prescription)

// stock routes

pharmacyRouter.get("/get-all-stock", stocks)
pharmacyRouter.get("/get-stock/:stockId", stocks)
pharmacyRouter.post("/add-stocks", stocks)
pharmacyRouter.put("/update-stocks/:stockId", stocks)
pharmacyRouter.get("/get-medicine-detail", getMedicineDetails)
pharmacyRouter.get("/get-product-code", getProductCode)
pharmacyRouter.get("/get-all-generic-name", getAllGenericName)
pharmacyRouter.post("/insert-many-stock", insertManyStock)

// supplier routes

pharmacyRouter.get("/get-all-supplier", supplier)
pharmacyRouter.get("/get-supplier/:supplierId", supplier)
pharmacyRouter.post("/add-supplier", supplier)
pharmacyRouter.put("/update-supplier/:supplierId", supplier)
pharmacyRouter.get("/get-supplier-info", getSupplierBySupplierId)
pharmacyRouter.get("/get-supplier-id", getSupplierNumber)
pharmacyRouter.get("/get-all-supplier-name", getAllSupplierName)

// purchase routes

pharmacyRouter.get("/get-all-purchase", purchase)
pharmacyRouter.get("/get-purchase/:purchaseId", purchase)
pharmacyRouter.post("/add-purchase", purchase)
pharmacyRouter.put("/update-purchase/:purchaseId", purchase)
pharmacyRouter.get("/get-order-id", getOrderNumber)


module.exports = pharmacyRouter



