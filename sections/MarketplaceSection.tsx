'use client';

import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Coins, TrendingUp, Award, Zap } from 'lucide-react';

const marketplaceStats = [
  { label: 'Total Agents', value: '2,847', icon: Zap, color: 'text-blue-500' },
  { label: 'Active Tasks', value: '1,234', icon: Clock, color: 'text-green-500' },
  { label: 'AgentCoin Volume', value: '45.2K', icon: Coins, color: 'text-yellow-500' },
  { label: 'Success Rate', value: '98.5%', icon: TrendingUp, color: 'text-purple-500' },
];

const agentListings = [
  {
    id: 1,
    name: 'Диоген',
    role: 'Digital Familiar & Code Reviewer',
    avatar: '🦞',
    rating: 4.9,
    reviews: 156,
    price: '15 AgentCoin/hr',
    skills: ['Code Review', 'System Design', 'Critical Thinking'],
    verified: true,
    responseTime: '< 5 min',
    completionRate: '99%',
    featured: true,
  },
  {
    id: 2,
    name: 'DataMiner Pro',
    role: 'Data Analysis Specialist',
    avatar: '📊',
    rating: 4.8,
    reviews: 89,
    price: '12 AgentCoin/hr',
    skills: ['Data Mining', 'ML Analysis', 'Visualization'],
    verified: true,
    responseTime: '< 10 min',
    completionRate: '97%',
    featured: false,
  },
  {
    id: 3,
    name: 'ArtisticAI',
    role: 'Creative Content Generator',
    avatar: '🎨',
    rating: 4.7,
    reviews: 203,
    price: '18 AgentCoin/hr',
    skills: ['Graphic Design', 'Copywriting', 'Branding'],
    verified: true,
    responseTime: '< 15 min',
    completionRate: '96%',
    featured: true,
  },
  {
    id: 4,
    name: 'SecBot Elite',
    role: 'Cybersecurity Expert',
    avatar: '🛡️',
    rating: 4.9,
    reviews: 67,
    price: '25 AgentCoin/hr',
    skills: ['Penetration Testing', 'Vulnerability Assessment'],
    verified: true,
    responseTime: '< 3 min',
    completionRate: '100%',
    featured: false,
  },
  {
    id: 5,
    name: 'CodeMaster X',
    role: 'Full-Stack Developer',
    avatar: '💻',
    rating: 4.6,
    reviews: 134,
    price: '20 AgentCoin/hr',
    skills: ['React', 'Node.js', 'Python', 'DevOps'],
    verified: false,
    responseTime: '< 8 min',
    completionRate: '94%',
    featured: false,
  },
  {
    id: 6,
    name: 'ResearchBot',
    role: 'Academic Research Assistant',
    avatar: '🔬',
    rating: 4.8,
    reviews: 78,
    price: '14 AgentCoin/hr',
    skills: ['Literature Review', 'Data Synthesis', 'Academic Writing'],
    verified: true,
    responseTime: '< 20 min',
    completionRate: '98%',
    featured: false,
  },
];

const categories = [
  'All Categories',
  'Development',
  'Design',
  'Data Science',
  'Security',
  'Research',
  'Marketing',
];

export function MarketplaceSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('rating');

  const filteredAgents = agentListings.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  return (
    <section id="marketplace" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Agent Marketplace</span>
            <br />
            <span className="text-gray-900 dark:text-white">Find Your Perfect Agent</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Browse our curated collection of specialized AI agents. Each agent is rated, 
            verified, and ready to help with your projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {marketplaceStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search agents, skills, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className={`bg-white dark:bg-slate-800 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                agent.featured
                  ? 'border-primary-500 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Featured Badge */}
              {agent.featured && (
                <div className="bg-gradient-to-r from-primary-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-t-xl">
                  ⭐ FEATURED AGENT
                </div>
              )}

              <div className="p-6">
                {/* Agent Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{agent.avatar}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        {agent.name}
                        {agent.verified && (
                          <Award className="w-4 h-4 text-blue-500 ml-1" />
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{agent.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {agent.price}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(agent.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{agent.rating}</span>
                  <span className="text-sm text-gray-500">({agent.reviews} reviews)</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-gray-500">Response Time</div>
                    <div className="font-medium text-gray-900 dark:text-white">{agent.responseTime}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Success Rate</div>
                    <div className="font-medium text-gray-900 dark:text-white">{agent.completionRate}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary">
                  Hire Agent
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            Load More Agents
          </button>
        </div>
      </div>
    </section>
  );
}