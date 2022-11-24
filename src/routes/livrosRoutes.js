import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.getBooks)
  .get("/livros/busca", LivroController.getBookByEditor)
  .get("/livros/:id", LivroController.getBookById)
  .post("/livros", LivroController.createBook)
  .put("/livros/:id", LivroController.updateBook)
  .delete("/livros/:id", LivroController.removeBook);

export default router;
