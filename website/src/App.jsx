import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';

function AppContent() {
  const [lang, setLang] = useState('both'); // 'en', 'zh', 'both'
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isHomePage && (
        <>
          <Sidebar lang={lang} />
          <Header lang={lang} setLang={setLang} onSearch={setSearchQuery} />
        </>
      )}
      
      <main className={isHomePage ? '' : 'lg:ml-80 pt-16'}>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage lang={lang} />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
