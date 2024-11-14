import React from 'react';
import '../index.css'; // Assuming you have the relevant styles

const Accessibility = () => {
  return (
    <div className="accessibility-container">
      <h2>Accessibility at Cape Reads</h2>

      <p>
        At Cape Reads, we are committed to providing an inclusive shopping experience for all of our customers, regardless of their abilities. We strive to ensure that our website and digital content are accessible to everyone, including individuals with disabilities.
      </p>

      <h3>Our Accessibility Features</h3>

      <ul>
        <li>
          <strong>Keyboard Navigation:</strong> All of our website’s functionality can be accessed using only a keyboard, making it easier for users who cannot use a mouse or touchpad to browse and shop.
        </li>
        <li>
          <strong>Screen Reader Support:</strong> We ensure all images are properly described with <code>alt</code> text, and our website is built with proper semantic HTML and ARIA roles to work well with screen readers.
        </li>
        <li>
          <strong>Color Contrast:</strong> We ensure high contrast between text and background colors to help users with visual impairments. Our design follows WCAG standards to ensure the text is easily readable.
        </li>
        <li>
          <strong>Customizable Font Size:</strong> You can adjust the size of the text on our website for better readability without losing functionality.
        </li>
        <li>
          <strong>Accessible Forms:</strong> Our checkout and user registration forms are designed to be accessible, with clearly labeled fields and easy-to-follow error messages for screen reader users.
        </li>
        <li>
          <strong>Accessible Media:</strong> We provide captions and transcripts for all video and audio content for users who are deaf or hard of hearing.
        </li>
      </ul>

      <h3>How We Are Improving</h3>
      <p>
        We continually monitor and test our website to identify potential areas for improvement. We welcome feedback from our customers and work hard to resolve any issues that may arise, ensuring that everyone can enjoy the benefits of Cape Reads, regardless of their needs or abilities.
      </p>

      <h3>Get in Touch</h3>
      <p>
        If you have any feedback or suggestions on how we can improve the accessibility of our website, please contact our support team at <a href="mailto:support@capereads.com">support@capereads.com</a>.
      </p>
    </div>
  );
};

export default Accessibility;
