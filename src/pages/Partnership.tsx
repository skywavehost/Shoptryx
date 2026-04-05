import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function Partnership() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Work With Us</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-8">Grow Your Brand with a Trusted Partner</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We partner with brands and distributors who value professional representation and scalable growth. Our distribution network is designed to maximize your product's reach while maintaining the highest standards of brand integrity.
            </p>
            <div className="flex gap-4">
              <a href="#contact-form" className="btn-primary">Apply for Partnership</a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Partnership Meeting" 
              className="w-full h-auto shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Why Partner with Shoptryx?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We provide the infrastructure and expertise needed to take your distribution to the next level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <TrendingUp className="text-gold" size={32} />,
                title: "Increased Reach",
                desc: "Gain immediate access to millions of customers through our optimized Amazon FBA presence."
              },
              {
                icon: <ShieldCheck className="text-gold" size={32} />,
                title: "Professional Representation",
                desc: "We ensure your brand is presented with high-quality imagery, accurate descriptions, and premium service."
              },
              {
                icon: <Zap className="text-gold" size={32} />,
                title: "Scalable Distribution",
                desc: "Our bulk purchasing model provides consistent volume and reliable liquidity for your business."
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="p-10 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif mb-8">Start the Conversation</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Tell us about your brand or distribution business. Our team will review your information and get back to you within 24-48 hours to discuss potential partnership opportunities.
            </p>
            <ul className="space-y-4">
              {[
                "Authorized Brand Representative",
                "Bulk Inventory Liquidity",
                "Professional Channel Management",
                "Long-term Strategic Growth"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 text-charcoal">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Company Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-gold transition-colors" placeholder="Acme Corp" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                <input type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Business Type</label>
                <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent">
                  <option>Brand Owner</option>
                  <option>Authorized Distributor</option>
                  <option>Manufacturer</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message / Partnership Goals</label>
                <textarea rows={4} className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-gold transition-colors resize-none" placeholder="How can we work together?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
