import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faShoppingCart, faStar, faChartLine, faUser, faEdit, faHistory, faTruck, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
        setAddress(response.data.address || '');
        setPhoneNumber(response.data.phoneNumber || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchOrderHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrderHistory(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchUserData();
    fetchOrderHistory();
    fetchProducts();
  }, []);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        'http://localhost:5000/api/users/update',
        { name: user.name, email: user.email }, // Only send name and email for now
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setUser(response.data.user);
        setIsEditing(false);
        alert('User information updated successfully!');
      } else {
        alert('Failed to update user information. Please try again.');
      }
    } catch (error) {
      console.error('Error updating user info:', error);
      alert('An error occurred while updating user information. Please try again.');
    }
  };
  
  const handleCancelEdit = () => {
    setAddress(user?.address || '');
    setPhoneNumber(user?.phoneNumber || '');
    setIsEditing(false);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSignOut = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Welcome to Your Dashboard, {user?.name}</DashboardTitle>
        <SignOutButton onClick={handleSignOut}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
        </SignOutButton>
      </DashboardHeader>     
      <DashboardGrid>
        <UserInfoCard>
    <h2><FontAwesomeIcon icon={faUser} /> Your Information</h2>
    {isEditing ? (
      <form onSubmit={handleEditSubmit}>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <label>
          Address:
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </label>
        <label>
          Phone Number:
          <input 
            type="tel" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelEdit}>Cancel</button>
      </form>
    ) : (
      <>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Address: {user?.address || 'Not provided'}</p>
        <p>Phone: {user?.phoneNumber || 'Not provided'}</p>
        <button onClick={() => setIsEditing(true)}><FontAwesomeIcon icon={faEdit} /> Edit</button>
      </>
    )}
        </UserInfoCard>

        <DashboardCard>
          <h2><FontAwesomeIcon icon={faHistory} /> Order History</h2>
          {orderHistory.length > 0 ? (
            <OrderList>
              {orderHistory.map(order => (
                <li key={order._id}>
                  Order #{order._id} - {order.status} - ${order.total}
                </li>
              ))}
            </OrderList>
          ) : (
            <p>No order history available.</p>
          )}
        </DashboardCard>

        <DashboardCard>
          <h2><FontAwesomeIcon icon={faTruck} /> Track Orders</h2>
          <p>Order tracking feature coming soon!</p>
        </DashboardCard>

        <DashboardCard>
          <h2><FontAwesomeIcon icon={faSearch} /> Search Products</h2>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ProductList>
            {filteredProducts.map(product => (
              <li key={product._id}>{product.name} - ${product.price}</li>
            ))}
          </ProductList>
        </DashboardCard>
      </DashboardGrid>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const DashboardTitle = styled.h1`
  color: #333;
  margin: 0;
`;

const SignOutButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }

  svg {
    margin-right: 5px;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const DashboardCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #333;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const UserInfoCard = styled(DashboardCard)`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const OrderList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    background-color: #f8f9fa;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    background-color: #f8f9fa;
    margin-bottom: 5px;
    padding: 8px;
    border-radius: 4px;
  }
`;