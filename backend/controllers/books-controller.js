const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find()

    } catch (err) {
        console.log(err)
    }

    if (!books) {
        return res.status(404).json({ message: "No books found" })
    }
    return res.status(200).json({ books: books })
}


const getById = async (req, res, next) => {
    const id = req.params.id;

    let book;
    try {
        book = await Book.findById(id)
    } catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(404).json({ message: "No books found" })
    }
    return res.status(200).json({ book: book })
}

const addBook = async (req, res, next) => {
    // let { names, author, description, price, available } = req.body;
    let book;

    try {
        book = new Book({
            names: req.body.names,
            author: req.body.author,
            description: req.body.description,
            price: req.body.price,
            available: req.body.available,
            images: req.body.images
            // names,
            // author,
            // description,
            // price,
            // available

        })
        await book.save()
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(500).json({ message: "Unable to add the book" })
    }

    return res.status(201).json({ book })
}

const updateBook = async (req, res, next) => {

    const id = req.params.id;
    const { names, author, description, price, available, images } = req.body;

    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {

            names,
            author,
            description,
            price,
            available,
            images

        })

        book = await book.save()

    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to update this ID" })
    }

    return res.status(200).json({ message: "Product successfully deleted" })
}


const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    }
    catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to dalete this ID" })
    }

    return res.status(200).json({ book })
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;