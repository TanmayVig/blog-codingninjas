const router = require('express').Router();
const Grid = require("gridfs-stream");
const upload = require('../middleware/upload')
const mongoose = require('mongoose');
let Blog = require('../models/blog.modal');


router.route('/create').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;

    const newBlogData = {
        title,
        description,
        image,
    }

    const newBlog = new Blog(newBlogData);
    

    newBlog.save()
           .then(() => res.json('Blog Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/update', async (req,res) =>{
    console.log('hit');
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    Blog.findById(id).then(doc =>{
        if(doc){
            Blog.findOneAndUpdate({_id: id}, {title, description, image}).then(doc=>{
                res.status(200).send('Success');
            }).catch(err=>{
                console.log('UPDATE ERROR');
                res.status(500).send('Internal Server Error');
            })
        }else res.status(404).send('Blog Not Found');
    }).catch(err =>{
        console.log(err);
        res.status(500).send('Internal Server Error');
    })
    
});

router.get('/all', async (req,res)=>{
    Blog.find().then(doc=>{
        if(!!doc){
            res.status(200).json({
                massage: "Success",
                blogs: doc,
            });
        }else{
            res.status(404).json({
                message: "Error",
                blog: [],
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).send("INTERNAL SERVER ERROR");
    })
});

router.get('/:id', async (req,res)=> {
    Blog.findOne().then( doc=>{
        if(!!doc){
            res.status(200).json({
                message: "Success",
                blog: doc,
            })
        }else res.status(404).json({
            message: "Error",
            blog:{}
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).send("INTERNAL SERVER ERROR");
    })
})


router.delete('/:id', async(req, res) =>{
    try{
        await Blog.findOneAndDelete({ _id: req.params.id});
        res.status(200).json([
            {
                message: 'Blog Deleted Sucessfully',
                type: 'success'
            }
        ])
    }
    catch(err){
        console.error(err);
        res.status(500).send('SERVER ERROR');
    }
    
})

// router.delete("/:filename", async (req, res) => {
//     try {
//         var gfs = Grid(mongoose.connection.db, mongoose.mongo);
//         gfs.collection('images.chunks');
//         // await gfs.files.findOneAndDelete({ filename: '1687561004651-any-name-test2.jpeg' });
//         await gfs.files.findOneAndDelete({ files_id: '6496232c0f2c90f5bb73f97f' });
        
//         console.log(req.params.filename)
//         res.send("success");
//     } catch (error) {
//         console.log(error);
//         res.send("An error occured.");
//     }
// });

module.exports = router;