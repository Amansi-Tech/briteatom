'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const plans = {
  monthly: [
    {
      name: 'Free Trial',
      price: 'Free',
      duration: '3 Days',
      description: 'Test all features without commitment.',
      popular: false,
      features: ['All basic features'],
    },
    {
      name: 'Starter',
      price: '$5',
      duration: '1 Month',
      description: 'Good for small creators or businesses.',
      popular: true,
      features: ['WhatsApp Bot', 'Auto Replies', 'Basic Reports'],
    },
    {
      name: 'Pro',
      price: '$50',
      duration: '12 Months',
      description: 'Best value with priority support.',
      popular: false,
      features: ['Everything in Starter', 'Priority Support', 'Advanced Analytics'],
    },
  ],
  yearly: [
    {
      name: 'Free Trial',
      price: 'Free',
      duration: '3 Days',
      description: 'Test all features without commitment.',
      popular: false,
      features: ['All basic features'],
    },
    {
      name: 'Starter',
      price: '$50',
      duration: '1 Year',
      description: 'Save more when you pay yearly.',
      popular: true,
      features: ['WhatsApp Bot', 'Auto Replies', 'Basic Reports'],
    },
    {
      name: 'Pro',
      price: '$90',
      duration: '1 Year',
      description: 'Best for agencies & resellers.',
      popular: false,
      features: ['All Starter Features', 'Advanced AI', 'Priority Support'],
    },
  ],
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section
      id="pricing"
      className="min-h-screen w-full bg-gray-50 bg-cover bg-no-repeat py-16 px-4 sm:px-6 lg:px-20"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(173, 216, 230, 0.65), rgba(54, 108, 124, 0.38)), url('/3d-rendering-biorobots-concept.jpg')`,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-blue-700 mb-10"
      >
        Choose Your Plan
      </motion.h2>

      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center space-x-4 border border-blue-600 rounded-full px-4 py-1 bg-white">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-blue-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'text-blue-600'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans[billingCycle].map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative bg-white dark:bg-[#111] p-6 rounded-2xl shadow-lg border hover:scale-105 transition-all duration-300 text-center ${
              plan.popular ? 'border-blue-600' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-blue-600">{plan.name}</h3>
            <p className="text-2xl mt-2 text-gray-900 dark:text-gray-100">{plan.price}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{plan.duration}</p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>

            <ul className="mt-4 text-left space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Info size={16} className="text-blue-600" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
              {plan.price === 'Free' ? 'Start Trial' : 'Choose Plan'}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
