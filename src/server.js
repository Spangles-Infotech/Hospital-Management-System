
const app = require("./app")
const dotenv = require("./configs/dotenv")

const port = process.env.PORT;


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})


