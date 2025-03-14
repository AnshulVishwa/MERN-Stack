const { EXCEL } = require("../Database/model");

async function handlePostExcelData( req , res ) {
    const data = req.body.jsonData
    await EXCEL.create(data)
    res.json({ msg : "Added" })
}

module.exports = { handlePostExcelData }
