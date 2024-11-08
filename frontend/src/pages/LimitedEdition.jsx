import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/context/CartContext';
import '../index.css';
import assets from '../assets';

const LimitedEdition = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 15;
    const [books, setBooks] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        // Fetch books data or import it
        const fetchedBooks = [
            {
                id: 1,
                image: assets.crackingInterview,
                title: "Cracking the Coding Interview: 189 Programming Questions and Solutions (Cracking the Interview & Career) 6th Edition",
                author: "Gayle Laakmann McDowell",
                price: 249.99
            },
            {
                id: 2,
                image: assets.playNice,
                title: "Play Nice: The Art of Respect and Empathy",
                author: "Nancy Thompson",
                price: 199.99
            },
            {
                id: 3,
                image: assets.systemsDesign,
                title: "System Design Interview – An Insider's Guide: Volume 2",
                author: "Alex Xu, Sahn Lam",
                price: 179.99
            },
            {
                id: 4,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 5,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 6,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 7,
                image: assets.crackingInterview,
                title: "Cracking the Coding Interview: 189 Programming Questions and Solutions (Cracking the Interview & Career) 6th Edition",
                author: "Gayle Laakmann McDowell",
                price: 249.99
            },
            {
                id: 8,
                image: assets.playNice,
                title: "Play Nice: The Art of Respect and Empathy",
                author: "Nancy Thompson",
                price: 199.99
            },
            {
                id: 9,
                image: assets.systemsDesign,
                title: "System Design Interview – An Insider's Guide: Volume 2",
                author: "Alex Xu, Sahn Lam",
                price: 179.99
            },
            {
                id: 10,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 11,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 12,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 13,
                image: assets.crackingInterview,
                title: "Cracking the Coding Interview: 189 Programming Questions and Solutions (Cracking the Interview & Career) 6th Edition",
                author: "Gayle Laakmann McDowell",
                price: 249.99
            },
            {
                id: 14,
                image: assets.playNice,
                title: "Play Nice: The Art of Respect and Empathy",
                author: "Nancy Thompson",
                price: 199.99
            },
            {
                id: 15,
                image: assets.systemsDesign,
                title: "System Design Interview – An Insider's Guide: Volume 2",
                author: "Alex Xu, Sahn Lam",
                price: 179.99
            },
            {
                id: 16,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 17,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            },
            {
                id: 18,
                image: assets.book_3998252_1280,
                title: "Smart and Sustainable: The Future of Business and Society",
                author: "Emily Noble",
                price: 219.99
            }
        ];
        setBooks(fetchedBooks);
    }, []);

    // Calculate pagination
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const visibleBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="page-header">
                <div className="breadcrumb">
                    <Link to="/">Home</Link> &gt; <span>Limited Editions</span>
                </div>
                <div className="sort-filter">
                    <select id="sortFilter">
                        <option value="">Sort & Filter</option>
                        <option value="name">Sort by Name</option>
                        <option value="price">Sort by Price</option>
                        <option value="new">Sort by New Release</option>
                        <option value="old">Sort by Oldest</option>
                    </select>
                </div>
            </div>
            <section className="trending-books">
                <h2>Limited editions</h2>
                <div className="book-grid">
                    {visibleBooks.map(book => (
                        <div className="book-card" key={book.id}>
                            <img src={book.image} alt={`Cover of ${book.title}`} />
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <p className="price">R{book.price.toFixed(2)}</p>
                            <button className="add-to-cart" onClick={() => addToCart(book)}>Add to Cart</button>
                            <button className="add-to-wishlist">Add to Wishlist</button>
                        </div>
                    ))}
                </div>

                {/* Pagination controls */}
                <div className="pagination">
                    {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, i) => (
                        <button key={i} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LimitedEdition;