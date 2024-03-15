import express from "express";
import { PORT } from "./config.mjs";
import mongoose from "mongoose";
import bookStoreRoute from "./routes/bookStore.mjs"
import cors from 'cors'//npm i cors


mongoose
  .connect("mongodb://localhost:27017/Book-store-MERN")
  .then(() => {
    console.log("connected to dataBS");
    // solo si la conexion a mongoDB es correct, la app podra conectarse al puerto
    app.listen(PORT, () => {
      console.log(`PORT in ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
//cors es un sistema de reglas que los navegadores usan para permitir que una pagina web haga solicitudes 
// a diferentes servidores del que la pagina proviene. 
//cors se utiliza como un middleware 
//aqui abajo permite todos los origenes por defecto de cors
app.use(cors())
//aqui permite que el origen sea customizado
// app.use(
//     cors({
//     origin:'https://l4rnrz4l-3000.asse.devtunnels.ms',
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))
app.use("/books", bookStoreRoute)
// al establecer /books aqui no es necesario en bookStoreRoute que las rutas contenga la ruta
// /book es redundante route.get("/books/:id", async (request, response) => { 
// por lo tanto hay que modificarlo solo pon un / en lugar de /books

app.get("/", (request, response) => {
  response.status(200).send("Holi");
});


