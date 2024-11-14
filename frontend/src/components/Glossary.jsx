import React from 'react';
import '../../src/index.css';

const Glossary = () => {
  return (
    <div className="glossary-container">
      <h2>Glossary of Terms</h2>

      <div className="glossary-entry">
        <h3>ISBN (International Standard Book Number)</h3>
        <p>
          A unique identifier for books, typically consisting of 13 digits, used to identify and catalog books in a global system.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Author</h3>
        <p>
          The individual(s) responsible for writing the content of the book. Authors can be individuals or groups of people.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Paperback</h3>
        <p>
          A type of book binding where the cover is made of flexible paper or cardboard, usually making the book less expensive than hardcover editions.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Hardcover</h3>
        <p>
          A book bound with a rigid cover, typically made of thick cardboard and wrapped in cloth or paper. Hardcovers are generally more durable and expensive.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Edition</h3>
        <p>
          Refers to a particular version or release of a book, which may include revisions, updated information, or new introductions.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Genre</h3>
        <p>
          A category or style of literature characterized by a particular content, form, or technique. Examples include fiction, non-fiction, romance, fantasy, and more.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Publisher</h3>
        <p>
          A company or individual responsible for producing and distributing books to the market. They handle the printing, editing, and promotion of books.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Review</h3>
        <p>
          A critical evaluation of a book, usually written by a reader, critic, or literary expert, highlighting strengths and weaknesses.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Book Series</h3>
        <p>
          A collection of books that follow a common narrative or theme, often featuring the same characters or setting across multiple books.
        </p>
      </div>

      <div className="glossary-entry">
        <h3>Fiction</h3>
        <p>
          A literary genre that involves stories created from the imagination, rather than based on real events.
        </p>
      </div>
    </div>
  );
};

export default Glossary;
