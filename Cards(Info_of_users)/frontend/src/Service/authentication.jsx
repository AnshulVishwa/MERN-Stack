function check_for_null( info ){
    if( info.name.trim() == "" ) return { msg : "name is required" }
    if( info.dob.trim() == "" ) return { msg : "dob is required" }
    if( info.age.trim() == "" ) return { msg : "age is required" }
    if( info.gender.trim() == "" ) return { msg : "gender is required" }
    if( info.profession.trim() == "" ) return { msg : "profession is required" }
    if( info.description.trim() == "" ) return { msg : "description is required" }

    return { msg : "Form Submitted" }
}

function FormSubmition( info ) {
    const nullValues = check_for_null(info)
    return nullValues
}

export default FormSubmition