const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    postPhoto: String,
    postDescription: String,
    like: Number,
    comment: [{
        username: String,
         text: String,
    }]
    
});

postSchema.set('timestamps', true);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;