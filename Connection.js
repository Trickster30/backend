const mongoose =require ('mongoose'); 

mongoose.connect("mongodb+srv://mohdroshan:mohamedroshan1231@cluster0.7rxhfx5.mongodb.net/datbase1?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("connected to db")
    })
    .catch((error)=>{
        console.log("connection failed")
    })
