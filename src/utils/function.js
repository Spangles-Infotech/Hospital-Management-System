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
        totalDiscountAmount: purchase.paymentInfo?.totalDiscountAmount,
        netAmount: purchase.paymentInfo?.netAmount,
        grossAmount: purchase.paymentInfo?.grossAmount,
        roundOff: purchase.paymentInfo?.roundOff,
    }
}

const transformRegisteredOpData = (data)=>{
    return {
        id:data._id,
        patientId: data.patient.patientId,
        patientName: data.patient.patientName.name,
        address: data.patient.address,
        age:data.patient.age,
        phoneNumber:data.patient.mobileNumber.number,
        gender:data?.patient?.gender,
        bloodGroup:data?.patient?.bloodGroup,
        temperature:data.vital?.temperature.value,
        pulse:data.vital?.pulseRate,
        height:data.vital?.height.value,
        weight:data.vital?.weight.value,
        bloodPressure:data.vital?.bloodPressure,
        patientType:data?.appointment?.patientType,
        symptoms:data?.vital?.symptoms,
        diagnosis:data.diagnosis,
        labTests:data?.labTests,
        prescription:data?.prescriptionInfo?.prescriptions,
        otherServices:data?.otherServices,
        otherReports:data?.otherReports,
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

const searchQuery = (search, query, searchItems) => {
    if (search && search !== "" && search !== undefined) {
      query.$or = searchItems.map((item) => {
        return { [item]: new RegExp(search, "i") };
      });
    }
  };
  
//  funtion to set the date into query
const dateQuery = (from, to, query = {}, title) => {
    if (from && to) { 
        if (title) {
            query[title] = { $gte: new Date(from), $lte: new Date(to) };
        } else {
            query.registerOn = { $gte: new Date(from), $lte: new Date(to) };
        }
    }
    return query; 
};


// funtion is used to set the filter thing with query variable
const setQuery = (menus, search, searchItems, query, from, to, title) => {
menus?.forEach((menu) => {
    for (const key in menu) {
    if (
        menu.hasOwnProperty(key) &&
        menu[key] !== undefined &&
        key !== "" &&
        menu[key] !== ""
    ) {
        return (query[key] = menu[key]);
    }
    }
});
if (from !== "" && to !== "" && from !== undefined && to !== undefined) {
    dateQuery(from, to, query, title);
}
if (search && search !== "" && search !== undefined) {
    searchQuery(search, query, searchItems);
}
};

module.exports = {sendMessage, transformPurchaseData, orderNumber, supplierNumber, productNumber, skipPage, setQuery, dateQuery, searchQuery, transformRegisteredOpData}