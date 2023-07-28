import * as dotenv from "dotenv"
dotenv.config();
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import prisma from "./db.js";
import morgan from "morgan";
import { createNewUser, signInUser } from "./handlers/user.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(morgan("dev"));

app.get("/user", async (req, res) => {
  const allUsers = await prisma.user.findMany({})
  res.status(200).json(allUsers)
});
app.post("/user", createNewUser);
app.post("/signin", signInUser);

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