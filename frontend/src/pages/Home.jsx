import React, { useState, useEffect } from 'react';
import { book_list } from '../assets/assets';
import assets from '../assets'; // Import book_list directly
import '../index.css';
import { useCart } from '../components/context/CartContext';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 5;
    const { addToCart } = useCart();

    // Fetch books from book_list and sort by ratings count
    const allBooks = book_list
        .map((book) => ({
            id: book.bookID,
            title: book.title,
            author: book.authors,
            image: book.image,
            price: book.price || "Not available",
            ratingsCount: book.ratings_count || 0
        }))
        .sort((a, b) => b.ratingsCount - a.ratingsCount);

    // Get the top 10 books
    const books = allBooks.slice(0, 10);

    const totalPages = Math.ceil(books.length / booksPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const showPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="carousel">
                <div className="carousel-inner">
                    <img src={assets.header_img} alt="Book 1" className={currentIndex === 0 ? 'active' : ''} />
                    <img src={assets.book_1868068_1280} alt="Book 2" className={currentIndex === 1 ? 'active' : ''} />
                    <img src={assets.book_3998252_1280} alt="Book 3" className={currentIndex === 2 ? 'active' : ''} />
                </div>
                <button className="carousel-control prev" onClick={prevImage}>&lt;</button>
                <button className="carousel-control next" onClick={nextImage}>&gt;</button>
            </div>

            <section className="trending-books">
                <h2>Top Rated Books</h2>
                <div className="book-grid">
                    {books.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage).map((book) => (
                        <div className="book-card" key={book.id}>
                            <img src={book.image} alt={`Book Cover ${book.title}`} />
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <p className="price">R{book.price}</p>
                            <p className="ratings">Ratings: {book.ratingsCount}</p>
                            <button className="add-to-cart" onClick={() => addToCart(book)}>Add to Cart</button>
                            {/* <button className="add-to-wishlist">Add to Wishlist</button> */}
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button className="page-control" onClick={() => showPage(Math.max(1, currentPage - 1))}>Prev</button>
                    <span id="pageInfo">Page {currentPage} of {totalPages}</span>
                    <button className="page-control" onClick={() => showPage(Math.min(totalPages, currentPage + 1))}>Next</button>
                </div>
            </section>
        </>
    );
};

export default Home;
