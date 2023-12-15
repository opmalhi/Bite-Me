const User=require('../model/user.model')


exports.loginchk = (req,res)=>{
    const {username,password}=req.body;

    
    try{
        if(username ==null || password==null){
            return res.status(400).json({error:"Plz fill the all fields"})
        }

        const userlogin = User.findOne({username:username,password:password});

        if(!userlogin){
            res.json({message:"User not found"});
            alert('Login Unsucessfull')
        }else{
            res.json({message:"user SignIn Successfully"});
            alert('Login Successful')
        }
    }catch(err){
        res.send(err)
    }
}
exports.signup = async(req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const DOB = req.body.DOB;
    const address = req.body.address;

    const signup = new User(
        {
            name:name, 
            username:username, 
            email: email, 
            password:password, 
            phone:phone,
            DOB:DOB, 
            address:address
        });
    try {
        await signup.save();
    }
    catch(err) {console.log(err);}
};
exports.logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return console.log(err)
        }else{
            console.log('Destroying session');
        }
        alert("Logged Out!")
        res.redirect('/')
    });
}

exports.allcustomer = async(req, res) => {
    User.find({},(err,result)=>{
        if(err) res.send(err);
        res.send(result);
    });
};