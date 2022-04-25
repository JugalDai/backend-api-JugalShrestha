const Tours = require('../models/tours');
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
 
describe("Tour Schema Test", () =>{
 
    var id;
  
    
 
   
       
    it('delete bookings', async () => {
        
        const status = await Tours.deleteOne({_id:id});
        expect(status.ok).toBe(1);
    })
});