import { Link } from 'react-router-dom';
import { BookOpen, Star, Users } from 'lucide-react';

export default function HomePage({ lang }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          {/* Logo Section */}
          <div className="flex justify-center items-center mb-8">
            <img 
              src="/ruhang365-logo-optimized.png" 
              alt="入行365 Logo" 
              className="h-32 w-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="flex justify-center mb-6">
            <BookOpen className="text-blue-600" size={80} />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            智能体设计模式
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            构建智能系统的实践指南 - 中英文对照版
          </p>
          <p className="text-lg text-gray-600 mb-4">
            作者：Antonio Gulli | 翻译：ginobefun 团队
          </p>
          <p className="text-base text-blue-600 font-medium mb-8">
            由入行365提供技术支持
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/chapter/dedication"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              开始阅读
            </Link>
            <a
              href="https://ruhang365.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-md"
            >
              访问入行365
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Star className="text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">21个设计模式</h3>
            <p className="text-gray-600">
              涵盖从核心到生产级的完整智能体设计模式体系
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <BookOpen className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">中英对照</h3>
            <p className="text-gray-600">
              完整的双语对照翻译，支持中文、英文、双语三种阅读模式
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <Users className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">开源协作</h3>
            <p className="text-gray-600">
              基于 CC BY-NC 4.0 协议，欢迎社区贡献和参与
            </p>
          </div>
        </div>

        {/* Book Info */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">关于本书</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            本书是一部全面的技术指南，涵盖了现代人工智能系统中智能体设计的核心概念和实践方法。从提示链、路由到多智能体协作，从记忆管理到生产优化，系统性地介绍了21种智能体设计模式。
          </p>
          <p className="text-gray-700 leading-relaxed">
            原书作者 Antonio Gulli 将所有版税捐赠给救助儿童会（Save the Children），体现了技术与公益的结合。
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center gap-2">
            ⚠️ 免责声明
          </h3>
          <div className="text-sm text-yellow-700 space-y-2">
            <p>• 本网站内容为《Agentic Design Patterns》一书的中英文对照翻译，仅供学习交流使用</p>
            <p>• 原书版权归作者 Antonio Gulli 和出版社 Springer 所有</p>
            <p>• 翻译内容遵循 CC BY-NC 4.0 协议，禁止任何形式的商业使用</p>
            <p>• 入行365 仅提供技术支持，不对翻译内容的准确性承担责任</p>
            <p>• 如需商业用途，请联系原书版权方获取授权</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2">© 2025 入行365 · 技术支持</p>
          <p className="mb-2">翻译项目由 ginobefun 团队维护 · 遵循 CC BY-NC 4.0 开源协议</p>
          <p className="text-xs text-gray-500">
            本站内容仅供学习交流 · 禁止商业使用 · 版权归原作者所有
          </p>
        </div>
      </div>
    </div>
  );
}
