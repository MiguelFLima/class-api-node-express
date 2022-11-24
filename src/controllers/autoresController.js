import autores from "../models/Autor.js";

class AutorController {
  static getAuthors = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static getAuthorById = (req, res) => {
    const { id } = req.params;

    autores.findById(id, (err, autores) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - id not identified` });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static createAuthor = (req, res) => {
    let autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - failed creating author` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "author updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static removeAuthor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(400).send("id not identified");
      } else {
        res.status(200).send("author removed");
      }
    });
  };
}

export default AutorController;
