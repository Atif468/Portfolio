const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "withatifansari@gmail.com",
    pass: "unknownpass",
  },
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: email,
      to: "withatifansari@gmail.com",
      subject: `Message from ${name} Portfolio`,
      text: message,
    });
    res.status(200).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Error sending message');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
