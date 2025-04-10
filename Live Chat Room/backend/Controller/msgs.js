const { MSG } = require("../MongoDB/message")

async function SetMessageInDB( body ) {
    const { sender , text  } = body
    const time = new Date
    const result = await MSG.create({
        text : text,
        sender : sender,
        time : time.toLocaleString()
    })
    if( !result ){
        console.log("Some Err Occured")
    } else {
        console.log("Message Updated")
    }
}

module.exports = {
    SetMessageInDB
}
