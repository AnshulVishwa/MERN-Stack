function Secret_Key_vault( pass1 ){
    if ( pass1 == "one" ){
        return (pass2) => {
            if ( pass2 == "two" ){
                return "AnshulVidhi3011"
            }
            return () => console.log("Accessing Key failed")
        }
    }
    return () => console.log("Accessing Vault failed")
}

module.exports = { 
    Secret_Key_vault
}