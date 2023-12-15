const Reservation=require('../model/reservation.model')

exports.addreservation = async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const bookTime = req.body.bookTime;
    const date = req.body.date;
    const contact = req.body.contact;


    const addreservation = new Reservation(
        {
            name:name, 
            email:email,
            bookTime:bookTime,
            date:date,
            contact:contact
        });
    try {
        await addreservation.save();
    }
    catch(err) {console.log(err);}
};

exports.allreservation = async(req, res) => {
    Reservation.find({},(err,result)=>{
        if(err) res.send(err);
        res.send(result);
    });
};

exports.updatereservation = async(req,res)=>{
   
        const id = req.body.id;
        try{
            await Reservation.findByIdAndUpdate(id, {
                name:req.body.newName,
                email:req.body.newEmail,
                bookTime:req.body.newBookTime,
                date:req.body.newDate,
                contact:req.body.newContact},
                function(err){
               if(err) return res.send(err);
                res.send('updated.')
            });
        }catch(err){
            console.log(err);
        }
}

exports.deletereservation = async(req,res)=>{
    const id = req.params.id;
    await Reservation.findByIdAndRemove(id).exec();
    res.send('Deleted.');
}