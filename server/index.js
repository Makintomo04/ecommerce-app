import { PrismaClient } from '@prisma/client'
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
const prisma = new PrismaClient()

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get("/user", async (req, res) => {
  const allUsers = await prisma.user.findMany({})
  res.status(200).json(allUsers)
});
app.post("/user", async (req, res) => {
  const {displayName, email, firstName, lastName} = req.body
  const user = await prisma.user.create({
    data:{
      displayName: displayName,
      email: email,
      firstName: firstName,
      lastName: lastName,
    }
})

res.status(201).json(user)

});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// export async function main() {
 
//   const createUser = await prisma.user.create({
//     data:{
//       displayName: 'JohnnyDoe',
//       email: "JohnDoe@gmail.com",
//       firstName: "John",
//       lastName: "Smith",
//     }
// })
// console.log(createUser)
// const allUsers = await prisma.user.findMany({})
// console.dir(allUsers, { depth: null })
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })