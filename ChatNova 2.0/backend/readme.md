Hello frontend developer, i am here to guide you about routes

# /user/signup
for Signup
<!-- 
    {
        name,
        dob,
        age,
        gender,
        username,
        password
    } 
-->

# /user/login
for Login
<!--
    {
        username,
        password
    }
-->

# /ad_info/pp
to set the profile picture
<!-- 
    {
        username, 
        pp(only name of the file)
    }
-->

# /ad_info/pp/:username
to get the profile picture of specific user
<!-- nothing -->

# /user
to geṭ all the users in AD_INFO schema

# ad_info/all/:username
to get all info of user

# /ad_info/archieve?username=
to get the archieve users of specific user

# /ad_info/archieve
to set the archieve users of specific user
<!-- 
    {
        username,
        user
    }
-->

# /ad_info/blocked?username=
to get the blocked users of specific user

# /ad_info/blocked
to set the blocked users of specific user
<!-- 
    {
        username,
        user
    }
-->

# /ad_info/description?username=
to get the description users of specific user

# /ad_info/description
to set the description users of specific user
<!-- 
    {
        username,
        description
    }
-->

# /msg/set
to set the chat for user
<!-- 
    user1,
    user2,
    sender,
    text
-->

# /msg/get?user1=&user2=
to get all the chats of specific user

# /msg/getAll
to get all the chats from db
