import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Loader } from 'lucide-react';
import MarkdownViewer from '../components/MarkdownViewer';
import { loadMarkdown, extractContent } from '../utils/markdownLoader';
import { chapters } from '../data/chapters';

export default function ChapterPage({ lang }) {
  const { chapterId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentChapter = chapters.find(ch => ch.id === chapterId);
  const currentIndex = chapters.findIndex(ch => ch.id === chapterId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  useEffect(() => {
    const loadContent = async () => {
      if (!currentChapter) {
        setError('Chapter not found');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      
      const markdown = await loadMarkdown(currentChapter.file);
      
      if (markdown) {
        const processedContent = extractContent(markdown, lang);
        setContent(processedContent);
      } else {
        setError('Failed to load chapter content');
      }
      
      setLoading(false);
    };

    loadContent();
    window.scrollTo(0, 0);
  }, [chapterId, currentChapter, lang]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  if (error || !currentChapter) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {lang === 'zh' ? '章节未找到' : 'Chapter Not Found'}
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link to="/" className="text-blue-600 hover:underline">
            {lang === 'zh' ? '返回首页' : 'Return to Home'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Chapter Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {lang === 'zh' ? currentChapter.titleZh : currentChapter.title}
        </h1>
        {currentChapter.description && (
          <p className="text-gray-600 italic">{currentChapter.description}</p>
        )}
      </div>

      {/* Content */}
      <MarkdownViewer content={content} lang={lang} />

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-xs text-gray-600 text-center">
          📚 本内容仅供学习交流使用，禁止商业用途 · 版权归原作者 Antonio Gulli 所有 · 遵循 CC BY-NC 4.0 协议
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
        {prevChapter ? (
          <Link
            to={`/chapter/${prevChapter.id}`}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
            <div className="text-left">
              <div className="text-xs text-gray-500">
                上一章
              </div>
              <div className="font-medium">
                {currentChapter.titleZh || prevChapter.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            to={`/chapter/${nextChapter.id}`}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500">
                下一章
              </div>
              <div className="font-medium">
                {nextChapter.titleZh || nextChapter.title}
              </div>
            </div>
            <ChevronRight size={20} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
