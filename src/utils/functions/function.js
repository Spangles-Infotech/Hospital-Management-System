export const getStatusStyles = (status) => {
    let bgColor = "";
    let color = "";

    switch (status?.toLowerCase()) {
        case "fail":
        case "rejected":
        case "inactive":
        case "unpaid":
            bgColor = "#FEEAEC";
            color = "#E72546";
            break;

        case "pending":
            bgColor = "#E7F8FD";
            color = "#0D7A9C";
            break;

        case "ending": 
            bgColor = "#E7F8FD";
            color = "#0D7A9C";
            break;

        default: 
            bgColor = "#ECF9EA";
            color = "#16BE16";
            break;
    }

    return { bgColor, color };
};

export const getTableCellColor = (val, data)=>{
    switch (val?.toLowerCase()){
        case "time & date":
            return "#278C0B"
        case "In stock":
            if( Number(data) < 400){
                return "#ED1C00"
            }else{
                return "#009206"
            }
        case "payable balance":
            return "#FF1111"
        default:
            return "#505050"
            

    }
}