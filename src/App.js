import React, { useState, useEffect } from 'react';
// Lucide-react for icons
import {
  Menu, X, Home, Info, Briefcase, Mail, ChevronUp,
  Fuel,
  Cylinder,
  FlaskConical,
  Truck,
  DollarSign
} from 'lucide-react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Contact form state (still useful for controlled inputs)
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle scroll for showing/hiding scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle contact form submission for Formspree (just clear fields)
  const handleFormspreeSubmit = () => {
    // Formspree handles the actual submission via the form's action attribute.
    // We just clear the local state here after submission.
    setContactName('');
    setContactEmail('');
    setContactPhone('');
    setContactMessage('');
    // IMPORTANT: Replaced alert with console.log as per guidelines
    console.log('Your message has been sent!');
    // In a real application, you'd show a user-friendly modal here instead of alert/console.log
    // For example: setSubmissionStatus('success'); setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 antialiased">
      {/* Tailwind CSS CDN and Inter Font - These are included here for the immersive preview to work */}
      {/* In your actual project, these are typically in public/index.html */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }
          /* Custom scrollbar styles */
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background: rgb(107, 114, 128); /* Tailwind gray-500 */
            border-radius: 5px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05); /* Lighter track */
          }
          /* Custom animations */
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
          .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }

          /* Custom text shadow for hero heading */
          .text-hero-shadow {
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 0 15px rgba(249, 115, 22, 0.3); /* Deeper shadow with orange glow */
          }
        `}
      </style>

      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${isNavOpen ? 'bg-gray-900 shadow-2xl' : 'bg-white bg-opacity-90 backdrop-blur-xl shadow-lg'}`}> {/* Stronger blur, deeper shadow */}
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="image_aebb08.jpg" // Path to your uploaded logo image (relative to public folder)
              alt="Habib Gas Company Logo"
              className="h-12 md:h-16 rounded-lg shadow-md" // Slightly larger, more pronounced shadow
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x60/333333/ffffff?text=Logo"; }} // Fallback
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12"> {/* Increased spacing */}
            <li><a href="#home" className="text-gray-700 hover:text-orange-600 font-semibold transition duration-300 text-lg relative group flex items-center"><Home className="mr-2" size={20} />Home<span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
            <li><a href="#about" className="text-gray-700 hover:text-orange-600 font-semibold transition duration-300 text-lg relative group flex items-center"><Info className="mr-2" size={20} />About Us<span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
            <li><a href="#services" className="text-gray-700 hover:text-orange-600 font-semibold transition duration-300 text-lg relative group flex items-center"><Briefcase className="mr-2" size={20} />Services<span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-orange-600 font-semibold transition duration-300 text-lg relative group flex items-center"><Mail className="mr-2" size={20} />Contact<span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleNav} className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md p-2">
            {isNavOpen ? <X className="h-8 w-8 text-white" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col items-center py-8 space-y-6">
            <li><a href="#home" onClick={toggleNav} className="text-white text-xl hover:text-orange-300 transition duration-300 flex items-center"><Home className="mr-3" /> Home</a></li>
            <li><a href="#about" onClick={toggleNav} className="text-white text-xl hover:text-orange-300 transition duration-300 flex items-center"><Info className="mr-3" /> About Us</a></li>
            <li><a href="#services" onClick={toggleNav} className="text-white text-xl hover:text-orange-300 transition duration-300 flex items-center"><Briefcase className="mr-3" /> Services</a></li>
            <li><a href="#contact" onClick={toggleNav} className="text-white text-xl hover:text-orange-300 transition duration-300 flex items-center"><Mail className="mr-3" /> Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" // Slightly reduced opacity for better text contrast
          poster="https://placehold.co/1920x1080/333333/ffffff?text=Habib+Gas+Hero"
        >
          {/* Ensure your video is in the public folder. If in public/videos/, change src to "videos/your_video.mp4" */}
          <source src="videos/vecteezy_engineer-worker-of-an-oil-refinery-against-the-background-of_59018795.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Increased overlay opacity */}

        <div className="relative z-20 max-w-5xl mx-auto p-8"> {/* Increased padding */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 animate-fade-in-down text-hero-shadow"> {/* Larger text, custom shadow class */}
            Your Trusted Partner in Energy Solutions
          </h1>
          <p className="text-xl md:text-3xl mb-12 opacity-90 animate-fade-in-up font-light max-w-3xl mx-auto"> {/* Larger text, increased margin, max-width for readability */}
            Delivering safe, reliable, and efficient gas supply since 1985, powering homes and industries with integrity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8"> {/* Increased spacing */}
            <a href="#services" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 animate-slide-in-left"> {/* Larger buttons, added animation */}
              Explore Services
            </a>
            <a href="#contact" className="bg-white text-orange-700 px-12 py-5 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-orange-100 transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white animate-slide-in-right"> {/* Larger buttons, added animation */}
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-24 bg-gray-50"> {/* Increased padding */}
        {/* About Us Section */}
        <section id="about" className="container mx-auto px-8 py-20 bg-white rounded-3xl shadow-2xl mb-24"> {/* More rounded, deeper shadow, increased padding */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-20"> {/* Increased spacing */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <img
                src="image_aebb08.jpg"
                alt="Habib Gas Company History"
                className="rounded-xl shadow-2xl w-full h-auto object-cover transform hover:scale-102 transition duration-500"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/F97316/ffffff?text=Image+Not+Found"; }}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">About Habib Gas Company</h2> {/* Larger, bolder heading */}
              <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-xl md:max-w-none">
                Established in 1985, Habib Gas Company has proudly served communities for decades, building a legacy of trust and reliability in the energy sector. Our journey began with a commitment to delivering safe, efficient, and dependable gas solutions.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Today, we stand as a leading provider, continuously innovating to meet the evolving energy needs of residential, commercial, and industrial clients across the region. Our dedication to operational excellence and customer satisfaction remains at the core of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-8 py-20 bg-gray-100 rounded-3xl shadow-2xl mb-24"> {/* More rounded, deeper shadow, increased padding */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 text-center mb-16">Our Comprehensive Services</h2> {/* Larger, bolder heading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Increased gap */}
            {/* Service Card 1: Residential Gas Supply */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-3 text-center border border-gray-200">
              <img
                src="https://placehold.co/300x200/F97316/ffffff?text=Residential+Gas"
                alt="Residential Gas Supply"
                className="rounded-lg mb-6 w-full h-auto object-cover transition duration-300 group-hover:scale-105" // Image scale on hover
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/F97316/ffffff?text=Image+Not+Found"; }}
              />
              <div className="text-orange-600 text-5xl mb-4 flex justify-center transition duration-300 group-hover:text-orange-700">
                <Fuel size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Residential Gas Supply</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Reliable and safe gas delivery for your home, ensuring comfort for cooking, heating, and more.
              </p>
            </div>

            {/* Service Card 2: Commercial Solutions */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-3 text-center border border-gray-200">
              <img
                src="https://placehold.co/300x200/F97316/ffffff?text=Commercial+Solutions"
                alt="Commercial Gas Solutions"
                className="rounded-lg mb-6 w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/F97316/ffffff?text=Image+Not+Found"; }}
              />
              <div className="text-orange-600 text-5xl mb-4 flex justify-center transition duration-300 group-hover:text-orange-700">
                <Briefcase size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Commercial Solutions</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Tailored gas solutions for businesses, restaurants, and industries, optimizing efficiency and cost.
              </p>
            </div>

            {/* Service Card 3: Gas Cylinder Supply */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-3 text-center border border-gray-200">
              <img
                src="https://placehold.co/300x200/F97316/ffffff?text=Gas+Cylinders"
                alt="Gas Cylinder Supply"
                className="rounded-lg mb-6 w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/F97316/ffffff?text=Image+Not+Found"; }}
              />
              <div className="text-orange-600 text-5xl mb-4 flex justify-center transition duration-300 group-hover:text-orange-700">
                <Cylinder size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cylinder Sales & Refill</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                High-quality gas cylinders available for purchase and efficient refill services for various needs.
              </p>
            </div>

            {/* Service Card 4: Industrial/Specialty Gases */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-3 text-center border border-gray-200">
              <img
                src="https://placehold.co/300x200/F97316/ffffff?text=Oxygen+Helium"
                alt="Oxygen and Specialty Gases"
                className="rounded-lg mb-6 w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/F97316/ffffff?text=Image+Not+Found"; }}
              />
              <div className="text-orange-600 text-5xl mb-4 flex justify-center transition duration-300 group-hover:text-orange-700">
                <FlaskConical size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Oxygen & Specialty Gases</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Supply of industrial gases like Oxygen, Helium, and other specialty gases for diverse applications.
              </p>
            </div>

            {/* Service Card 5: Prompt Delivery */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-3 text-center border border-gray-200">
              <img
                src="https://placehold.co/300x200/F97316/ffffff?text=Fast+Delivery"
                alt="Prompt Delivery Service"
                className="rounded-lg mb-6 w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/F97316/ffffff?text=Image+Not+Found"; }}
              />
              <div className="text-orange-600 text-5xl mb-4 flex justify-center transition duration-300 group-hover:text-orange-700">
                <Truck size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Prompt Delivery</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Efficient and timely gas cylinder delivery right to your doorstep, ensuring you never run out.
              </p>
            </div>

            {/* Service Card 6: Safety & Maintenance */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-3 text-center border border-gray-200">
              <img
                src="https://placehold.co/300x200/F97316/ffffff?text=Safety+Maintenance"
                alt="Safety and Maintenance"
                className="rounded-lg mb-6 w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/F97316/ffffff?text=Image+Not+Found"; }}
              />
              <div className="text-orange-600 text-5xl mb-4 flex justify-center transition duration-300 group-hover:text-orange-700">
                <Info size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Safety & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Comprehensive safety inspections, leak detection, and regular maintenance for peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-8 py-20 bg-white rounded-3xl shadow-2xl"> {/* More rounded, deeper shadow, increased padding */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 text-center mb-12">Get in Touch</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-10">
              We're here to help! Fill out the form below or reach us directly via phone or email for inquiries and support.
            </p>
            {/* Formspree Integration */}
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" // REPLACE THIS WITH YOUR ACTUAL FORMSPREE ENDPOINT
              method="POST"
              className="grid grid-cols-1 gap-8"
              onSubmit={handleFormspreeSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 text-lg placeholder-gray-500"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 text-lg placeholder-gray-500"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 text-lg placeholder-gray-500"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y transition duration-200 text-lg placeholder-gray-500"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-orange-800 transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                Send Message
              </button>
            </form>
            <div className="mt-16 text-center text-gray-700">
              <p className="text-xl font-semibold mb-4">Or find us here:</p>
              <p className="mb-2 text-lg"><strong>Address:</strong> Polt No. RS-1, Street 8/1, Sector 32-E, Nasir Colony, Street No. 1, Korangi, Karachi, 74900</p>
              <p className="mb-2 text-lg"><strong>Phone:</strong> <a href="tel:+923042664764" className="text-orange-600 hover:underline">+92 304 2664764</a></p>
              <p className="text-lg"><strong>Email:</strong> <a href="mailto:habibgases@gmail.com" className="text-orange-600 hover:underline">habibgases@gmail.com</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-14 px-6 md:px-12"> {/* Increased padding */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"> {/* Increased gap */}
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Habib Gas</h3> {/* Increased margin */}
            <p className="text-gray-400 leading-relaxed text-base">
              Your reliable partner for energy solutions, committed to safety and customer satisfaction since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-6">Quick Links</h3> {/* Increased margin */}
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300 text-base">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300 text-base">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300 text-base">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300 text-base">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-base">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-6">Contact</h3> {/* Increased margin */}
            <p className="text-gray-400 mb-2 text-base">32-E, Polt No. RS-1, Street 8/1, Sector 32-E, Nasir Colony, Street No. 1, Korangi, Karachi, 74900</p>
            <p className="mb-2 text-lg"><strong>Phone:</strong> <a href="tel:+923042664764" className="text-orange-400 hover:underline">+92 304 2664764</a></p>
            <p className="text-base"><strong>Email:</strong> <a href="mailto:habibgases@gmail.com" className="text-orange-400 hover:underline">habibgases@gmail.com</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm"> {/* Increased margin */}
          <p>&copy; {new Date().getFullYear()} Habib Gas Company. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={30} /> {/* Slightly larger icon */}
        </button>
      )}
    </div>
  );
}

export default App;
