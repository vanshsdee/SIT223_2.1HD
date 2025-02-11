// import { useState } from 'react';

// const NewsletterForm = () => {
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus('');

//     try {
//       const response = await fetch('http://localhost:3001/api/subscribe', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus('success');
//         setEmail('');
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       setStatus('error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h1>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
        
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
//         >
//           {loading ? 'Subscribing...' : 'Subscribe'}
//         </button>
//       </form>

//       {status === 'success' && (
//         <p className="mt-4 text-green-600 text-center">Successfully subscribed!</p>
//       )}
//       {status === 'error' && (
//         <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
//       )}
//     </div>
//   );
// };

// export default NewsletterForm;


import React, { useState } from 'react';
import { Menu, Input, Button, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Style.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while subscribing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Menu className="header-menu" secondary>
      <Menu.Menu position='left'>
        <Menu.Item header>DEV@Deakin</Menu.Item>
      </Menu.Menu>
      <Menu.Menu position='right' className="subscription-menu">
        <Form onSubmit={handleSubscribe} className="subscription-form">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginRight: '10px', width: '300px' }}
            disabled={loading}
          />
          <Button 
            primary 
            type="submit"
            loading={loading}
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe to our Newsletter'}
          </Button>
        </Form>
        {successMessage && <p className="message success">{successMessage}</p>}
        {errorMessage && <p className="message error">{errorMessage}</p>}
      </Menu.Menu>
    </Menu>
  );
};

export default NewsletterForm;