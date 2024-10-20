import { Schema , model ,models } from "mongoose";

const userShema = new Schema({
    clerkId : {
        type:   String ,
        required: true ,
        unique : true ,
    },
    email : {
        type:   String ,
        required: true ,
    },
    username : {
        type:   String ,
        required: true ,
    },
    firstName : {
        type:   String ,
    },
    lastName: {
        type:   String ,
    },
   photo: {
        type:   String ,
        required: true ,
    },
    items : {
        type:   Array ,
        default : []
    }

})

const User = models.User || model("User",userShema)

export default User 

