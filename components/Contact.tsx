import { motion } from "motion/react"
import { ChangeEvent, FormEvent, useState } from "react";
import Footer from "./Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `\n\n${formData.message}\n\n${formData.name}`
    )}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <div className="h-screen flex items-center bg-zinc-900 text-white">
    <div className="px-12 md:px-32 flex flex-col w-full">
      <div className="p-4 w-full flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">Contact</h2>
        <div className="w-24 h-1 bg-[#28D08A] mx-auto mb-4"></div>
        <p className="text-lg text-zinc-300 max-w-md mx-auto">
          Feel free to send me a message!
        </p>
      </motion.div>
      
      {/* Form */}
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="sr-only">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full bg-transparent border-b border-zinc-500 py-2 px-1 text-white focus:border-[#28D08A] focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="sr-only">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full bg-transparent border-b border-zinc-500 py-2 px-1 text-white focus:border-[#28D08A] focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="sr-only">SUBJECT</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full bg-transparent border-b border-zinc-500 py-2 px-1 text-white focus:border-[#28D08A] focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="sr-only">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
            rows={4}
            className="w-full bg-transparent border-b border-zinc-500 py-2 px-1 text-white focus:border-[#28D08A] focus:outline-none transition-colors duration-300 resize-none"
          />
        </div>
        
        <div className="mt-2 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="rounded-xl p-3 flex items-center gap-2 bg-[#28D08A] text-white cursor-pointer py-3 px-8 hover:bg-zinc-800 hover:text-zinc-100 transition-colors duration-300"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
      </div>
    </div>
  </div>
  )
}

export default Contact