# MERN-Stack

# backend
    in backend you will see
        ~   app.use( cookie_parser() )
        ~   app.use( express.json() )
        ~   app.use( cors( {
                origin : "http://localhost:5173",
                credentials : true
            } ) )
    what does that mean?
    let me tell you
        ~   app.use( cookie_parser() )
        Parses coookie comming from your frontend makes #req.cookies available
        So that you can easily access cookies

        ~   app.use( express.json() )
        Makes the #req.body available
        It parses bodies coming through requests into JSON
        without this req.body is undefined
        ` app.use( body_parser ) is same as of express.json()`

        ~   app.use( cors( {
                origin : "http://localhost:5173",
                credentials : true
            } ) )
        CORS ( Cross Origin Resourse Sharing )
        without this your frontend can neither be able to connect via backend
        it doest not be able to send req.

# frontend
    why to use axios
    
    Axios is used for making HTTP requests to APIs. While you can use the built-in fetch(), Axios provides extra features that make it more convenient for handling requests and responses.
