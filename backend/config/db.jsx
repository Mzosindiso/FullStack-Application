import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mzura680:ba15Ki8ziFhOC25D@cluster0.bjht1.mongodb.net/Cape Reads')
    .then(() => console.log('MongoDB Connected...')); };

    export default connectDB;

// Create a new book
const newBook = new Book({
  title: 'The Great Cape Adventure',
  author: 'Jane Doe',
  description: 'An exciting journey through the Cape...',
  isbn: '9781234567890',
  price: 19.99,
  coverImage: 'https://example.com/book-cover.jpg',
  category: 'Adventure',
  stock: 100,
  language: 'English'
});

// Save the book to the database
await newBook.save();