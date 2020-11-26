const mon=require("mongoose");


var count=0;

var schema=new mon.Schema({
ct:Number,
    author:String,
    description:String,
    title:String,
    likes:Number,
    category:String
   
});


var blog=mon.model("blogpost",schema);

module.exports.createblog=createblog;
module.exports.retrieve=retrieve;
module.exports.retriveblog=retriveblog;
module.exports.likeincrease=likeincrease;
function createblog(req,res){

count=count+1;
    var au=req.body.author;
    var des=req.body.description;
    var ti=req.body.title;
    const cat=req.body.category;

   
    var blogobj=new blog({
        ct:count,
        author:au,
        description:des,
        title:ti,
        category:cat,
        likes:0

    });
    blogobj.save();
    res.render("submit.ejs",{au:au});

}

function retrieve(res){
    var blog=mon.model("blogpost",schema);
blog.find(function(err,docs){
    if(err)
    {
        console.log(err);
    }
    else{
     
    res.render("home.ejs",{doc:docs});
      
     
    }
});

}



function retriveblog(res,ti){
    var blog=mon.model("blogpost",schema);
    blog.find({title:ti},function(err,doc){
        if(err){
            console.log(err);
        }
        else{
         
            res.render("eachblog.ejs",{doc:doc});
        }
    })
    }
    function likeincrease(ti,res){
        var blog=mon.model("blogpost",schema);

        blog.find({title:ti},function(err,doc){
            if(err){
                console.log(err);
            }
            else{
             
               console.log(doc);
            }
        })
    }