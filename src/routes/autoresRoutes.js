import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.getAuthors)
  .get("/autores/:id", AutorController.getAuthorById)
  .post("/autores", AutorController.createAuthor)
  .put("/autores/:id", AutorController.updateAuthor)
  .delete("/autores/:id", AutorController.removeAuthor);

export default router;
