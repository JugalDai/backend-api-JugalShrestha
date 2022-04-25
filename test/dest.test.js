const Destination = require('../models/destination_model');
const mongoose = require("mongoose");
 
const url = 'mongodb://127.0.0.1:27017/Test';
 
beforeAll(async () =>{
    await mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
})
 
afterAll(async () => {
 
    await mongoose.connection.close();
})
 
describe("Destination Schema Test", () =>{
 
    var id;
   //insert testing
    it('Destination booking', () => {
        const destination ={
            'dimage' : 'img',
            'dname' : "Manang",
            'ddetails' : "beautiful place",
            'dprice' : '10000000'
        } ;
        return Destination.create(destination)
        .then((res) => {
            id = res._id
            expect(res.dname).toEqual('Manang');
        })
    })
    
 
    it('update destination', async () => {
        return Destination.findOneAndUpdate({_id :id}, 
       {$set : {dname:'ram'}},
       {
           new:true
       })
        .then((pp)=>{
        expect(pp.dname).toEqual('ram')
        })
        
       });

       
    it('delete destination', async () => {
        
        const status = await Destination.deleteOne({_id:id});
        expect(status.ok).toBe(1);
    })
});