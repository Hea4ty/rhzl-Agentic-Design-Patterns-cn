import { Languages, Search } from 'lucide-react';

export default function Header({ lang, setLang, onSearch }) {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-80 h-16 bg-white border-b border-gray-200 z-30">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={lang === 'zh' ? '搜索章节...' : 'Search chapters...'}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : lang === 'zh' ? 'both' : 'en')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            title="切换语言"
          >
            <Languages size={20} />
            <span className="font-medium">
              {lang === 'en' ? 'EN' : lang === 'zh' ? '中文' : 'EN/中文'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
