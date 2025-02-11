require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 3001;

// SendGrid configuration
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Send welcome email
    const msg = {
      to: email,
      from: process.env.SENDER_EMAIL, // Your verified SendGrid sender email
      subject: 'Welcome to Development centre of Deakin!',
      //text: 'Thank you for subscribing to our newsletter. We\'re excited to have you on board!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #2c3e50; text-align: center;">Hello! Welcome to DEV@Deakin!</h1>
                <p style="color: #7f8c8d; font-size: 16px;">Thank you for subscribing to our newsletter! We're excited to have you join our community of coding enthusiasts.</p>
                <p style="color: #7f8c8d; font-size: 16px;">You'll now receive updates about:</p>
                <ul style="color: #7f8c8d; font-size: 16px;">
                    <li>Latest technological updates</li>
                    <li>Courses on AI and Machine Learning</li>
                    <li>Community events and workshops where you can meet tech entrepreneurs</li>
                    <li>Internship opportunities at top tech companies</li>
                </ul>
                <p style="color: #7f8c8d; font-size: 16px;">Stay tuned for our upcoming newsletters!</p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="https://www.youtube.com" style="background-color: #3498db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
                </div>
        </div>
        `    
    };

    await sgMail.send(msg);

    // Here you would typically also save the email to your database
    
    res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Subscription failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});