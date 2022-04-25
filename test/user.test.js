// path and mongoose model
 
const User = require('../models/user_model');
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
 
describe("User Schema Test", () =>{
 
    var id;
   //insert testing
    it('Add user', () => {
        const user ={
            'firstname' : 'Aakash',
            'lastname' : "Khatri",
            'address' : "bkt",
            'email' : 'abcd@gmail.com',
            'phone' : '987653423',
            'username': 'Aakash1234',
            'password' : "1212",
            'userType' : "User"
        } ;
        return User.create(user)
        .then((res) => {
            id = res._id
            expect(res.firstname).toEqual('Aakash');
        })
    })
    
 
    it('update User', async () => {
        return User.findOneAndUpdate({_id :id}, 
       {$set : {firstname:'ram'}},
       {
           new:true
       })
        .then((pp)=>{
        expect(pp.firstname).toEqual('ram')
        })
        
       });
       
    it('login user', async () => {
        const data ={
                     'username' : 'Aakash1234',
                     'password' : '1212'
                }
        return User.findOne({data});
        expect(status.ok).toBe(1);
        })
       
    it('delete user', async () => {
        
        const status = await User.deleteOne({_id:id});
        expect(status.ok).toBe(1);
    })
});