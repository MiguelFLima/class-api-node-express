import livros from "../models/Livro.js";

class LivroController {
  static getBooks = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static getBookById = (req, res) => {
    const { id } = req.params;

    livros.findById(id, (err, livros) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - id not identified` });
      } else {
        res.status(200).send(livros);
      }
    });
  };

  static createBook = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - failed creating book` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static removeBook = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(400).send("id not identified");
      } else {
        res.status(200).send("Book removed");
      }
    });
  };
}

export default LivroController;
