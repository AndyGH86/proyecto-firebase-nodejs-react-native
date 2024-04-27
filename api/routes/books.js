const express = require('express');
const admin = require("../firebase");
const Book = require("../models/book");
const router = express.Router();
const BOOKS_COLLECTION = 'books';

router.get('/', async function(req, res, next) {
  try {
    const bookCollection = await admin
      .firestore()
      .collection(BOOKS_COLLECTION)
      .get();
    let bookList = [];
    bookCollection.forEach((document) => {
      const { id } = document;
      const { title, author, genre} = document.data();
      bookList = [...bookList, { id, title, author, genre, }];
    });
    res.status(200).json({ books: bookList });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:book_id', async function(req, res, next) {
  const { book_id } = req.params
  if (!book_id) { return res.status(400).json({ error: 'Book ID is required' }); }
  const bookRef = await admin
    .firestore()
    .collection(BOOKS_COLLECTION)
    .doc(book_id)
    .get();
  if (!bookRef.exists) { return res.status(404).json({ error: 'Book not found' }); }
  const book = new Book(bookRef.data());
  return res.status(200).json({ ...book.getData(), id: bookRef.id });
});

router.post('/', async function(req, res, next) {
  try {
    const book = new Book(req.body)
    if (!book.isValid()) { return res.status(400).json({ error: 'Title, author, and genre are required fields' }); }
    const bookRef = await admin
      .firestore()
      .collection(BOOKS_COLLECTION)
      .add(book.getData());
    res.status(201).json({ ...book.getData() , id: bookRef.id });
  } catch (error) {
    console.error('Error registering book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:book_id', async function(req, res, next) {
  try {
    const {book_id} = req.params;
    if (!book_id) {
      return res.status(400).json({error: 'Book ID is required'});
    }
    const book = new Book(req.body);
    if (!book.isValid()) {
      return res.status(400).json({error: 'Title, author, and genre are required fields'});
    }
    const bookRef = admin
      .firestore()
      .collection(BOOKS_COLLECTION)
      .doc(book_id);
    const bookDoc = await bookRef.get();
    if (!bookDoc.exists) {
      return res.status(404).json({error: `Book with id ${book_id} not found`});
    }
    await bookRef.update(book.getData());
    return res.status(200).json({...book.getData(), id: bookRef.id});
  } catch (error) {
    console.error('Error updating book:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:book_id', async function(req, res, next) {
  try {
    const {book_id} = req.params
    if (!book_id) {
      return res.status(400).json({error: 'Book ID is required'});
    }
    const bookRef = admin
      .firestore()
      .collection(BOOKS_COLLECTION)
      .doc(book_id);
    const bookDoc = await bookRef.get();
    if (!bookDoc.exists) {
      return res.status(404).json({error: `Book with id ${book_id} not found`});
    }
    await bookRef.delete();
    return res.status(200).json({});
  } catch (error) {
    console.error('Error deleting book:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
