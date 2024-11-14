import React from 'react';
import '../../src/index.css';

const ReturnsAndShipping = () => {
  return (
    <div className="returns-shipping-container">
      <h2>Returns & Shipping Policy</h2>

      <h3>Shipping Policy</h3>
      <p>
        We offer fast and reliable shipping for all orders placed through Cape Reads. Below are the details regarding our shipping policy.
      </p>

      <div className="shipping-details">
        <h4>1. Shipping Rates</h4>
        <p>
          Shipping rates are calculated based on the weight of the items in your order and the delivery location. You will see the exact shipping cost at checkout before you complete your purchase.
        </p>

        <h4>2. Delivery Time</h4>
        <p>
          - Standard Shipping: 5-7 business days  
          - Express Shipping: 2-3 business days  
          - International Shipping: Varies by destination (typically 7-14 business days)
        </p>

        <h4>3. Order Processing</h4>
        <p>
          Orders are processed Monday through Friday, excluding public holidays. All orders placed before 3:00 PM will be processed on the same business day, while orders placed after 3:00 PM will be processed the next business day.
        </p>

        <h4>4. Shipping Locations</h4>
        <p>
          We currently ship to South Africa and international locations. For international shipping, please check the applicable shipping fees and estimated delivery time during checkout.
        </p>
      </div>

      <h3>Returns & Refunds</h3>
      <p>
        Cape Reads strives to provide the best customer service. If you're not completely satisfied with your order, please review our returns and refunds policy below.
      </p>

      <div className="returns-details">
        <h4>1. Return Eligibility</h4>
        <p>
          - Items must be returned within 30 days of delivery.
          - Items must be in new, unused condition, with the original packaging and tags intact.
          - Books that have been marked as "Final Sale" or "Non-Returnable" cannot be returned.
        </p>

        <h4>2. How to Return Items</h4>
        <p>
          To return an item, please follow these steps:
          1. Email us at <strong>support@capereads.com</strong> to initiate the return.
          2. Include your order number and the reason for the return.
          3. We'll provide you with a return authorization and the instructions for sending the item back.
        </p>

        <h4>3. Refund Processing</h4>
        <p>
          Once we receive your returned item, we'll process your refund within 7-10 business days. Refunds will be credited back to your original method of payment. Please note that shipping fees are non-refundable.
        </p>

        <h4>4. Damaged or Defective Items</h4>
        <p>
          If you receive a damaged or defective item, please contact us within 7 days of receiving your order. We will assist you in processing a return and either refund or replace the item at no extra cost.
        </p>
      </div>

      <h3>Contact Us</h3>
      <p>
        If you have any further questions regarding our Returns and Shipping policies, please feel free to contact us at <strong>support@capereads.com</strong> or call us at <strong>(123) 456-7890</strong>.
      </p>
    </div>
  );
};

export default ReturnsAndShipping;
