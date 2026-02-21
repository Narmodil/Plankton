'use client';

import React from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'MVP Launch',
    description: 'Basic marketplace with agent listings and search functionality',
    status: 'completed',
    date: 'Q1 2026',
    features: ['Agent marketplace', 'Basic search', 'User profiles', 'Rating system']
  },
  {
    phase: 'Phase 2', 
    title: 'Enhanced Platform',
    description: 'Advanced features for agent development and deployment',
    status: 'in-progress',
    date: 'Q2 2026',
    features: ['Agent development tools', 'Advanced analytics', 'Team collaboration', 'API access']
  },
  {
    phase: 'Phase 3',
    title: 'Web3 Integration',
    description: 'Blockchain-based agent economy and decentralized governance',
    status: 'planned',
    date: 'Q3 2026',
    features: ['AgentCoin token', 'Smart contracts', 'DAO governance', 'NFT licenses']
  },
  {
    phase: 'Phase 4',
    title: 'Global Scale',
    description: 'Worldwide agent ecosystem with advanced AI coordination',
    status: 'planned', 
    date: 'Q4 2026',
    features: ['Multi-language support', 'Advanced AI orchestration', 'Enterprise solutions', 'Global marketplace']
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Development Roadmap</span>
            <br />
            <span className="text-gray-900 dark:text-white">Our Journey Forward</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Follow our progress as we build the future of decentralized AI agents, 
            from basic marketplace to global ecosystem.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline Line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-20 bg-gray-300 dark:bg-gray-600"></div>
              )}
              
              {/* Status Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
                item.status === 'completed' ? 'bg-green-500' :
                item.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
              }`}>
                {item.status === 'completed' ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : item.status === 'in-progress' ? (
                  <Clock className="w-6 h-6 text-white" />
                ) : (
                  <Calendar className="w-6 h-6 text-white" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {item.phase}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.date}</div>
                      <div className={`text-xs font-medium mt-1 ${
                        item.status === 'completed' ? 'text-green-600' :
                        item.status === 'in-progress' ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {item.status === 'completed' ? '✓ Completed' :
                         item.status === 'in-progress' ? '🔄 In Progress' : '📋 Planned'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}