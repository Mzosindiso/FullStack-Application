import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faShoppingCart, faStar, faChartLine, faUser, faEdit, faHistory } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Fetch user data and purchase history
    // This is a mock implementation. In a real app, you'd make API calls here.
    setUser({
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main St, Cape Town, South Africa"
    });
    setPurchaseHistory([
      { id: 1, date: "2023-05-01", book: "Cracking the Coding Interview", price: 39.99 },
      { id: 2, date: "2023-04-15", book: "Long Walk to Freedom", price: 29.99 },
      { id: 3, date: "2023-03-22", book: "Born a Crime", price: 24.99 },
    ]);
  }, []);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Update user info logic here
    setIsEditing(false);
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard, {user?.name}</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card user-info">
          <h2><FontAwesomeIcon icon={faUser} /> Your Information</h2>
          {isEditing ? (
            <form onSubmit={handleEditSubmit}>
              <input type="text" defaultValue={user?.name} required />
              <input type="email" defaultValue={user?.email} required />
              <input type="text" defaultValue={user?.address} required />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          ) : (
            <>
              <p>Name: {user?.name}</p>
              <p>Email: {user?.email}</p>
              <p>Address: {user?.address}</p>
              <button onClick={() => setIsEditing(true)}><FontAwesomeIcon icon={faEdit} /> Edit</button>
            </>
          )}
        </div>

        <div className="dashboard-card recent-purchases">
          <h2><FontAwesomeIcon icon={faShoppingCart} /> Recent Purchases</h2>
          <ul>
            <li>Cracking the Coding Interview</li>
            <li>System Design Interview – An Insider's Guide: Volume 2</li>
            <li>The Wretched of the Earth</li>
          </ul>
        </div>

        <div className="dashboard-card reading-progress">
          <h2><FontAwesomeIcon icon={faBook} /> Reading Progress</h2>
          <ul>
            <li>Born a Crime - 75%</li>
            <li>Long Walk to Freedom - 30%</li>
            <li>Cry, the Beloved Country - 50%</li>
          </ul>
        </div>

        <div className="dashboard-card recommended-books">
          <h2><FontAwesomeIcon icon={faStar} /> Recommended for You</h2>
          <ul>
            <li>Disgrace by J.M. Coetzee</li>
            <li>The Power of One by Bryce Courtenay</li>
            <li>Burger's Daughter by Nadine Gordimer</li>
          </ul>
        </div>

        <div className="dashboard-card reading-stats">
          <h2><FontAwesomeIcon icon={faChartLine} /> Reading Stats</h2>
          <p>Books read this month: 3</p>
          <p>Pages read this week: 450</p>
          <p>Average reading time: 2 hours/day</p>
        </div>

        <div className="dashboard-card purchase-history">
          <h2><FontAwesomeIcon icon={faHistory} /> Purchase History</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Book</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map(purchase => (
                <tr key={purchase.id}>
                  <td>{purchase.date}</td>
                  <td>{purchase.book}</td>
                  <td>${purchase.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;