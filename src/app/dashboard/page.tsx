'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LogOut, CreditCard, UserCircle } from 'lucide-react';

const plans = [
  { title: '1 Month', price: '$5', description: 'Try BriteAtom for a month' },
  { title: '5 Months', price: '$25', description: 'Ideal for short-term projects' },
  { title: '8 Months', price: '$40', description: 'Best for growing teams' },
  { title: '12 Months', price: '$60', description: 'Most popular, full access' },
];

export default function DashboardPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0e0e0e] text-gray-900 dark:text-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <UserCircle size={40} className="text-blue-600" />
            <div>
              <h2 className="text-xl font-bold">Welcome back 👋</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">user@briteatom.ai</p>
            </div>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Dashboard Banner */}
        <motion.div
          className="relative bg-blue-600 text-white rounded-xl p-6 overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-md">
            <h1 className="text-2xl font-bold mb-2">BriteAtom Chatbot Assistant</h1>
            <p>Manage your subscription, access features, and stay connected.</p>
          </div>
          <Image
            src="/robot-2-removebg-preview.png"
            alt="Robot Assistant"
            width={180}
            height={180}
            className="absolute right-4 bottom-0 opacity-70 animate-float hidden md:block"
          />
        </motion.div>

        {/* Payment Plans */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Choose a Plan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.title}
                onClick={() => setSelectedPlan(plan.title)}
                className={`cursor-pointer border rounded-lg p-6 text-center shadow-sm transition-transform hover:scale-105 ${
                  selectedPlan === plan.title ? 'border-blue-600 ring-2 ring-blue-400' : 'border-gray-200'
                }`}
              >
                <h4 className="text-xl font-bold text-blue-600 mb-1">{plan.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{plan.price}</p>
                <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{plan.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Billing Summary */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Billing Summary</h3>
          <div className="bg-white dark:bg-[#111] rounded-lg p-6 shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Selected Plan</span>
              <span className="font-semibold">{selectedPlan || 'None'}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Status</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Next Billing Date</span>
              <span className="text-sm">Sep 22, 2025</span>
            </div>
            <button
              className="mt-4 bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <CreditCard size={20} /> Make Payment
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
