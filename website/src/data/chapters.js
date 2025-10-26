export const chapters = [
  {
    id: 'dedication',
    title: '献辞',
    titleZh: '献辞',
    file: '01-Dedication.md',
    category: 'front-matter'
  },
  {
    id: 'acknowledgment',
    title: '致谢',
    titleZh: '致谢',
    file: '02-Acknowledgment.md',
    category: 'front-matter'
  },
  {
    id: 'foreword',
    title: '序言',
    titleZh: '序言',
    file: '03-Foreword.md',
    category: 'front-matter'
  },
  {
    id: 'thought-leader',
    title: '思想领袖的观点',
    titleZh: '思想领袖的观点',
    file: '04-Thought-Leader.md',
    category: 'front-matter'
  },
  {
    id: 'introduction',
    title: '介绍',
    titleZh: '介绍',
    file: '05-Introduction.md',
    category: 'front-matter'
  },
  {
    id: 'what-makes-agent',
    title: '是什么让AI成为智能体？',
    titleZh: '是什么让AI成为智能体？',
    file: '06-What-Makes-Agent.md',
    category: 'front-matter'
  },
  {
    id: 'chapter-01',
    title: '第一章：提示链',
    titleZh: '第一章：提示链',
    file: '07-Chapter-01-Prompt-Chaining.md',
    category: 'part-1',
    description: '分而治之的任务分解'
  },
  {
    id: 'chapter-02',
    title: '第二章：路由',
    titleZh: '第二章：路由',
    file: '08-Chapter-02-Routing.md',
    category: 'part-1',
    description: '智能决策与动态分发'
  },
  {
    id: 'chapter-03',
    title: '第三章：并行化',
    titleZh: '第三章：并行化',
    file: '09-Chapter-03-Parallelization.md',
    category: 'part-1',
    description: '并发执行提升性能'
  },
  {
    id: 'chapter-04',
    title: '第四章：反思',
    titleZh: '第四章：反思',
    file: '10-Chapter-04-Reflection.md',
    category: 'part-1',
    description: '自我评估和迭代改进'
  },
  {
    id: 'chapter-05',
    title: '第五章：工具使用',
    titleZh: '第五章：工具使用',
    file: '11-Chapter-05-Tool-Use.md',
    category: 'part-1',
    description: '外部工具与API集成'
  },
  {
    id: 'chapter-06',
    title: '第六章：规划',
    titleZh: '第六章：规划',
    file: '12-Chapter-06-Planning.md',
    category: 'part-1',
    description: '多步骤计划制定与执行'
  },
  {
    id: 'chapter-07',
    title: '第七章：多智能体协作',
    titleZh: '第七章：多智能体协作',
    file: '13-Chapter-07-Multi-Agent-Collaboration.md',
    category: 'part-1',
    description: '协同工作架构'
  },
  {
    id: 'chapter-08',
    title: '第八章：记忆管理',
    titleZh: '第八章：记忆管理',
    file: '14-Chapter-08-Memory-Management.md',
    category: 'part-2',
    description: '短期与长期记忆'
  },
  {
    id: 'chapter-10',
    title: '第十章：模型上下文协议',
    titleZh: '第十章：模型上下文协议',
    file: '16-Chapter-10-Model-Context-Protocol.md',
    category: 'part-2',
    description: '标准化交互协议'
  },
  {
    id: 'chapter-11',
    title: '第十一章：目标设定与监控',
    titleZh: '第十一章：目标设定与监控',
    file: '17-Chapter-11-Goal-Setting-And-Monitoring.md',
    category: 'part-2',
    description: '动态目标管理'
  },
  {
    id: 'chapter-13',
    title: '第十三章：人机协作',
    titleZh: '第十三章：人机协作',
    file: '19-Chapter-13-Human-in-the-Loop.md',
    category: 'part-3',
    description: '人机协同决策'
  },
  {
    id: 'chapter-14',
    title: '第十四章：知识检索（RAG）',
    titleZh: '第十四章：知识检索（RAG）',
    file: '20-Chapter-14-Knowledge-Retrieval-RAG.md',
    category: 'part-3',
    description: '检索增强生成'
  },
  {
    id: 'chapter-15',
    title: '第十五章：智能体间通信',
    titleZh: '第十五章：智能体间通信',
    file: '21-Chapter-15-Inter-Agent-Communication.md',
    category: 'part-4',
    description: '智能体通信协议'
  },
  {
    id: 'chapter-16',
    title: '第十六章：资源感知优化',
    titleZh: '第十六章：资源感知优化',
    file: '22-Chapter-16-Resource-Aware-Optimization.md',
    category: 'part-4',
    description: '性能与成本优化'
  },
  {
    id: 'chapter-17',
    title: '第十七章：推理技术',
    titleZh: '第十七章：推理技术',
    file: '23-Chapter-17-Reasoning-Techniques.md',
    category: 'part-4',
    description: '增强推理能力'
  },
  {
    id: 'chapter-20',
    title: '第二十章：优先级排序',
    titleZh: '第二十章：优先级排序',
    file: '26-Chapter-20-Prioritization.md',
    category: 'part-4',
    description: '任务优先级管理'
  },
  {
    id: 'chapter-21',
    title: '第二十一章：探索与发现',
    titleZh: '第二十一章：探索与发现',
    file: '27-Chapter-21-Exploration-and-Discovery.md',
    category: 'part-4',
    description: '自主探索机制'
  }
];

export const categories = {
  'front-matter': {
    name: 'Front Matter',
    nameZh: '前言部分',
    order: 0
  },
  'part-1': {
    name: 'Part One: Core Patterns',
    nameZh: '第一部分：核心设计模式',
    order: 1
  },
  'part-2': {
    name: 'Part Two: Advanced Patterns',
    nameZh: '第二部分：高级设计模式',
    order: 2
  },
  'part-3': {
    name: 'Part Three: Integration Patterns',
    nameZh: '第三部分：集成设计模式',
    order: 3
  },
  'part-4': {
    name: 'Part Four: Production Patterns',
    nameZh: '第四部分：生产设计模式',
    order: 4
  }
};
