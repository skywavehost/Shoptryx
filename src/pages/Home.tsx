import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Globe, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Warehouse Logistics" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Premium Distribution</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Trusted Retail Distribution. <br />
              <span className="text-gray-400 italic">Powered by Excellence.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              Shoptryx bridges the gap between world-class brands and the global marketplace through strategic wholesale sourcing and Amazon FBA fulfillment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partnership" className="btn-primary flex items-center justify-center gap-2">
                Partner With Us <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">Our Identity</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">A Legacy of Reliability and Scalable Growth</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based in Waxhaw, North Carolina, Shoptryx is a leading retail and distribution firm dedicated to professional brand representation. We specialize in sourcing high-demand products in bulk from trusted distributors and manufacturers.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to provide a seamless bridge between supply and demand, ensuring that premium brands reach their full potential through the world's most advanced fulfillment network.
            </p>
            <Link to="/about" className="text-charcoal font-semibold flex items-center gap-2 hover:text-gold transition-colors">
              Read Our Full Story <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Environment" 
              className="w-full h-auto shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block border-l-4 border-gold">
              <p className="text-3xl font-serif text-charcoal mb-1">100%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Fulfillment Accuracy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div {...fadeIn}>
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">The Shoptryx Model</span>
            <h2 className="text-4xl md:text-5xl font-serif">Seamless Distribution Flow</h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Globe className="text-gold" size={32} />,
              title: "Strategic Sourcing",
              desc: "We partner with authorized distributors and brands to source premium products in bulk."
            },
            {
              icon: <Zap className="text-gold" size={32} />,
              title: "Amazon FBA Fulfillment",
              desc: "Leveraging the world's most advanced logistics network for rapid, reliable delivery."
            },
            {
              icon: <ShieldCheck className="text-gold" size={32} />,
              title: "Brand Protection",
              desc: "We maintain brand integrity and professional representation across all retail channels."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="p-10 border border-gray-100 hover:border-gold transition-all duration-500 hover:shadow-xl group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000" 
            alt="Logistics" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div {...fadeIn}>
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">The Advantage</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">Why Brands Trust Shoptryx</h2>
            <div className="space-y-8">
              {[
                { title: "Professional Representation", desc: "We treat your brand as our own, ensuring high-quality listings and customer service." },
                { title: "Scalable Distribution", desc: "Our infrastructure is built to handle volume, allowing your brand to grow without friction." },
                { title: "Data-Driven Insights", desc: "We monitor market trends and inventory levels to optimize sales and stock management." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="h-6 w-6 rounded-full border border-gold flex items-center justify-center shrink-0 mt-1">
                    <div className="h-2 w-2 bg-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white/5 p-8 backdrop-blur-sm border border-white/10">
              <BarChart3 className="text-gold mb-4" size={32} />
              <p className="text-3xl font-serif mb-1">15k+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Monthly Shipments</p>
            </div>
            <div className="bg-white/5 p-8 backdrop-blur-sm border border-white/10 mt-8">
              <DollarSign className="text-gold mb-4" size={32} />
              <p className="text-3xl font-serif mb-1">$100K</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Monthly Spent</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands/Partners */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-10">Trusted by Global Distributors</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder logos */}
            <div className="text-2xl font-serif font-bold tracking-tighter">DISTRI-CO</div>
            <div className="text-2xl font-serif font-bold tracking-tighter italic">GLOBAL_RETAIL</div>
            <div className="text-2xl font-serif font-bold tracking-tighter">PRIME_SOURCE</div>
            <div className="text-2xl font-serif font-bold tracking-tighter italic">NEXUS_LOGISTICS</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Expand Your Reach?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Join a network of successful brands and distributors who trust Shoptryx for their retail distribution needs.
          </p>
          <Link to="/partnership" className="btn-primary inline-flex items-center gap-2">
            Start a Partnership <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
