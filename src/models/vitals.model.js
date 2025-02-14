const mongoose = require("mongoose")

const vitalSchema = mongoose.Schema({
    appointmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Op"
    },
    date:{
        type:Date,
        default:Date.now
    },
    temperature:{
        type:{
            type:String,
            enum:["F","C"],
            required:true
        },
        value:{
            type:Number,
        }
    },
    pulseRate:{
        type:Number,
    },
    bloodPressure:{
        type:Number,
    },
    height:{
        type:{
            type:String,
            enum:["cm","in"],
            required:true
        },
        value:{
            type:Number,
        }
    },
    weight:{
        type:{
            type:String,
            enum:["kg","lb"],
            required:true
        },
        value:{
            type:Number,
        }
    },
    symptoms:{
        type:String,
    },
    otherReports:[
        {
            testName:String,
            consultedDoctor:String,
            document:String
        }
    ]
})

const Vital = mongoose.model("Vital", vitalSchema);
module.exports = Vital;