import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../components/Navbar';

const ContactPage = styled('div')({
  background: '#1e272e',
  color: '#ffffff',
  padding: '2rem',
  minHeight: '100vh',
});

const WhiteTextField = styled(TextField)({
  background: '#ffffff',
  color: '#1e272e',
});

function ContactMe() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPopupOpen(true);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <Navbar />
      <ContactPage>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" paragraph>
            This website has been developed by Parth Desai. I am a developer and currently studying in the Second Year of I.T. Engineering. I started developing interest in coding a couple of years ago and I have never looked back since then. I have completed the CS50x offered by edX and Harvard and am currently working on another project to make work easier on the computer by configuring an AI-based assistant. Contact me if there are any queries.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1">
            Email Address: parth.desai@somaiya.edu
          </Typography>
          <Typography variant="body1">
            Phone Number: 98675 49332
          </Typography>

          <Typography variant="h6" gutterBottom style={{ marginTop: '2rem' }}>
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <WhiteTextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
            <WhiteTextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <WhiteTextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              required
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
              Submit
            </Button>
          </form>
        </Container>
      </ContactPage>

      <Dialog open={isPopupOpen} onClose={handleClosePopup}>
        <DialogTitle>Contact Submission</DialogTitle>
        <DialogContent>
          <Typography>
            Thank you for contacting me! I will get back to you soon.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ContactMe;
