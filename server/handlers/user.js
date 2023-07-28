import prisma from "../db.js";
import { comparePassword, createJWT, hashPassword } from "../modules/auth.js";

export const createNewUser = async (req, res, next) => {
try{
   const {displayName, email, password, firstName, lastName} = req.body;
  const hashedPassword = await hashPassword(password)
    // console.log(prisma.user)
    const user = await prisma.user.create({
      data:{
        displayName,
        email,
        hashedPassword,
        firstName,
        lastName,
      }
  })
  const token = createJWT(user);
    res.status(201).json({user, token})
  }catch(error){
    res.status(401).json({message: error.message})
    next(error)
  }
    
  
}

export const signInUser = async (req, res) => {

try{
  const user = await prisma.user.findUnique({
  where:{
    email: req.body.email
  }
})

  const isValid = await comparePassword(req.body.password, user.hashedPassword)
  console.log(isValid)
  if(!isValid){
    res.status(401).json({message: "Invalid Credentials"})
    return
  }
  else{
    const token = createJWT(user)
    res.satus(200).json({ token })
  }}
  catch(error){
    res.status(500).json({message: "Something went wrong"})
  }

}
