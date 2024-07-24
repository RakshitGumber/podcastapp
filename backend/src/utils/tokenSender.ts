import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.Sender_Email,
    pass: process.env.App_password,
  },
});

interface SMTPError extends Error {
  responseCode?: number;
  code?: string;
}

const isSMTPError = (error: any): error is SMTPError => {
  return "responseCode" in error || "code" in error;
};

export const sendTokenEmail = (email: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(
      { email },
      process.env.JWT_SecretKey ?? "OurSecretKey",
      {
        expiresIn: "10m",
      }
    );

    const pageUrl = process.env.PAGEURL;

    const mailConfigurations = {
      from: process.env.Sender_Email,
      to: email,
      subject: "Verify your account",
      text: `Hi! There, You have recently visited our website and entered your email. Please follow the given link to verify your email: ${pageUrl}/verify/${token}\n\nThanks`,
    };

    transporter.sendMail(mailConfigurations, (error, info) => {
      if (error) {
        // Log the error
        console.error("Error sending email:", error);

        // Enhance error handling by checking for authentication errors
        if (
          isSMTPError(error) &&
          (error.responseCode === 535 || error.code === "EAUTH")
        ) {
          error.message =
            "Authentication failed. Please check your email service credentials.";
        }

        return reject(error);
      }
      resolve(token);
    });
  });
};
