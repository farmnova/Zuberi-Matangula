import React, { useState, useMemo } from 'react';
import { Publication } from '../types';

interface NewsViewProps {
  publications: Publication[];
}

export const NewsView: React.FC<NewsViewProps> = ({ publications }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<Publication | null>(null);

  const categories = [
    'All',
    'Company Announcement',
    'Technology Insight',
    'Scientific Advance',
    'Industry Report'
  ];

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      if (pub.isArchived) return false;
      if (selectedCategory !== 'All' && pub.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          pub.title.toLowerCase().includes(q) ||
          pub.excerpt.toLowerCase().includes(q) ||
          pub.content.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [publications, selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Africanvaris Publications & Press</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          News & Scientific Publications
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Official company announcements, scientific perspectives, technological insights, and milestone
          reports directly from the engineers and leadership at Africanvaris Technology.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#081122] border border-slate-800">
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'bg-[#060c18] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search publications..."
            className="w-full px-3 py-1.5 rounded-lg bg-[#060c18] border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPublications.map((pub) => (
          <article
            key={pub.id}
            onClick={() => setActiveArticle(pub)}
            className="p-6 rounded-2xl bg-[#091122] hover:bg-[#0c162e] border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer space-y-4 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-cyan-400 text-[11px]">{pub.category}</span>
                <span className="font-mono text-[11px]">{pub.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {pub.title}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {pub.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>{pub.date}</span>
              <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                Read Article →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#091122] border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeArticle.title}
              </h2>
              <div className="text-xs text-slate-400 mt-2 font-mono">
                By {activeArticle.author} · Africanvaris Technology
              </div>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-4 pt-2 border-t border-slate-800">
              {activeArticle.content}
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Close Publication
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
