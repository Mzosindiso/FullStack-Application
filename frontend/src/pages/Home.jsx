import React, { useState, useEffect } from 'react';
import assets from '../assets';
import '../index.css';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 5;

    const books = [
        {
            image: assets.crackingInterview,
            title: "Cracking the Coding Interview: 189 Programming Questions and Solutions (Cracking the Interview & Career) 6th Edition",
            author: "Gayle Laakmann McDowell",
            price: "R249.99"
        },
        {
            image: assets.playNice,
            title: "Play Nice: The Rise, Fall, and Future Of Blizzard Entertainment",
            author: "Jason Schreier",
            price: "R199.99"
        },
        {
            image: assets.systemsDesign,
            title: "System Design Interview – An Insider's Guide: Volume 2",
            author: "Alex Xu, Sahn Lam",
            price: "R179.99"
        },
        {
            image: assets.python,
            title: "Python Crash Course, 3rd Edition: A Hands-On, Project-Based Introduction to Programming 3rd Edition",
            author: "Eric Matthes",
            price: "R179.99"
        },
        {
            image: assets.crackingInterview,
            title: "Cracking the Coding Interview: 189 Programming Questions and Solutions (Cracking the Interview & Career) 6th Edition",
            author: "Gayle Laakmann McDowell",
            price: "R249.99"
        },
        {
            image: assets.playNice,
            title: "Play Nice: The Rise, Fall, and Future Of Blizzard Entertainment",
            author: "Jason Schreier",
            price: "R199.99"
        },
        {
            image: assets.systemsDesign,
            title: "System Design Interview – An Insider's Guide: Volume 2",
            author: "Alex Xu, Sahn Lam",
            price: "R179.99"
        },
        {
            image: assets.python,
            title: "Python Crash Course, 3rd Edition: A Hands-On, Project-Based Introduction to Programming 3rd Edition",
            author: "Eric Matthes",
            price: "R179.99"
        }
        // ... Add more books as needed
    ];

    const totalPages = Math.ceil(books.length / booksPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const showImage = (index) => {
        setCurrentIndex(index);
    };

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
                <h2>New Books | Trending Books</h2>
                <div className="book-grid">
                    {books.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage).map((book, index) => (
                        <div className="book-card" key={index}>
                            <img src={book.image} alt={`Book Cover ${index + 1}`} />
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <p className="price">{book.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                            <button className="add-to-wishlist">Add to Wishlist</button>
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