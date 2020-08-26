const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
 username: String,
 description: String,
 profilePhoto: String,
 mail: String,
 superlike:[{type: Schema.Types.ObjectId, ref: 'User'}],
 link: String,
 password: String,
 followers:[{String}],
 following:[{String}],
 post:[{type: Schema.Types.ObjectId, ref: 'Post'}]
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },

});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
