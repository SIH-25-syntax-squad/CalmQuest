import mongoose, { Schema } from 'mongoose';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    
})



UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  })
  
  UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
  
  UserSchema.methods.generateAccessToken = async function() {
    return jwt.sign({
      _id: this._id,
      email:this.email,
      
    }, 
    process.env.ACCESS_SECRET_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      
    })
  }


export const User =  mongoose.model('User', UserSchema);