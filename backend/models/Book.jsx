import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  coverImage: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  language: {
    type: String,
    required: true
  },
  isLimitedEdition: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

export default Book;