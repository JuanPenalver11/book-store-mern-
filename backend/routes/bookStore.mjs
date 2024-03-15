import { Router } from "express";
import { bookList } from "../models/bookModels.mjs";
import { bookValidator } from "../validators/bookValidator.mjs";
import { matchedData, validationResult, checkSchema } from "express-validator";

const route = Router()

route.get("/", async (request, response) => {
    try {
      const books = await bookList.find({});
      response.status(200).send({
        count: books.length,
        data: books,
      });
    } catch (err) {
      console.log(err);
      response.status(500).send({ message: err.message });
    }
  });
  
  route.get("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const bookId = await bookList.findById(id);
      if(!bookId){
        return response.status(404).send({ message: "Book not found" });
      } else{
        response.status(200).send(bookId);
      }
     
    } catch (err) {
      console.log(err);
      response.status(500).send({ message: err.message });
    }
  });
  
  route.post("/", checkSchema(bookValidator), async (request, response) => {
    try {
      const result = validationResult(request);
      if (!result.isEmpty()) {
        return response.status(400).send({ message: result.array() });
      }
      const data = matchedData(request);
      const newBook = await bookList.create(data);
      response.status(200).send(newBook);
    } catch (err) {
      console.log(err);
      response.status(500).send({ message: err.message });
    }
  });
  
  route.put("/:id", checkSchema(bookValidator), async (request, response) => {
    try {
      const result = validationResult(request);
      if (!result.isEmpty())
        return response.status(400).send({ message: result.array() });
      const data = matchedData(request);
      const { id } = request.params;
      const book = await bookList.findByIdAndUpdate(id, data);
      if (!book) {
        return response.status(404).send({ message: "Book not found" });
      } else {
        const bookUpdated = await bookList.findById(id);
        return response.status(200).send(bookUpdated);
      }
    } catch (err) {
      console.log(err);
      response.status(500).send({ message: err.message });
    }
  });
  
  route.delete("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const bookDeleted = await bookList.findByIdAndDelete(id);
      if (!bookDeleted)
        return response.status(404).json({ message: "Book not found" });
      response.status(200).json("Book deleted successfully");
    } catch (err) {
      console.log(err);
      response.status(500).send({ message: err.message });
    }
  });




export default route 