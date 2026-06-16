'use client';

import React, { useState } from 'react';
import HeroSection from '@/app/components/HeroSection';
import { BLOG_CATEGORIES } from '@/config/constants';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      id: '1',
      title: 'Guide to Medical Tourism in India',
      slug: 'guide-medical-tourism-india',
      category: 'Medical Tourism',
      excerpt:
        'Complete guide to planning your medical tourism journey to India with cost savings and quality care.',
      image: '📚',
      publishedAt: '2024-01-15',
      readTime: 8,
    },
    {
      id: '2',
      title: '10 Benefits of Knee Replacement Surgery',
      slug: 'benefits-knee-replacement',
      category: 'Orthopedics',
      excerpt:
        'Discover how modern knee replacement surgery can restore mobility and quality of life.',
      image: '🦵',
      publishedAt: '2024-01-10',
      readTime: 6,
    },
    {
      id: '3',
      title: 'Advanced Cancer Treatment Options',
      slug: 'advanced-cancer-treatment',
      category: 'Cancer Treatment',
      excerpt:
        'Explore latest cancer treatment modalities including immunotherapy and targeted therapies.',
      image: '🔬',
      publishedAt: '2024-01-05',
      readTime: 10,
    },
    {
      id: '4',
      title: 'IVF Success Stories',
      slug: 'ivf-success-stories',
      category: 'IVF',
      excerpt:
        'Inspiring stories of couples who achieved their dreams of parenthood through IVF.',
      image: '👶',
      publishedAt: '2023-12-28',
      readTime: 7,
    },
    {
      id: '5',
      title: 'Dental Tourism: Smile Makeover Guide',
      slug: 'dental-tourism-guide',
      category: 'Dental Care',
      excerpt:
        'Complete guide to dental implants, veneers, and cosmetic dentistry procedures.',
      image: '😁',
      publishedAt: '2023-12-20',
      readTime: 5,
    },
    {
      id: '6',
      title: 'Recovery Tips After Heart Surgery',
      slug: 'recovery-heart-surgery',
      category: 'Heart Care',
      excerpt:
        'Essential tips for smooth recovery and rehabilitation after cardiac procedures.',
      image: '❤️',
      publishedAt: '2023-12-15',
      readTime: 8,
    },
  ];

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  return (
    <>
      <HeroSection
        title="Medical Tourism Blog"
        subtitle="Insights & Stories"
        description="Latest articles, patient stories, and expert insights about healthcare and medical tourism"
        gradient
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === null
                    ? 'bg-gradient-primary text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
                }`}
              >
                All Articles
              </button>
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-primary text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden card-shadow h-full flex flex-col hover:shadow-hover transition-all"
              >
                {/* Thumbnail */}
                <div className="bg-gradient-light dark:bg-slate-700 h-40 flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-semibold text-primary-600 dark:text-teal-400 mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                {/* Link */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700">
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-teal-400 font-semibold hover:underline"
                  >
                    Read Article →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
