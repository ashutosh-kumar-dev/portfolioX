import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Send, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_geh0o3j",      // Replace with your actual service ID
        "template_d0r741m",     // Replace with your actual template ID
        form.current,
        "QqzclkcmLe6t4YDQQ"       // Replace with your actual public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Try again!");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-white px-6 py-12 flex flex-col items-center justify-center">
      <ToastContainer position="top-right" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-2 text-slate-800">Contact Me</h1>
        <p className="text-slate-600 max-w-md mx-auto">
          Have a question, idea or just want to say hi? Feel free to drop a message!
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          <Send size={20} /> Send Message
        </button>
      </motion.form>

      <motion.div
        className="mt-10 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href="mailto:youremail@example.com" className="text-sky-500 hover:text-sky-700">
          <Mail size={28} />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-900">
          <Linkedin size={28} />
        </a>
        <a href="tel:+1234567890" className="text-green-600 hover:text-green-800">
          <Phone size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
