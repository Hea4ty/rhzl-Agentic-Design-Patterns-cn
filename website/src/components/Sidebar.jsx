import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, BookOpen } from 'lucide-react';
import { chapters, categories } from '../data/chapters';

export default function Sidebar({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const groupedChapters = chapters.reduce((acc, chapter) => {
    if (!acc[chapter.category]) {
      acc[chapter.category] = [];
    }
    acc[chapter.category].push(chapter);
    return acc;
  }, {});

  const sortedCategories = Object.entries(groupedChapters).sort(
    ([catA], [catB]) => categories[catA].order - categories[catB].order
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="p-6">
          {/* 入行365 Logo */}
          <Link to="/" className="block mb-6">
            <img 
              src="/ruhang365-logo-optimized.png" 
              alt="入行365" 
              className="h-14 w-auto mx-auto rounded-xl shadow-lg"
            />
          </Link>
          
          {/* Title */}
          <Link to="/" className="flex items-center gap-2 mb-6">
            <BookOpen className="text-blue-600" size={32} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                智能体设计模式
              </h1>
              <p className="text-xs text-gray-500">
                构建智能系统的实践指南
              </p>
            </div>
          </Link>

          {/* Chapter list */}
          <nav className="space-y-6">
            {sortedCategories.map(([categoryId, categoryChapters]) => (
              <div key={categoryId}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {categories[categoryId].nameZh}
                </h3>
                <ul className="space-y-1">
                  {categoryChapters.map(chapter => {
                    const isActive = location.pathname === `/chapter/${chapter.id}`;
                    return (
                      <li key={chapter.id}>
                        <Link
                          to={`/chapter/${chapter.id}`}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors
                            ${isActive 
                              ? 'bg-blue-50 text-blue-700 font-medium' 
                              : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                          <ChevronRight size={16} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
                          <span className="flex-1">
                            {chapter.titleZh}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
