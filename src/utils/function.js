const sendMessage = (res, status, message, data)=>{
    if(data){
        return res.status(status).json({message:message, data:data})
    }
    return res.status(status).json({message:message})
}

module.exports = {sendMessage}