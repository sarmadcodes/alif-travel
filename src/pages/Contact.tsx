import React, { useEffect, useState } from 'react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <main className="pt-16 min-h-screen bg-white">
      <div 
        className={`max-w-7xl mx-auto px-4 py-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl font-bold mb-8 text-black text-center">
  Contact Alif Travel
</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-black">Get in Touch</h2>
            <p className="text-gray-800 mb-6">
              We'd love to hear from you! Whether you have a question about our tours, pricing, 
              or anything else, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <div className="w-6 h-6 bg-black rounded-full" />
                </div>
                <div>
                  <h3 className="font-medium text-black">Email</h3>
                  <p className="text-gray-800">info@aliftravel.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <div className="w-6 h-6 bg-black rounded-full" />
                </div>
                <div>
                  <h3 className="font-medium text-black">Phone</h3>
                  <p className="text-gray-800">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <div className="w-6 h-6 bg-black rounded-full" />
                </div>
                <div>
                  <h3 className="font-medium text-black">Address</h3>
                  <p className="text-gray-800">123 Travel Street, City, Country</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-black">Office Hours</h3>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-black">Monday - Friday</p>
                    <p className="text-gray-800">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Saturday</p>
                    <p className="text-gray-800">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Sunday</p>
                    <p className="text-gray-800">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-black">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-1000 delay-700 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}>
  <h2 className="text-2xl font-semibold mb-6 text-black text-center">Find Us</h2>
  <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-96 shadow-lg">
    {/* Karachi Map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.0282133996!2d66.75360282979353!3d24.92588265921628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1712352309699!5m2!1sen!2s"
      className="h-full w-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Map of Karachi"
    />
  </div>
</div>
      </div>
    </main>
  );
}
