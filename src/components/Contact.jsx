// Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

/**
 * Contact component - Handles contact form submissions
 */
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      {/* Animated Globe and Message Section - Responsive layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Rotating Earth with Glow Effect */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center h-48" // Fixed height for all screens
        >
          <div className="relative">
            {/* Earth emoji with rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-[10rem] text-blue-400 relative z-10" // Large fixed size
            >
              🌍
            </motion.div>
            
            {/* Glow effect around Earth */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.4) 0%, transparent 60%)",
                top: "-25%",
                left: "-20%",
                right: "-20%",
                bottom: "-20%",
              }}
              animate={{
                opacity: [0.7, 0.9, 0.7],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Message from right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 text-center lg:text-right" // Center on mobile, right align on large screens
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Connect!
          </h3>
        </motion.div>
      </div>

      {/* Contact Form - Responsive padding and layout */}
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className='bg-black-100 p-4 sm:p-8 rounded-2xl' // Smaller padding on mobile
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8' // Smaller gap on mobile
        >
          {/* Name input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' // Smaller padding on mobile
            />
          </label>
          
          {/* Email input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          {/* Message textarea */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4'>Your Message</span>
            <textarea
              rows={5} // Fewer rows on mobile
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Submit button with loading animation */}
          <motion.button
            type='submit'
            className='relative bg-tertiary py-2 sm:py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary overflow-hidden' // Smaller padding on mobile
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send"}
            {/* Light effect on button */}
            {loading && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#915eff] to-transparent"
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");