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
        type:String,
        required:true,
    },
    user_id:{
        type:String,
        required:true,
    },
    status:{
        type: Boolean,
    default: true,
}
}
)

module.exports =mongoose.model('posts',postsSchema);