function check_for_null( info ){
    const msg = "submition of all the information is required"
    if( info.name.trim() == "" ) return { msg }
    if( info.dob.trim() == "" ) return { msg }
    if( info.age.trim() == "" ) return { msg }
    if( info.gender.trim() == "" ) return { msg }
    if( info.profession.trim() == "" ) return { msg }
    if( info.description.trim() == "" ) return { msg }
}

function FormSubmition( info ) {
    const nullValues = check_for_null(info)
    try{
        if( nullValues.msg ){
            return nullValues
        }
    } 
    catch(err){}
    const behaviour = misBehaviour( info )
    try{
        if( behaviour.msg ){
            return behaviour
        }
    } 
    catch(err){}
}

function misBehaviour( info ){
    if (/[a-zA-Z]/.test(info.age)) {
        return { msg: "age does not contain characters" };
    }
    if (/[a-zA-Z]/.test(info.dob)) {
        return { msg: "Date of Birth does not contain characters" };
    }
}

export default FormSubmition