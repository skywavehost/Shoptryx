import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://skywavehost.com/wp-content/uploads/2026/04/Shoptryx-scaled.png" 
              alt="Shoptryx Logo" 
              className="h-20 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm">
            Trusted retail distribution powered by excellence. We bridge the gap between premium brands and Amazon FBA fulfillment.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/process" className="hover:text-gold transition-colors">Our Process</Link></li>
            <li><Link to="/partnership" className="hover:text-gold transition-colors">Partnership</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>936 Deep River Way, Waxhaw, NC 28173</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <a href="mailto:contact@shoptryx.com" className="hover:text-gold">contact@shoptryx.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>Mon - Sat: 9am - 5pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Stay updated with our latest distribution insights.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="btn-primary text-xs py-2">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Shoptryx. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
