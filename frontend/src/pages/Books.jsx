import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/context/CartContext';
import '../index.css';
import assets from '../assets';

const Books = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 15;
    const [books, setBooks] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [filterOption, setFilterOption] = useState('');
    const { addToCart } = useCart();

    const sortBooks = (books, option) => {
        switch(option) {
            case 'name':
                return [...books].sort((a, b) => a.title.localeCompare(b.title));
            case 'price-low':
                return [...books].sort((a, b) => a.price - b.price);
            case 'price-high':
                return [...books].sort((a, b) => b.price - a.price);
            default:
                return books;
        }
    };

    const filterBooks = (books, option) => {
        switch(option) {
            case 'under-200':
                return books.filter(book => book.price < 200);
            case '200-300':
                return books.filter(book => book.price >= 200 && book.price <= 300);
            case 'over-300':
                return books.filter(book => book.price > 300);
            default:
                return books;
        }
    };

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
        
        let processedBooks = [...fetchedBooks];
        if (filterOption) {
            processedBooks = filterBooks(processedBooks, filterOption);
        }
        if (sortOption) {
            processedBooks = sortBooks(processedBooks, sortOption);
        }
        setBooks(processedBooks);
    }, [sortOption, filterOption]);

    // Calculate pagination
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const visibleBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="page-header">
                <div className="breadcrumb">
                    <Link to="/">Home</Link> &gt; <span>Books</span>
                </div>
                <div className="sort-filter">
                    <select 
                        id="sortFilter" 
                        value={sortOption} 
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">Sort</option>
                        <option value="name">Sort by Name</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                    <select 
                        id="priceFilter" 
                        value={filterOption} 
                        onChange={(e) => setFilterOption(e.target.value)}
                    >
                        <option value="">Filter by Price</option>
                        <option value="under-200">Under R200</option>
                        <option value="200-300">R200 - R300</option>
                        <option value="over-300">Over R300</option>
                    </select>
                </div>
            </div>
            <section className="trending-books">
                <h2>Books</h2>
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
                    <button 
                        className="page-control" 
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span id="pageInfo">
                        Page {currentPage} of {Math.ceil(books.length / booksPerPage)}
                    </span>
                    <button 
                        className="page-control" 
                        onClick={() => paginate(currentPage < Math.ceil(books.length / booksPerPage) ? currentPage + 1 : currentPage)}
                        disabled={currentPage === Math.ceil(books.length / booksPerPage)}
                    >
                        Next
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Books;