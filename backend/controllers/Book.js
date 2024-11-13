import Book from '../models/Book.jsx';

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ ratingsCount: -1 }).limit(10);
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books' });
  }
};
