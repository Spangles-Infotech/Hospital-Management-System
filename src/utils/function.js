const sendMessage = (res, status, message, data)=>{
    if(data){
        return res.status(status).json({message:message, data:data})
    }
    return res.status(status).json({message:message})
}

const transformPurchaseData = (purchase)=>{
    return {
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

const getYear = ()=>{
    const date  = new Date()
    const year = date.getFullYear()
    return year
}

const orderNumber = (count)=>{
    return `ORD-${getYear}-${formatCount(count)}`
}

const supplierNumber = (count)=>{
    return `SUP-${formatCount(count)}`
}

module.exports = {sendMessage, transformPurchaseData, orderNumber, supplierNumber}