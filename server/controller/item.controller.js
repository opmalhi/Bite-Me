const Item=require('../model/item.model')

exports.additem = async(req, res) => {
    const name = req.body.name;
    const desp = req.body.desp;
    const price = req.body.price;
    const image = req.body.image;


    const additem = new Item(
        {
            name:name,
            desp:desp, 
            price:price,
            image:image 
        });
    try {
        await additem.save();
    }
    catch(err) {console.log(err);}
};

exports.allitem = async(req, res) => {
    Item.find({},(err,result)=>{
        if(err) res.send(err);
        res.send(result);
    });
};

exports.updateitem = async(req,res)=>{
   
        const id = req.body.id;
        try{
            await Item.findByIdAndUpdate(id, {
                name:req.body.newName,
                desp:req.body.newDesp,
                desp:req.body.newDesp,
                price:req.body.newPrice},
                function(err){
               if(err) return res.send(err);
                res.send('updated.')
            });
        }catch(err){
            console.log(err);
        }
}

exports.deleteitem= async(req,res)=>{
    const id = req.params.id;
    await Item.findByIdAndRemove(id).exec();
    res.send('Deleted.');
}