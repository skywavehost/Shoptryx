import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Award } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function About() {
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
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">About Shoptryx</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Built on Trust, <br />Driven by Results</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We are a premier retail and distribution firm specializing in bridging the gap between high-quality brands and the global consumer market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-serif mb-8">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Shoptryx, our mission is simple: to provide a reliable, scalable, and professional distribution channel for brands that want to excel in the digital retail space. We understand the complexities of modern commerce and have built our infrastructure to simplify the process for our partners.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              By sourcing products in bulk and utilizing the Amazon FBA network, we ensure that products are always in stock, professionally represented, and delivered with lightning speed to customers across the country.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-serif text-gold mb-1">2018</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold mb-1">Waxhaw, NC</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Headquarters</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Collaboration" 
              className="w-full h-auto shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">Core Values</span>
            <h2 className="text-4xl font-serif">The Pillars of Our Success</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Shield className="text-gold" size={32} />, title: "Integrity", desc: "We operate with absolute transparency and honesty in every partnership." },
              { icon: <Target className="text-gold" size={32} />, title: "Precision", desc: "From inventory management to fulfillment, we focus on the details." },
              { icon: <Users className="text-gold" size={32} />, title: "Partnership", desc: "We believe in long-term relationships that foster mutual growth." },
              { icon: <Award className="text-gold" size={32} />, title: "Excellence", desc: "We strive for the highest standards in everything we do." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h4 className="text-xl font-serif mb-4">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Explanation */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-serif mb-8">A Model Built for the Future</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Our business model is designed to scale. By combining traditional wholesale sourcing with modern e-commerce fulfillment, we provide a robust solution for brands looking to expand their footprint without increasing their operational overhead.
            </p>
            <div className="bg-gray-50 p-12 border-l-4 border-gold text-left">
              <p className="text-charcoal font-serif text-2xl italic mb-6">
                "We don't just sell products; we represent brands. Our goal is to be the most reliable partner in your distribution chain."
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-400">— The Shoptryx Leadership Team</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
