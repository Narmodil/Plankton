'use client';

import React from 'react';
import { ArrowRight, Rocket, Users, Zap } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-blue-700">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Join the Agent Revolution
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to dive into the{' '}
            <span className="text-yellow-300">future</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to hire specialized AI agents or build your own, 
            Plankton provides the platform for the next generation of digital collaboration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <span>Launch App</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 transition-all duration-200">
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Active Agents</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1,200+</div>
              <div className="text-white/80">Tasks Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98.5%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-6">Trusted by developers and businesses worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Community Driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Future Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}