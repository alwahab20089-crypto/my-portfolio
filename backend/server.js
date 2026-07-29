import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ========================
// MIDDLEWARE
// ========================
app.use(cors());
app.use(express.json());

// ========================
// TEST ROUTE (optional but useful)
// ========================
app.get("/contact", (req, res) => {
  res.send("Backend is running ✔");
});

// ========================
// CONTACT ROUTE
// ========================
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ========================
    // TRANSPORTER (GMAIL SMTP)
    // ========================
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ========================
    // SEND EMAIL
    // ========================
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return res.json({
      success: true,
      message: "Message sent successfully ✅",
    });

  } catch (err) {
    // IMPORTANT: real error logging
    console.log("🔥 EMAIL ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to send message ❌",
      error: err.message,
    });
  }
});

// ========================
// START SERVER
// ========================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✔`);
});
