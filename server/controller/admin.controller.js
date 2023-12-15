const Admin=require('../model/admin.model')

exports.addadmin = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const addadmin = new Admin(
        {
            username:username, 
            password:password
        });
    try {
        await addadmin.save();
    }
    catch(err) {console.log(err);}
};

exports.loginchk = (req,res)=>{
    const {username,password}=req.body;

    
    try{
        if(username ==null || password==null){
            return res.status(400).json({error:"Plz fill the all fields"})
        }

        const Adminlogin = Admin.findOne({username:username,password:password});

        if(!Adminlogin){
            res.json({message:"Admin not found"});
        }else{
            res.json({message:"Admin SignIn Successfully"});
          console.log(username);

        }
    }catch(err){
        res.send(err)
    }
}

exports.alladmin = async(req, res) => {
    Admin.find({},(err,result)=>{
        if(err) res.send(err);
        res.send(result);
    });
};

exports.updateadmin = async(req,res)=>{
        const id = req.body.id;
        try{
            await Admin.findByIdAndUpdate(id, {username:req.body.newUsername,password:req.body.newPassword},function(err){
               if(err) return res.send(err);
                res.send('updated.')
            });
        }catch(err){
            console.log(err);
        }
}

exports.deleteadmin= async(req,res)=>{
    const id = req.params.id;
    await Admin.findByIdAndRemove(id).exec();
    res.send('Deleted.');
}