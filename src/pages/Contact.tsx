import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Contact Shoptryx</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We're here to answer your questions and explore potential partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-soft-gold text-gold flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Email Us</p>
                    <a href="mailto:sale@shoptryx.com" className="text-charcoal hover:text-gold transition-colors block">sale@shoptryx.com</a>
                    <a href="mailto:contact@shoptryx.com" className="text-charcoal hover:text-gold transition-colors block">contact@shoptryx.com</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-soft-gold text-gold flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Our Office</p>
                    <p className="text-charcoal">936 Deep River Way, <br />Waxhaw, NC 28173</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-soft-gold text-gold flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Business Hours</p>
                    <p className="text-charcoal">Mon - Sat: 9am - 5pm <br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border-l-4 border-gold">
              <h4 className="font-serif text-xl mb-4">Partnership Inquiries</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                For brands and distributors looking to partner with us, please use our <a href="/partnership" className="text-gold underline">Partnership Application</a> for a faster response.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-serif mb-8">Send Us a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Your Name</label>
                    <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Jane Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                    <input type="email" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Subject</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="General Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message</label>
                  <textarea rows={6} className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary px-12">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-gold mx-auto mb-4" />
            <p className="font-serif text-xl">Waxhaw, North Carolina</p>
            <p className="text-gray-500 text-sm">936 Deep River Way, 28173</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map iframe here */}
        <div className="absolute inset-0 bg-charcoal/5 pointer-events-none"></div>
      </section>
    </div>
  );
}
