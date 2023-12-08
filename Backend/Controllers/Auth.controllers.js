import UserModel from "../Models/User.model.js";
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

export const Login = async (req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password) return res.status(401).json({success:false, message:'Email or password not provided'});

        const user = await UserModel.findOne({email:email});
        if(!user) return res.status(401).json({success:false, message:'User not found'});

        const isCorrectPassword = bcrypt.compare(password, user.password);
        if(!isCorrectPassword) res.status(401).json({success:false, message:'Password does not match'});

        const token = Jwt.sign({id:user._id}, process.env.JWT_SECRET);

        return res.status(200).json({success:true, message:'Login successful', user, token});


    }catch(error){
        console.log(error);
        return res.status(500).json({success:false, message:error.message})
    }
}

export const Register = async(req, res) => {
    try{
        const {email, password, dob} = req.body;
        if(!email || !password || !dob) return res.status(401).json({success:false, message:'All fields are mandatory'});

        const hashedPassword = await bcrypt.hash(password,10);

        const user = new UserModel({
            email,
            password: hashedPassword,
            dob
        })

        await user.save();

        return res.status(200).json({success:true, message:'Registration successful'});

    }catch(error){
        return res.status(500).json({success:false, message:error.message})
    }

}

export const GetCurentUser = async(req,res) => {
    try{
        const {token} = req.query;
        if(!token) res.status(401).json({success:false, message:'Token not provided'});

        const userId = await Jwt.verify(token, process.env.JWT_SECRET);
        if(!userId) res.status(401).json({success:false, message:'Invalid token'});

        const user = await UserModel.findById(userId.id);
        if(!user) res.status(401).json({success:false, message:'User not found'});

        return res.status(200).json({success:true, user});

    }catch(error){
        console.log(error);
        return res.status(500).json({success:false, message:error.message})
    }
}