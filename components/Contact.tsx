import { motion } from "motion/react"
import { ChangeEvent, FormEvent, useState } from "react";
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
    <div className="h-screen flex items-center bg-slate-950 text-white">
    <div className="px-32 flex flex-col gap-10 w-full">
      <div className="p-4 w-full flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-lg text-zinc-300 max-w-md mx-auto">
          Have a sweet project in mind or just want to say hi?
          <br />
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
            placeholder="NAME"
            className="w-full bg-transparent border-b border-zinc-500 py-3 px-1 text-white focus:border-white focus:outline-none transition-colors duration-300"
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
            placeholder="EMAIL"
            className="w-full bg-transparent border-b border-zinc-500 py-3 px-1 text-white focus:border-white focus:outline-none transition-colors duration-300"
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
            placeholder="SUBJECT"
            className="w-full bg-transparent border-b border-zinc-500 py-3 px-1 text-white focus:border-white focus:outline-none transition-colors duration-300"
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
            placeholder="MESSAGE"
            rows={4}
            className="w-full bg-transparent border-b border-zinc-500 py-3 px-1 text-white focus:border-white focus:outline-none transition-colors duration-300 resize-none"
          />
        </div>
        
        <div className="mt-4 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="border rounded-xl p-3 flex items-center gap-2 bg-white text-black cursor-pointer py-3 px-8 focus:border-white hover:bg-cyan-400 hover:text-zinc-900 transition-colors duration-300"
          >
            SEND MESSAGE
          </motion.button>
        </div>
      </motion.form>
      </div>
    </div>
  </div>
  )
}

export default Contact