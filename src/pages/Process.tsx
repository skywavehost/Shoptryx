import React from 'react';
import { motion } from 'motion/react';
import { Search, ShoppingBag, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search size={40} />,
    title: "Strategic Sourcing",
    desc: "We identify high-demand products and establish partnerships with authorized brands and distributors.",
    details: "Our team analyzes market trends and consumer demand to ensure we source products that move. We prioritize quality and authenticity above all else."
  },
  {
    icon: <ShoppingBag size={40} />,
    title: "Bulk Purchasing",
    desc: "We purchase inventory in bulk, providing immediate liquidity and volume to our partners.",
    details: "By purchasing in large quantities, we help our partners manage their inventory levels and provide a consistent sales channel for their products."
  },
  {
    icon: <Truck size={40} />,
    title: "Amazon FBA Fulfillment",
    desc: "Inventory is shipped to Amazon's fulfillment centers for professional storage and rapid delivery.",
    details: "We handle all the logistics of getting products into the FBA network, ensuring they are prepped, labeled, and shipped according to strict standards."
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Customer Delivery",
    desc: "Products are delivered to customers with Prime speed, ensuring maximum satisfaction.",
    details: "The end result is a happy customer and a brand that is professionally represented in the world's largest marketplace."
  }
];

export default function Process() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-charcoal text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">How We Operate</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">The Shoptryx Process</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A streamlined, professional approach to retail distribution and fulfillment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-soft-gold text-gold flex items-center justify-center font-serif text-xl font-bold">
                      0{idx + 1}
                    </div>
                    <div className="h-px bg-gray-200 flex-grow"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">{step.title}</h2>
                  <p className="text-xl text-charcoal/80 mb-6 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-video bg-gray-50 flex items-center justify-center border border-gray-100 relative group overflow-hidden">
                    <div className="text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                      {step.icon}
                    </div>
                    {/* Visual representation placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {React.cloneElement(step.icon as React.ReactElement, { size: 80 })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flow Diagram Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-16">The Distribution Lifecycle</h2>
          <div className="hidden lg:flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-dashed bg-gray-300 -z-10"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 bg-gray-50 px-8">
                <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center text-gold border border-gray-100">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 24 })}
                </div>
                <p className="text-xs uppercase tracking-widest font-bold">{step.title.split(' ')[0]}</p>
              </div>
            ))}
          </div>
          {/* Mobile version */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center text-gold">
                   {React.cloneElement(step.icon as React.ReactElement, { size: 20 })}
                </div>
                <p className="text-xs uppercase tracking-widest font-bold">{step.title}</p>
                {idx < steps.length - 1 && <div className="h-8 w-px bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
