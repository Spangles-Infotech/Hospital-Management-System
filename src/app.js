const express = require("express")
const connectDB = require("./configs/db")
const cors = require("cors")
const app = express()

const {undefinedRoutes, errorHandler} = require("./middleware/errorHandler.middleware")
const staffRouter = require("./routes/staff.route")
const doctorRouter = require("./routes/doctor.route")
const roomRouter = require("./routes/room.route")
const patientRouter = require("./routes/patient.route")
const appointmentRouter = require("./routes/appointment.route")
const inventoryRouter = require("./routes/inventory.route")
const expenseRouter = require("./routes/expense.route")
const pharmacyRouter = require("./routes/pharmacy.route")
const ipRouter = require("./routes/ip.route")
const otherRouter = require("./routes/other.route")

connectDB()

// const corsOptions = {
//     origin: [ process.env.FRONTEND_URL_DEV_1, process.env.FRONTEND_URL_DEV_2, process.env.FRONTEND_URL_PRO_1, process.env.FRONTEND_URL_PRO_2, process.env.FRONTEND_URL_PRO_3,  process.env.FRONTEND_URL_PRO_4, ],
//     credentials: true
// };
// app.use(cors(corsOptions))
// app.use(express.json());

const corsOptions = {
    origin: function(origin, callback) {
        const allowedOrigins = [
            process.env.FRONTEND_URL_DEV_1,
            process.env.FRONTEND_URL_DEV_2,
            process.env.FRONTEND_URL_PRO_1,
            process.env.FRONTEND_URL_PRO_2,
            process.env.FRONTEND_URL_PRO_3,
            process.env.FRONTEND_URL_PRO_4
        ].filter(Boolean);
        
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req,res)=>{
    return res.send("server is running")
})

app.use("/api", roomRouter)
app.use("/api", staffRouter)
app.use("/api", doctorRouter)
app.use("/api", patientRouter)
app.use("/api", appointmentRouter)
app.use("/api", inventoryRouter)
app.use("/api", expenseRouter)
app.use("/api", pharmacyRouter)
app.use("/api", expenseRouter)
app.use("/api", ipRouter)
app.use('/api', otherRouter)
app.use(undefinedRoutes)
app.use(errorHandler)

module.exports = app