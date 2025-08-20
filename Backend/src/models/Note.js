import mongoose from "mongoose";

//1st - Create a schema
//2nd - Make a model based off of that schema

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    content:{
        type:String,
        required: true,
    },
}, 
    {timestamps: true} //createdAt, updatedAt
);

const Note = mongoose.model("Note",noteSchema);

export default Note;