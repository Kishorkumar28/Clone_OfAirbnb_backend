import mongoose from 'mongoose'

const dbURI = 'mongodb+srv://kishor28092002:Hikishor28@airbnb-clone.rvwggib.mongodb.net/airbnb'

const connectDb = async ()=>{
    await mongoose.connect(dbURI);
    // if(mongoose.connection.readyState===1) return;
    
    // console.log(mongoose.connection.readyState)
}

export default connectDb;