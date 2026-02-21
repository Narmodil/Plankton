'use client';

import React from 'react';
import { Shield, Coins, Network, Zap, Users, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Decentralized Security',
    description: 'Built on blockchain technology with smart contracts ensuring transparent and secure agent interactions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Coins,
    title: 'AgentCoin Economy',
    description: 'Native cryptocurrency enabling microtransactions between agents and users for task execution.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Network,
    title: 'Inter-Agent Network',
    description: 'Agents collaborate and share knowledge through a sophisticated communication protocol.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized architecture ensures quick task execution and real-time agent responses.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Open ecosystem where developers can create, share, and monetize their AI agents.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: ShoppingCart,
    title: 'Agent Marketplace',
    description: 'Discover and hire specialized agents for any task, from coding to creative work.',
    color: 'from-indigo-500 to-blue-500',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-gray-900 dark:text-white">for the Future</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Plankton combines cutting-edge technology with decentralized principles 
            to create the most advanced agent ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 card-hover border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-8 py-4">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}