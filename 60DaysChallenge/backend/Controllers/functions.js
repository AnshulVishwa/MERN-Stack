const { MODEL } = require("../MongoDB/model");

async function getDataFromDB( req , res ) {
    const result = await MODEL.find()
    if( !result || result.length == 0 ) return res.json({msg : "No Data Found"})
    return res.json({result})
}

async function postDataIntoDB( req , res ) {
    if( !req.body ) return res.json({msg : "Body is required"})
        console.log(req.body)
    const { Day , Gym , FastFood , EveningExercise , Performance } = req.body
    if( Day==undefined || 
        Gym==undefined || 
        FastFood==undefined || 
        EveningExercise==undefined || 
        Performance==undefined ) 
        return res.json({msg : "Something is Missing"})
    await MODEL.create({
        Day,
        Gym,
        FastFood,
        EveningExercise,
        Performance
    })
    return res.json({msg : "Entry Added"})
}

module.exports = {
    getDataFromDB,
    postDataIntoDB
}
