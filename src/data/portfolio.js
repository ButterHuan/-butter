import portraitImage from '../images/zjz1.jpg';
import summerImage from '../images/img01.jpg';
import danzhengVideo from '../images/丹正-web.mp4';
import forestVideo from '../images/背包里的小森林-web.mp4';

export const portfolioData = {
  profile: {
    name: '宦银',
    title: '艺术科技与商业 / 录音与声音设计',
    subtitle: '用声音、影像与传播连接人、内容与文化',
    location: '香港',
    email: 'Wanjin_Huan@outlook.com',
    phone: '40930061',
    bio: '我是一名热爱声音与影像创作的艺术科技方向学生，专注于录音、声音设计、传播与新媒体内容表达。具备影视声音、音频后期、短剧项目管理、社媒运营等综合能力，能够从创意策划到执行落地整合内容与技术，持续探索艺术与科技结合的创新实践。',
    avatar: 'HY',
    portrait: portraitImage,
    tags: ['录音艺术', '声音设计', '新媒体运营', '艺术科技']
  },
  highlights: [
    { value: '3+', label: '年创作与实践经验' },
    { value: '10+', label: '参与项目作品' },
    { value: '300万+', label: '累计播放量' },
    { value: '30万+', label: '公众号浏览量' }
  ],
  resume: [
    {
      category: '教育背景',
      items: [
        {
          title: '艺术科技与商业（硕士）',
          meta: '香港岭南大学 · 2026.8 - 2027.6',
          detail: '主修中西方艺术史、艺术会计与财务、设计思维与创新、艺术金融和科技、艺术与科技：从人工智能到 NFTs、跨文化交流与融合、大数据和艺术市场等课程。'
        },
        {
          title: '录音艺术（本科）',
          meta: '浙江传媒学院 · 2022.9 - 2026.6',
          detail: 'GPA：80/3.0。主修影视导演基础、录音技术基础、录音声学、新媒体艺术概论、电影声音分析、音频调控技巧、影视剪辑、同期录音基础、电影声音设计、视听语言等课程。'
        }
      ]
    },
    {
      category: '实践经历',
      items: [
        {
          title: '电视综合频道 实习生',
          meta: '2025.7 - 2025.9',
          detail: '负责辅助公众号文章撰写、图文设计、视频剪辑等工作；参与频道专题活动文案和策划，协助现场采访和拍摄。'
        },
        {
          title: '新媒体运营实习生',
          meta: '央广云数（浙江）文化传媒有限公司 · 2025.4 - 2025.6',
          detail: '负责供应链事业部官方公众号运营与维护，负责内容选题、文案撰写与日常更新；定期分析阅读量、转发率和用户增长，制作运营周报。'
        },
        {
          title: '短剧项目声音部门负责人',
          meta: '也火文化传媒有限公司 · 2024.11 - 2025.1',
          detail: '负责设计声音方案、安排同期录音人员、配音与声音后期编辑，对接工作人员和演员；累计播放量达300万+，参与《新生》《宝贝，你是妈妈救赎的光》《引君入梦》《学区房》等10余部作品。'
        },
        {
          title: '录音师',
          meta: '北京时差岛文化有限公司 · 2023.8 - 2023.10',
          detail: '参与中秋特辑纪录片《华彩追月夜》丹正母子篇，独立规划声音方案并主导同期录制，协助后期音频编辑与导演调整，完成影片公映。'
        }
      ]
    },
    {
      category: '校园经历与能力',
      items: [
        {
          title: '浙江传媒学院官方微信公众号 运营部副部长',
          meta: '2022.10 - 2024.6',
          detail: '负责公众号日常运营管理，参与图片采集、现场拍摄、文案撰写、推文编辑等工作，成功策划并发布20余篇推文，累计浏览量30万+。'
        },
        {
          title: '个人技能',
          meta: '软件 · 语言 · 传播',
          detail: '熟练使用 Office（Word、PPT、Excel，掌握数据透视表）；熟练运用剪映、PR、达芬奇、Protools、Logic Pro、AU 等；具备普通话二甲、英语 CET6、雅思 6.0 及初中英语教师资格证。'
        }
      ]
    }
  ],
  skills: [
    '录音技术',
    '同期录音',
    '音频后期',
    '电影声音设计',
    '剪辑',
    'Protools',
    'Logic Pro',
    'Premiere Pro',
    'DaVinci Resolve',
    '公众号运营',
    '文案策划',
    '内容传播',
  ],
  projects: [
    {
      title: '纪录片创作',
      type: '剧情短片 / 声音指导',
      description: '根据青海湖拍摄地与人物氛围进行现场声音方案设计，独立策划并执行同期录音，同时参与后期声音调整。',
      features: ['声音氛围设计', '情感叙事', '后期制作'],
      tech: ['Protools', 'Logic Pro', '声音设计'],
      link: '#',
      media: [
        {
          type: 'link',
          href: 'http://localhost:8877/video.mp4',
          label: '打开视频链接'
        },
        {
          type: 'video',
          src: danzhengVideo,
          poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
        },
        {
          type: 'audio',
          src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          label: '音频片段：情绪主线'
        }
      ]
    },
    {
      title: '《有天会长大》',
      type: 'TVC 短片 / 声音执行',
      description: '配合广告片节奏与情绪推进，完成声音层级与音效处理，提升视觉传达效果和品牌记忆点。',
      features: ['广告声音', '节奏控制', '后期合成'],
      tech: ['PR', 'Protools', '音效处理'],
      link: '#',
      media: [
        {
          type: 'image',
          src: summerImage,
          alt: '夏日电影氛围片段'
        }
      ]
    },
    {
      title: '广告声音制作',
      type: '纪录片 / 录音师',
      description: '',
      features: ['现场录音', '环境声设计', '导演配合'],
      tech: ['录音设备', '声音后期', '现场制作'],
      link: '#',
      media: [
        {
            type: 'video',
            src: forestVideo
        },
        {
          type: 'audio',
          src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          label: '音频片段：环境声采样'
        }
      ]
    }
  ],
  additional: [
    {
      title: '作品与项目',
      text: '曾参与剧情短片、TVC、广告短片、动画短片及纪录片项目，涵盖声音指导、录音、声音后期、传播与策划等多个环节。'
    },
    {
      title: '兴趣与方向',
      text: '关注声音设计、艺术与科技融合、文化传播与新媒体表达，致力于将声音创作与艺术科技叙事结合。'
    },
    {
      title: '职业定位',
      text: '希望从事声音设计、媒体传播、纪录片制作、内容策划与艺术科技相关岗位，结合技术与艺术创造更具传播力的作品。'
    }
  ],
  contact: {
    email: 'Wanjin_Huan@outlook.com',
    github: '香港',
    dribbble: '40930061',
    wechat: '13986310698'
  }
};
