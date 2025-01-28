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