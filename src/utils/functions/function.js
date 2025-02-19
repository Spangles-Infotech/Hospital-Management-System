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
        case "allocated ":
            bgColor = "#00BE5F";
            color = "#CCFFDD"
            break;
        case "active":
            bgColor="#D3EAFE";
            color="#0073E5"
            break;
        case "consulted":
            bgColor="#CCFFDD";
            color="#00BE5F"
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
        case "in stock":
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

export function getDateFromISO(isoString) {
    console.log("isoString", isoString)
    return isoString?.split('T')[0];
}