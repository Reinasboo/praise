// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  try {
    // Option 1: Send to your email using a service like Resend, SendGrid, or Nodemailer
    // For now, we'll just log it and return success
    // You can integrate email services later

    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // Example: Using Resend (recommended for Vercel)
    // Uncomment and add your Resend API key to .env.local
    /*
    import { Resend } from 'resend';

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'spectrolite.praise@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (result.error) {
      return res.status(500).json({ message: 'Failed to send email', error: result.error })
    }
    */

    return res.status(200).json({ 
      message: 'Message received successfully. We will get back to you soon!' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      message: 'An error occurred while processing your request',
      error: error.message 
    })
  }
}
