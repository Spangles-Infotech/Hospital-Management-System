const sendMessage = (res, status, message, data, total)=>{
    if(data){
        return res.status(status).json({message:message, data:data, total:total})
    }
    return res.status(status).json({message:message})
}
const transformPurchaseData = (purchase)=>{
    return {
        orderNumber:purchase.orderNumber,
        supplierId: purchase.supplierId,
        purchaseDate: purchase.purchaseDate,
        supplierName: purchase.supplierName,
        supplierPhoneNumber: purchase.supplierPhoneNumber,
        invoiceNumber: purchase.invoiceNumber,
        deliveryDate: purchase.deliveryDate,
        medicines: purchase.medicineInfo?.medicines || [],
        totalAmount: purchase.medicineInfo?.totalAmount || 0,
        totalQuantity: purchase.medicineInfo?.totalQuantity || 0,
        paymentType: purchase.paymentInfo?.paymentType,
        isRoundOff: purchase.paymentInfo?.isRoundOff,
        totalGstAmount: purchase.paymentInfo?.totalGstAmount,
        netAmount: purchase.paymentInfo?.netAmount,
        grossAmount: purchase.paymentInfo?.grossAmount,
        roundOff: purchase.paymentInfo?.roundOff,
    }
}

const formatCount = (count) => {
    return String(count + 1).padStart(4, "0");
};

const getYear = new Date().getFullYear();

const orderNumber = (count)=>{
    return `GH-${getYear}-${formatCount(count)}`
}

const supplierNumber = (count)=>{
    return `SUP-${formatCount(count)}`
}

const productNumber = (count)=>{
    return `PRD-${formatCount(count)}`
}
const skipPage = (page,limit)=>{
    return limit * (page - 1)
}

const doctorNumber = (count)=>{
    return `DOC-${formatCount(count)}`
}
const patientNumber = (count)=>{
    return `PAT-${formatCount(count)}`
}


module.exports = {sendMessage, transformPurchaseData, orderNumber, supplierNumber, productNumber, skipPage, doctorNumber, patientNumber}