// Load environment variables immediately
require('dotenv').config();  

const app = require("./app"); 

// Now you can safely get the port from process.env
const port = process.env.PORT; 

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`); 
});