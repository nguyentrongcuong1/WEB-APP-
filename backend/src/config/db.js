import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
        console.log("Lien Ket CSDL Success");
    } catch (error) {
        console.log("Lien Ket CSDL Failed");
        process.exit(1);
    }

}