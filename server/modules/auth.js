import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const hashPassword = (password) => bcrypt.hash(password, 10);
export const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

export const createJWT = (user) => {
  console.log(process.env.JWT_SECRET)
  const token = jwt.sign({id:user.id,email:user.email}, process.env.JWT_SECRET,{expiresIn: '1h'})

  return token
}