const Designation = require("../models/designation.model")
const { sendMessage, skipPage } = require("../utils/function")

const designation = async (req, res, next) => {
    const { designationId } = req.params
    const { page, limit = 15 } = req.query

    try {
        if (req.method === "POST") {
            await Designation.create(req.body)
            return sendMessage(res, 201, "Designation Created Successfully")
        }

        if (req.method === "GET") {
            if (designationId) {
                const designation = await Designation.findById(designationId)
                if (!designation) {
                    return sendMessage(res, 404, "Designation Not Found")
                }
                return sendMessage(res, 200, "Designation Fetched Successfully", designation)
            }

            const designations = await Designation.find({ status: "Active" })
                .sort({ _id: -1 })
                .limit(limit)
                .skip(skipPage(page, limit))
            return sendMessage(res, 200, "Designations Fetched Successfully", designations)
        }

        if (req.method === "PUT") {
            await Designation.findByIdAndUpdate(designationId, req.body, { new: true })
            return sendMessage(res, 200, "Designation Updated Successfully")
        }

        if (req.method === "PATCH") {
            await Designation.findByIdAndUpdate(
                designationId,
                { status: "Inactive" },
                { new: true }
            )
            return sendMessage(res, 200, "Designation Inactivated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = designation