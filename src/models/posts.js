const fileUpload = require('express-fileupload');
const mongoose=require('mongoose');

const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    
   profile:{
    type: String,
			get: (value) => {
				return `${IMAGE_BASE_URL}/users/${value}`;
            }
   },
    category_id:{
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        alias: "category",
        required: true,
    },
    user_id:{
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        alias: "user",
        required: true,

    },
    status:{
        type: Boolean,
    default: true,
}
},
{
    versionKey: false,
    timestamps: true,
    toJSON: {
        transform(doc, res) {
            delete res._id;
            delete res.__v;
            delete res.userId;
            delete res.categoryId;
            delete res.createdAt;
            delete res.updatedAt;
        },
        getters: true,
    },
}
)//.plugin(mongoosePaginate);

module.exports =mongoose.model('posts',postsSchema);