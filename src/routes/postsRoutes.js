const express = require("express");
const router =express.Router();
const post=require('../models/posts')
//get all
router.get("/",async(res,req)=>{
	try{
const posts =await post.find();
res.json(posts)
		}
		catch(err){
          res.json({msg:err})
	}
})

//submit 
router.post('/',async (req, res)=>{
	const post=new post({
		title:req.body.title,
		description:req.body.description,
	})
	try{
	const savedPost= await post.save();
    res.json(savedPost);
	}
	catch(err){
          res.json({msg:err})
	}
});
//specific
router.get("/:postId",async (req,res)=>{
	try{
 const post=await post.findById(req.params.postId);
 res.json(post)
	} 
	catch(err){
res.json({mesage:err})
	}
});
//deletng
router.delete("/:postId",async (req,res)=>{
	try{
 const removedPost=await post.remove({_id:req.params.postId});
 res.json(removedPost)
	} 
	catch(err){
res.json({mesage:err})
	}
})
//update
router.delete("/:postId",async (req,res)=>{
	try{
 const updatedPost=await post.updateOne({_id:req.params.postId},
	{$set:{title:req.body.title}
});
 res.json(updatedPost)
	} 
	catch(err){
res.json({mesage:err})
	}
})


module.exports=router;	