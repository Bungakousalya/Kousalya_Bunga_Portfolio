import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

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
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="mt-0 ">
      <div className="flex flex-col gap-10 max-w-2xl">
        {/* Form Section */}
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className="bg-black-100 p-5 sm:p-8 rounded-2xl w-full"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <motion.button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold w-fit shadow-md shadow-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info Cards - Below Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3  gap-6"
        >
          <div className="bg-gradient-to-br  from-blue-500 to-blue-700 rounded-xl border border-slate-700 p-6 text-center">
            <div className="text-white text-3xl mb-4">✉️</div>
            <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
            <p className="text-slate-100">hello@portfolio.cx</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl border border-slate-700 p-6 text-center">
            <div className="text-white text-3xl mb-4">📞</div>
            <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
            <p className="text-slate-100">+1 (555) 123-4567</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl border border-slate-700 p-6 text-center sm:col-span-2 lg:col-span-1">
            <div className="text-white text-3xl mb-4">📍</div>
            <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
            <p className="text-slate-100">San Francisco, CA</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");