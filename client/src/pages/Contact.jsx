import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      
      // Success notification
      toast.success(`Thanks ${formData.firstName}! We'll get back to you soon.`, {
        duration: 4000,
        position: "top-center",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      {/* Top Section - Get in Touch */}
      <div className="bg-pink-100 py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-8">
            Get in <span className="text-pink-500">Touch</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Have questions or feedback? We'd love to hear from you. Reach out to us and our team
            will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Bottom Section - Contact Form and Info */}
      <div className="bg-white py-20 md:py-25 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Side - Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
              Contact <span className="text-pink-500">Information</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-base mb-8 md:mb-12 font-normal">
              Reach out to us through any of the channels below. Our customer support team is
              available to assist you with any questions or concerns.
            </p>

            {/* Email Contact */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Email</h3>
                  <p className="text-pink-500 text-sm md:text-base font-normal">support@shego.co.za</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base ml-18 font-normal">We respond within 24 hours</p>
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-12">
              Send us a <span className="text-pink-500">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name and Last Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-900 font-medium text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-medium text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-900 font-medium text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-900 font-medium text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1234-567890"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-900 font-medium text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 font-medium text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-400 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-base"
              >
                {loading ? "Sending..." : "Send Message"} <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;