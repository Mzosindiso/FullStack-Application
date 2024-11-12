import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <div className="search-results">
            <h2>Search Results</h2>
            {results.length === 0 ? (
                <p>No books found matching your search.</p>
            ) : (
                <ul>
                    {results.map((book) => (
                        <li key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <img src={book.coverImage} alt={book.title} />
                                <div>
                                    <h3>{book.title}</h3>
                                    <p>by {book.author}</p>
                                    <p>R{book.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResults;