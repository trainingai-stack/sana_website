import type { Locale } from '@/i18n/config'

export type LocalizedText = Record<Locale, string>

export type ContentSection = {
  title: LocalizedText
  paragraphs: LocalizedText[]
  bullets?: LocalizedText[]
}

export type ContentHighlight = {
  title: LocalizedText
  description: LocalizedText
}

export type ContentStat = {
  value: string
  label: LocalizedText
}

export type ContentPage = {
  slug: string
  href: string
  title: LocalizedText
  category: 'about' | 'services' | 'insights' | 'legal'
  description: LocalizedText
  summary: LocalizedText
  highlights?: ContentHighlight[]
  stats?: ContentStat[]
  sections: ContentSection[]
  disclaimer?: LocalizedText
  ctaLabel?: LocalizedText
  ctaHref?: string
}

export type FooterLinkItem = {
  href: string
  label: LocalizedText
}

type FooterGroup = {
  title: LocalizedText
  links: FooterLinkItem[]
}

export const aboutPages: ContentPage[] = [
  {
    slug: 'mission-commitment',
    href: '/about/mission-commitment',
    category: 'about',
    title: {
      zh: '品牌使命与承诺',
      en: 'Mission & Commitment',
    },
    summary: {
      zh: '以专业、透明和连续陪伴，帮助国际患者更安心地连接中国优质医疗资源。',
      en: 'We connect international patients with leading medical resources in China through clarity, professionalism, and continuous support.',
    },
    description: {
      zh: 'Sana 参考国际医疗服务机构的患者导航模式，强调信息解释、流程协同和跨文化沟通，让患者在就医前、中、后都能获得稳定支持。',
      en: 'Sana draws on international patient-navigation practices to deliver clear guidance, coordinated logistics, and cross-cultural communication before, during, and after treatment.',
    },
    stats: [
      { value: '1v1', label: { zh: '专属服务协调', en: 'Dedicated coordination' } },
      { value: '48h', label: { zh: '初步方案反馈目标', en: 'Target for first response' } },
      { value: 'Full', label: { zh: '就医全周期覆盖', en: 'Full-journey support' } },
    ],
    highlights: [
      {
        title: { zh: '先解释再行动', en: 'Explain before action' },
        description: {
          zh: '在任何预约、转诊和方案沟通前，先帮助患者理解选择与风险。',
          en: 'We help patients understand options and tradeoffs before booking, referral, or travel decisions are made.',
        },
      },
      {
        title: { zh: '服务与医疗边界清晰', en: 'Clear service boundaries' },
        description: {
          zh: '我们提供非临床协调与支持，不替代医生诊断、处方或治疗决定。',
          en: 'We provide non-clinical coordination and support, without replacing physician diagnosis, prescriptions, or treatment decisions.',
        },
      },
      {
        title: { zh: '长期关系而非一次交易', en: 'A long-term relationship' },
        description: {
          zh: '从首次咨询到回国复盘，我们更关注连续体验和后续衔接。',
          en: 'From first inquiry to post-treatment follow-up, we focus on continuity rather than one-off transactions.',
        },
      },
    ],
    sections: [
      {
        title: { zh: '我们为什么做这件事', en: 'Why We Do This' },
        paragraphs: [
          {
            zh: '跨境就医往往并不只是“找医院”这么简单。患者通常还要同时面对资料准备、术语理解、跨时区沟通、出入境安排和家属协同等问题。',
            en: 'Cross-border care is rarely just about finding a hospital. Patients often face record preparation, terminology gaps, time-zone coordination, travel logistics, and family planning all at once.',
          },
          {
            zh: '我们的使命，是把这些复杂环节拆解清楚，用可理解、可执行、可追踪的方式帮助患者做决定。',
            en: 'Our mission is to break that complexity into understandable, actionable, and trackable steps so patients can make decisions with confidence.',
          },
        ],
      },
      {
        title: { zh: '我们向患者做出的承诺', en: 'What We Commit To' },
        paragraphs: [
          {
            zh: '我们坚持信息透明、节奏清晰、沟通及时，并尽量用患者熟悉的语言和节奏解释医学流程。',
            en: 'We commit to transparent information, clear pacing, timely communication, and explanations that fit the patient’s language and comfort level.',
          },
        ],
        bullets: [
          {
            zh: '不夸大治疗结果，不用模糊承诺推动决定。',
            en: 'We do not exaggerate outcomes or use vague promises to push decisions.',
          },
          {
            zh: '对服务范围、费用构成和时间节点保持可核对。',
            en: 'We keep service scope, cost structure, and timing easy to verify.',
          },
          {
            zh: '在患者授权范围内处理资料与协同事项。',
            en: 'We handle records and coordination only within the patient’s authorization scope.',
          },
        ],
      },
      {
        title: { zh: '我们希望患者获得什么体验', en: 'The Experience We Aim To Deliver' },
        paragraphs: [
          {
            zh: '我们希望患者在来华就医过程中感受到的是“被理解”和“有人负责推进”，而不是被流程推着走。',
            en: 'We want patients to feel understood and steadily supported, rather than rushed through an unfamiliar system.',
          },
          {
            zh: '这也是 Sana 在服务设计上始终强调陪伴式协同、书面确认和关键节点提醒的原因。',
            en: 'That is why Sana emphasizes guided coordination, written confirmations, and milestone-based reminders across the journey.',
          },
        ],
      },
    ],
    ctaLabel: {
      zh: '联系 Sana 团队',
      en: 'Talk to Sana',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'global-services',
    href: '/about/global-services',
    category: 'about',
    title: {
      zh: '全球服务足迹',
      en: 'Global Services',
    },
    summary: {
      zh: '围绕国际患者的真实就医路径，连接咨询、出行、院内协调与回程后的持续支持。',
      en: 'Our service footprint follows the real patient journey, from intake and travel to hospital coordination and aftercare support.',
    },
    description: {
      zh: '参考国际患者服务中心与跨境转诊实践，我们把服务设计成一个分阶段系统，而不是单个节点的“代办”。',
      en: 'Inspired by international patient centers and cross-border referral practices, we design support as a staged system rather than isolated errands.',
    },
    stats: [
      { value: 'Pre', label: { zh: '来华前评估与准备', en: 'Pre-arrival preparation' } },
      { value: 'In', label: { zh: '在华就医协同', en: 'In-China coordination' } },
      { value: 'Post', label: { zh: '治疗后持续衔接', en: 'Post-care continuity' } },
    ],
    sections: [
      {
        title: { zh: '来华前阶段', en: 'Before Arrival' },
        paragraphs: [
          {
            zh: '这一阶段的重点是梳理资料、明确目标、判断是否适合来华就医，以及提前匹配医院、专科与预约窗口。',
            en: 'This stage focuses on reviewing records, clarifying goals, assessing whether care in China is appropriate, and matching hospitals, specialties, and booking windows in advance.',
          },
        ],
        bullets: [
          { zh: '病历、影像、检查报告的整理与翻译建议', en: 'Guidance for organizing and translating records, imaging, and reports' },
          { zh: '就医目标、预算范围、出行节奏的初步梳理', en: 'Initial alignment on goals, budget range, and travel pacing' },
          { zh: '预约前沟通所需问题清单', en: 'Question lists to prepare before specialist consultations' },
        ],
      },
      {
        title: { zh: '在华就医阶段', en: 'During the Visit' },
        paragraphs: [
          {
            zh: '患者抵达后，服务重点从“信息准备”转向“现场执行”，包括门诊协调、院内陪同、报告解读支持与节奏管理。',
            en: 'Once the patient arrives, support shifts from information preparation to on-site execution, including appointment coordination, in-hospital escorting, report explanation support, and schedule management.',
          },
        ],
        bullets: [
          { zh: '门诊、检查、住院与复诊时间衔接', en: 'Coordination across consultations, tests, admission, and follow-ups' },
          { zh: '多语言沟通支持与关键文件说明', en: 'Multilingual communication support and key-document walkthroughs' },
          { zh: '家属陪同、住宿与交通建议', en: 'Guidance for family support, accommodation, and transportation' },
        ],
      },
      {
        title: { zh: '回国与后续阶段', en: 'After Returning Home' },
        paragraphs: [
          {
            zh: '治疗结束并不等于支持结束。患者回国后，往往还需要复查提醒、资料整理、跨国复诊安排和生活方式建议。',
            en: 'Support should not end at discharge. Patients often still need follow-up reminders, record packaging, cross-border recheck planning, and lifestyle guidance after returning home.',
          },
        ],
        bullets: [
          { zh: '出院资料与长期复查计划梳理', en: 'Discharge documentation and long-term follow-up planning' },
          { zh: '远程复诊前的资料准备', en: 'Record preparation for remote follow-up appointments' },
          { zh: '家庭照护与康复节奏建议', en: 'Suggestions for home caregiving and recovery pacing' },
        ],
      },
    ],
    ctaLabel: {
      zh: '查看服务流程',
      en: 'View Service Process',
    },
    ctaHref: '/service-process',
  },
  {
    slug: 'compliance-assurance',
    href: '/about/compliance-assurance',
    category: 'about',
    title: {
      zh: '资质与合规保障',
      en: 'Compliance Assurance',
    },
    summary: {
      zh: '我们把授权、隐私、资料处理和合作筛选作为底层规则，而不是售后补充。',
      en: 'Authorization, privacy, record handling, and partner screening are built into our operating model, not added later as afterthoughts.',
    },
    description: {
      zh: '参考国际医疗机构对患者隐私、知情沟通与内容责任的公开政策，我们为自身服务范围设定了更清晰的边界。',
      en: 'Drawing from public privacy and responsibility frameworks used by major medical institutions, we define our service scope with clear boundaries and accountability.',
    },
    highlights: [
      {
        title: { zh: '患者授权优先', en: 'Patient authorization first' },
        description: {
          zh: '所有资料协调、转交与多方沟通，均以前置授权为基础。',
          en: 'All record coordination, sharing, and third-party communication are based on prior patient authorization.',
        },
      },
      {
        title: { zh: '最小必要原则', en: 'Minimum necessary handling' },
        description: {
          zh: '只处理完成服务所需的最少信息，并控制访问范围。',
          en: 'We handle only the minimum information necessary to provide the requested support and limit access accordingly.',
        },
      },
      {
        title: { zh: '明确非医疗角色', en: 'A defined non-clinical role' },
        description: {
          zh: '我们不替代医院、医生、护士或药师的临床职责。',
          en: 'We do not replace the clinical role of hospitals, physicians, nurses, or pharmacists.',
        },
      },
    ],
    sections: [
      {
        title: { zh: '资料与隐私保护', en: 'Records & Privacy Protection' },
        paragraphs: [
          {
            zh: '患者资料通常包含敏感健康信息，因此我们会将用途、接收方、保留周期和删除机制提前说明，并尽量减少不必要传输。',
            en: 'Because patient records often contain sensitive health information, we clarify usage, recipients, retention periods, and deletion approaches up front while reducing unnecessary transfers.',
          },
        ],
      },
      {
        title: { zh: '合作网络筛选', en: 'Partner Screening' },
        paragraphs: [
          {
            zh: '对于医院、检测机构、翻译与后勤协作伙伴，我们优先考虑流程成熟、沟通稳定、资料接口清晰的合作对象。',
            en: 'For hospitals, testing providers, translators, and logistics partners, we prioritize organizations with mature workflows, stable communication, and clear documentation interfaces.',
          },
        ],
        bullets: [
          { zh: '信息回复效率与流程清晰度', en: 'Responsiveness and workflow clarity' },
          { zh: '患者体验与跨文化沟通能力', en: 'Patient experience and cross-cultural communication ability' },
          { zh: '文档、预约与结果交付稳定性', en: 'Reliability in documentation, scheduling, and result delivery' },
        ],
      },
      {
        title: { zh: '内容与建议边界', en: 'Content & Advice Boundaries' },
        paragraphs: [
          {
            zh: '网站上的服务介绍和健康内容仅用于帮助患者理解流程与常识，不能替代面对面的医生判断。',
            en: 'Service descriptions and health information on this site are intended to help patients understand processes and general concepts, not to replace physician evaluation.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '所有临床决策、处方、诊断与治疗方案，均应以持证医疗机构和医生的意见为准。',
      en: 'All clinical decisions, prescriptions, diagnoses, and treatment plans should be made by licensed medical institutions and physicians.',
    },
    ctaLabel: {
      zh: '阅读隐私政策',
      en: 'Read Privacy Policy',
    },
    ctaHref: '/privacy-policy',
  },
  {
    slug: 'partners-network',
    href: '/about/partners-network',
    category: 'about',
    title: {
      zh: '我们的合作伙伴',
      en: 'Partners Network',
    },
    summary: {
      zh: '合作不是简单堆砌资源，而是围绕患者路径建立可协同、可响应、可追踪的服务网络。',
      en: 'Our partner model is not about listing resources; it is about building a responsive and trackable network around the patient journey.',
    },
    description: {
      zh: '这套网络通常包括医疗机构、影像与检测支持、翻译协同、在地接待与出行服务，以及长期随访所需的配套伙伴。',
      en: 'The network typically includes medical institutions, imaging and testing support, translation services, local hospitality and travel coordination, and partners needed for long-term follow-up.',
    },
    sections: [
      {
        title: { zh: '医疗合作伙伴', en: 'Medical Partners' },
        paragraphs: [
          {
            zh: '核心合作对象包括综合医院、专科医院、特色中心及多学科团队。我们更看重的是协作效率、沟通节奏和国际患者接待经验。',
            en: 'Core partners include general hospitals, specialist centers, and multidisciplinary teams. We especially value coordination efficiency, communication rhythm, and experience serving international patients.',
          },
        ],
      },
      {
        title: { zh: '支持型合作伙伴', en: 'Support Partners' },
        paragraphs: [
          {
            zh: '跨境就医还需要病历翻译、出行安排、住宿建议、家属支持和本地协同，因此支持型合作伙伴同样重要。',
            en: 'Cross-border care also depends on record translation, travel arrangements, accommodation guidance, family support, and local execution, making support partners just as important.',
          },
        ],
        bullets: [
          { zh: '语言与文件支持', en: 'Language and document support' },
          { zh: '交通、住宿与到院动线协助', en: 'Transport, lodging, and hospital access support' },
          { zh: '术后康复、复查与远程复诊配合', en: 'Recovery, recheck, and remote follow-up coordination' },
        ],
      },
      {
        title: { zh: '我们如何维护合作质量', en: 'How We Maintain Partner Quality' },
        paragraphs: [
          {
            zh: '合作关系会随着反馈不断调整。患者体验、资料交付质量、响应速度和异常处理方式，都会影响后续合作深度。',
            en: 'Partnership depth evolves with feedback. Patient experience, document quality, responsiveness, and issue handling all affect how relationships are maintained over time.',
          },
        ],
      },
    ],
    ctaLabel: {
      zh: '联系我们合作',
      en: 'Partner With Us',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'milestones',
    href: '/about/milestones',
    category: 'about',
    title: {
      zh: '成长大事记',
      en: 'Milestones',
    },
    summary: {
      zh: 'Sana 的成长并不是单一规模扩张，而是不断把患者路径拆得更清楚、服务做得更稳。',
      en: 'Sana’s growth is defined less by raw scale and more by making the patient journey clearer, steadier, and more reliable over time.',
    },
    description: {
      zh: '以下节点展示的是服务能力建设的重点方向，而不是简单罗列数字。',
      en: 'The milestones below highlight service capability building rather than listing numbers for their own sake.',
    },
    sections: [
      {
        title: { zh: '阶段一：形成基础服务模型', en: 'Stage One: Building the Core Model' },
        paragraphs: [
          {
            zh: '我们先从最常见的国际患者需求出发，建立咨询评估、病历整理、预约协同和来华前沟通的基础流程。',
            en: 'We started by mapping the most common needs of international patients and building baseline workflows for intake, record preparation, booking coordination, and pre-arrival planning.',
          },
        ],
      },
      {
        title: { zh: '阶段二：强化在华执行能力', en: 'Stage Two: Strengthening On-the-Ground Execution' },
        paragraphs: [
          {
            zh: '随着服务案例增多，我们逐步把现场陪同、门诊衔接、家属协作和出院交接做成标准动作。',
            en: 'As service volume grew, we turned escorting, appointment handoffs, family coordination, and discharge transitions into repeatable standards.',
          },
        ],
      },
      {
        title: { zh: '阶段三：完善长期衔接', en: 'Stage Three: Expanding Continuity' },
        paragraphs: [
          {
            zh: '后续重点放在复查提醒、跨国资料回传、远程沟通和术后生活管理，让服务延伸到患者回国之后。',
            en: 'We then expanded into follow-up reminders, cross-border record return, remote communication, and post-treatment lifestyle management so support continues after the patient returns home.',
          },
        ],
      },
    ],
    ctaLabel: {
      zh: '查看患者故事',
      en: 'Explore Patient Stories',
    },
    ctaHref: '/patient-stories',
  },
]

export const servicePages: ContentPage[] = [
  {
    slug: 'tcm-diagnosis',
    href: '/services/tcm-diagnosis',
    category: 'services',
    title: {
      zh: '中医诊疗',
      en: 'TCM Diagnosis',
    },
    summary: {
      zh: '围绕体质辨识、症状评估与阶段性调理建议，帮助国际患者更系统地理解中医诊疗路径。',
      en: 'We help international patients understand TCM care through constitution assessment, symptom review, and phase-based regulation planning.',
    },
    description: {
      zh: '中医诊疗并不等同于单一项目，而是一套结合问诊、舌脉观察、既往病史与生活方式管理的整体方案，常用于康复期支持、慢病调理与综合症状管理。',
      en: 'TCM care is not a single procedure, but a holistic pathway combining consultation, tongue and pulse observation, prior history, and lifestyle guidance, often used for recovery support, chronic-condition management, and symptom regulation.',
    },
    highlights: [
      {
        title: { zh: '整体辨证思路', en: 'Pattern-based evaluation' },
        description: {
          zh: '重点不只在单个症状，而在于结合睡眠、饮食、情绪、体力与既往治疗背景判断调理方向。',
          en: 'The focus is not just on isolated symptoms, but on evaluating sleep, diet, mood, stamina, and prior treatment background together.',
        },
      },
      {
        title: { zh: '适合跨国康复配合', en: 'Useful for cross-border recovery' },
        description: {
          zh: '对于需要长期恢复管理的患者，中医调理常可作为术后、慢病或功能恢复阶段的辅助支持。',
          en: 'For patients who need longer recovery management, TCM can often serve as supportive care during post-op, chronic, or functional recovery periods.',
        },
      },
      {
        title: { zh: '重视执行与随访', en: 'Built for continuity' },
        description: {
          zh: '我们更关注患者回国后是否还能理解和延续调理建议，而不仅是一次到院体验。',
          en: 'We focus on whether the patient can continue the plan after returning home, not only on the in-clinic visit itself.',
        },
      },
    ],
    sections: [
      {
        title: { zh: '适合哪些情况', en: 'Who It Is For' },
        paragraphs: [
          {
            zh: '这项服务适合希望从整体角度理解身体状态的人群，也适合处于术后恢复、疲劳失眠、消化功能紊乱、慢性疼痛或亚健康调理阶段的国际患者。',
            en: 'This service is suitable for people who want a more whole-body view of their condition, including international patients in post-op recovery, fatigue and sleep issues, digestive imbalance, chronic pain, or broader wellness regulation.',
          },
        ],
      },
      {
        title: { zh: '典型服务流程', en: 'Typical Service Flow' },
        paragraphs: [
          {
            zh: '我们会先整理患者目前的主要症状、既往治疗、正在使用的药物和来华停留安排，再协助匹配合适的中医门诊或特色科室，帮助准备重点问题与诊疗目标。',
            en: 'We begin by reviewing the patient’s current symptoms, prior treatment, medication use, and travel timeline, then help match a suitable TCM clinic or specialty and prepare key consultation goals.',
          },
        ],
        bullets: [
          { zh: '梳理主诉、体质线索与恢复阶段', en: 'Organize main symptoms, constitution clues, and recovery stage' },
          { zh: '协调门诊预约与就诊沟通重点', en: 'Coordinate the clinic booking and communication priorities' },
          { zh: '整理调理建议、复诊节点与居家执行要点', en: 'Package regulation advice, follow-up timing, and home-execution notes' },
        ],
      },
      {
        title: { zh: '患者能获得什么', en: 'What Patients Receive' },
        paragraphs: [
          {
            zh: '除了门诊本身，我们更重视把中医术语、调理节奏、饮食起居建议与后续复诊安排整理成患者和家属都能持续使用的版本。',
            en: 'Beyond the visit itself, we focus on turning TCM terminology, care pacing, lifestyle advice, and follow-up planning into a format patients and families can continue to use.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '中医诊疗方案、用药与适应证判断，应由持证医疗机构和医生结合患者实际情况决定。',
      en: 'TCM treatment plans, herbal prescriptions, and indication judgments must be determined by licensed institutions and clinicians based on the patient’s condition.',
    },
    ctaLabel: {
      zh: '咨询中医诊疗路径',
      en: 'Discuss TCM Care',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'health-checkups',
    href: '/services/health-checkups',
    category: 'services',
    title: {
      zh: '体检服务',
      en: 'Health Checkups',
    },
    summary: {
      zh: '从基础筛查到高阶专项体检，帮助国际客户在更短时间内完成结构化检查与结果整理。',
      en: 'From routine screening to advanced targeted packages, we help international clients complete structured assessments efficiently and receive well-organized results.',
    },
    description: {
      zh: '这类服务适合有年度健康管理需求、希望在来华期间完成集中体检，或需要进一步排查特定风险的人群。',
      en: 'This service is suited to clients seeking annual wellness management, concentrated checkups during a short stay in China, or targeted assessment of specific health concerns.',
    },
    highlights: [
      {
        title: { zh: '一站式安排', en: 'One coordinated schedule' },
        description: {
          zh: '尽量把抽血、影像、专科评估和总结说明放进同一计划中。',
          en: 'We aim to place labs, imaging, specialist reviews, and final explanation into one coordinated schedule.',
        },
      },
      {
        title: { zh: '结果整理清晰', en: 'Clear result packaging' },
        description: {
          zh: '帮助患者理解重点发现、待随访事项和后续建议。',
          en: 'We help patients understand key findings, follow-up items, and next-step recommendations.',
        },
      },
      {
        title: { zh: '适配国际行程', en: 'Built for international travel' },
        description: {
          zh: '结合航班、住宿与停留天数设计更现实的检查顺序。',
          en: 'Checkup pacing is planned around flights, accommodation, and the realities of a short international stay.',
        },
      },
    ],
    sections: [
      {
        title: { zh: '适合哪些人', en: 'Who It Is For' },
        paragraphs: [
          {
            zh: '适合希望做年度体检的个人客户、需要术前或赴任前健康筛查的人群，以及希望针对心脑血管、肿瘤风险、代谢问题做专项排查的客户。',
            en: 'This service is suitable for annual checkups, pre-procedure or pre-assignment health screening, and clients seeking focused assessment of cardiovascular, cancer-related, or metabolic risks.',
          },
        ],
      },
      {
        title: { zh: '典型服务流程', en: 'Typical Service Flow' },
        paragraphs: [
          {
            zh: '我们会先了解年龄、既往史、家族史、近期症状和体检目标，再推荐基础套餐或专项项目组合。',
            en: 'We begin by understanding age, history, family history, recent symptoms, and screening goals before recommending a base package or a targeted combination of tests.',
          },
        ],
        bullets: [
          { zh: '行前准备与禁食提醒', en: 'Pre-visit preparation and fasting reminders' },
          { zh: '到院当天流程协同', en: 'On-site coordination on the examination day' },
          { zh: '报告汇总、翻译与后续建议整理', en: 'Report compilation, translation, and next-step summary' },
        ],
      },
      {
        title: { zh: '交付内容', en: 'What You Receive' },
        paragraphs: [
          {
            zh: '除原始报告外，我们更重视把复杂结果转换成患者能看懂、能带回去继续使用的整理版本。',
            en: 'Beyond the original reports, we focus on packaging complex findings into a format patients can understand and continue using after they return home.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '体检结果需由医生结合临床情况解读；筛查并不等同于最终诊断。',
      en: 'Checkup findings should be interpreted by physicians in clinical context; screening is not the same as a final diagnosis.',
    },
    ctaLabel: {
      zh: '咨询体检方案',
      en: 'Ask About Checkup Plans',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'entry-assistance',
    href: '/services/entry-assistance',
    category: 'services',
    title: {
      zh: '入境协助',
      en: 'Entry Assistance',
    },
    summary: {
      zh: '围绕来华就医前的证件、时间节点、交通与落地衔接，帮助患者把跨国出行准备得更清楚、更稳妥。',
      en: 'We help patients prepare documentation, timing, transport, and arrival handoff for a smoother medical trip to China.',
    },
    description: {
      zh: '对于国际患者而言，来华就医的难点往往不在某一份材料本身，而在于签证、航班、接机、住宿、首诊时间与同行家属安排之间是否能顺畅衔接。',
      en: 'For international patients, the main challenge is usually not one document alone, but whether visa timing, flights, pickup, lodging, first appointments, and family arrangements connect smoothly.',
    },
    stats: [
      { value: 'Before', label: { zh: '行前准备阶段', en: 'Pre-arrival stage' } },
      { value: 'Arrival', label: { zh: '落地衔接安排', en: 'Arrival coordination' } },
      { value: 'Clear', label: { zh: '资料清单梳理', en: 'Clear documentation lists' } },
    ],
    sections: [
      {
        title: { zh: '服务重点', en: 'What This Covers' },
        paragraphs: [
          {
            zh: '这项服务主要帮助患者明确行前需要准备哪些文件、怎样安排来华时间、谁负责接应，以及抵达后如何尽快进入就医节奏。',
            en: 'This service helps patients clarify which documents to prepare, how to time the trip, who will receive them on arrival, and how to move into the care schedule quickly after landing.',
          },
        ],
      },
      {
        title: { zh: '典型协调内容', en: 'Typical Coordination Items' },
        paragraphs: [
          {
            zh: '我们会根据患者的医院预约、治疗阶段和同行情况，梳理签证支持材料、航班建议、接送安排、住宿落点与首日行程节奏。',
            en: 'Based on the patient’s booking status, treatment stage, and travel party, we help organize visa-support materials, flight timing suggestions, pickup planning, lodging location, and first-day pacing.',
          },
        ],
        bullets: [
          { zh: '行前资料与时间节点清单', en: 'Pre-arrival documentation and timing checklist' },
          { zh: '接机、住宿与到院路径协调', en: 'Pickup, accommodation, and hospital access coordination' },
          { zh: '首日到院或次日门诊的节奏建议', en: 'Pacing recommendations for first-day or next-day appointments' },
        ],
      },
      {
        title: { zh: '为什么这一步重要', en: 'Why It Matters' },
        paragraphs: [
          {
            zh: '如果行前安排混乱，患者在抵达后很容易把体力和注意力消耗在交通、入住和重复沟通上，影响首诊效率和整体体验。',
            en: 'If pre-arrival planning is unclear, patients often spend too much energy after landing on transport, check-in, and repeated coordination, which can affect first-visit efficiency and the overall experience.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '签证签发、入境审查与实际出行政策，以相关主管部门和承运机构的最新要求为准。',
      en: 'Visa issuance, entry review, and actual travel policies are subject to the latest requirements of the relevant authorities and carriers.',
    },
    ctaLabel: {
      zh: '获取来华准备建议',
      en: 'Plan Your Arrival',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'bilingual-escort',
    href: '/services/bilingual-escort',
    category: 'services',
    title: {
      zh: '双语陪诊',
      en: 'Bilingual Escort',
    },
    summary: {
      zh: '帮助国际患者跨越语言与流程障碍，更清楚地完成问诊、检查、取药、住院沟通与复诊衔接。',
      en: 'We help international patients navigate language and process barriers during consultations, testing, medication pickup, admission, and follow-ups.',
    },
    description: {
      zh: '双语陪诊的价值不只是翻译句子，更在于把医院流程、医生重点、患者问题与家属关注点组织成可以被双方真正理解的沟通。',
      en: 'The value of bilingual escorting is not only sentence-by-sentence translation, but organizing clinical information, patient concerns, and hospital processes into communication both sides can truly use.',
    },
    highlights: [
      {
        title: { zh: '沟通重点更清楚', en: 'Clearer communication priorities' },
        description: {
          zh: '帮助患者把核心症状、治疗史和最关心的问题表达得更集中，减少关键信息遗漏。',
          en: 'We help patients present symptoms, treatment history, and key questions more clearly so important details are less likely to be missed.',
        },
      },
      {
        title: { zh: '流程执行更顺畅', en: 'Smoother process execution' },
        description: {
          zh: '在挂号、检查、缴费、取药或住院环节中，及时解释下一步该做什么。',
          en: 'We help explain what happens next during registration, testing, payment, pharmacy, or admission steps.',
        },
      },
      {
        title: { zh: '适合家属同步理解', en: 'Better for family alignment' },
        description: {
          zh: '对跨国家庭而言，同步理解医生意见和注意事项，能显著降低后续沟通成本。',
          en: 'For cross-border families, understanding clinician guidance together can significantly reduce later confusion and communication cost.',
        },
      },
    ],
    sections: [
      {
        title: { zh: '适用场景', en: 'Common Use Cases' },
        paragraphs: [
          {
            zh: '适用于初次来华就医、病历和母语不同、需要多科室串联、或希望家属同步参与理解治疗信息的患者。',
            en: 'This service is useful for first-time visits to China, multilingual medical records, multi-department visits, or situations where family members also need to follow the discussion clearly.',
          },
        ],
      },
      {
        title: { zh: '服务内容', en: 'What the Service Includes' },
        paragraphs: [
          {
            zh: '我们会在诊前协助整理问题清单，在诊中支持关键沟通，在诊后帮助回顾重点结论、检查安排与注意事项。',
            en: 'We help organize question lists before the visit, support key communication during the appointment, and review conclusions, test plans, and instructions afterward.',
          },
        ],
        bullets: [
          { zh: '诊前问题与资料重点梳理', en: 'Pre-visit question and record preparation' },
          { zh: '门诊、检查、住院环节的双语沟通支持', en: 'Bilingual support across clinic, testing, and admission steps' },
          { zh: '诊后重点摘要与后续动作确认', en: 'Post-visit summary and next-step confirmation' },
        ],
      },
      {
        title: { zh: '患者能减少哪些压力', en: 'What Pressure It Reduces' },
        paragraphs: [
          {
            zh: '很多患者的焦虑并非来自病情本身，而是来自“没听懂、怕漏掉、回去说不清”。双语陪诊的作用，就是降低这些不必要的沟通损耗。',
            en: 'Many patients feel stress not only from the condition itself, but from not fully understanding, fearing they missed something, or being unable to explain it later. Bilingual escorting reduces that communication friction.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '双语陪诊用于沟通协助与流程支持，不替代医生诊断、医学解释或治疗决策。',
      en: 'Bilingual escorting is for communication and process support and does not replace physician diagnosis, medical interpretation, or treatment decisions.',
    },
    ctaLabel: {
      zh: '预约双语陪诊支持',
      en: 'Request Bilingual Support',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'basic-services',
    href: '/services/basic-services',
    category: 'services',
    title: {
      zh: '基础服务',
      en: 'Basic Services',
    },
    summary: {
      zh: '把国际患者在来华就医过程中最基础、最容易分散精力的协同事项整合到同一条服务线上。',
      en: 'We bundle the most essential coordination items in a medical trip into one clear support line for international patients.',
    },
    description: {
      zh: '并非每位患者都需要复杂方案，但几乎每位跨国就医者都需要有人协助处理预约确认、基础沟通、行程衔接、资料整理和现场执行这些底层事项。',
      en: 'Not every patient needs a highly complex plan, but almost every cross-border patient benefits from help with booking confirmation, basic communication, travel handoff, record organization, and on-site execution.',
    },
    stats: [
      { value: 'Core', label: { zh: '基础协同模块', en: 'Core coordination modules' } },
      { value: 'Simple', label: { zh: '更清楚的流程感', en: 'Simpler patient flow' } },
      { value: 'Steady', label: { zh: '更稳定的执行节奏', en: 'Steadier execution' } },
    ],
    sections: [
      {
        title: { zh: '这类服务解决什么问题', en: 'What This Solves' },
        paragraphs: [
          {
            zh: '很多看似琐碎的事项一旦分散处理，就会拖慢患者就医节奏，例如预约确认不清、检查顺序混乱、家属不同步、材料找不到或现场临时沟通困难。',
            en: 'Small coordination issues can quickly slow down care if handled separately, such as unclear bookings, disordered test sequences, unsynchronized family updates, missing documents, or on-site communication confusion.',
          },
        ],
      },
      {
        title: { zh: '典型包含内容', en: 'Typical Scope' },
        paragraphs: [
          {
            zh: '基础服务通常不强调单点项目，而是强调把患者旅程中的关键底层动作串起来，让整体体验更稳。',
            en: 'Basic services are less about one isolated task and more about connecting the core operational steps of the patient journey so the overall experience becomes steadier.',
          },
        ],
        bullets: [
          { zh: '基础预约与时间节点提醒', en: 'Baseline booking coordination and timing reminders' },
          { zh: '资料整理、现场衔接与沟通辅助', en: 'Record organization, on-site handoff, and communication assistance' },
          { zh: '家属同步、交通住宿与后续安排提示', en: 'Family alignment, transport/lodging guidance, and next-step reminders' },
        ],
      },
      {
        title: { zh: '适合哪些患者', en: 'Who Benefits Most' },
        paragraphs: [
          {
            zh: '适合希望以更省心方式完成就医流程、停留时间有限、首次来华、或家属需要远程同步了解进展的患者与家庭。',
            en: 'This is especially suitable for patients and families who want a lower-friction journey, have limited time in China, are visiting for the first time, or need remote family alignment.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '基础服务的具体范围会根据患者病情复杂度、停留时间和实际需求进行调整。',
      en: 'The exact scope of basic services varies based on case complexity, length of stay, and the patient’s actual needs.',
    },
    ctaLabel: {
      zh: '了解基础服务组合',
      en: 'See Basic Support Options',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'international-clinic',
    href: '/services/international-clinic',
    category: 'services',
    title: {
      zh: '国际门诊',
      en: 'International Clinic',
    },
    summary: {
      zh: '帮助国际患者更顺畅地完成门诊预约、就诊沟通、检查衔接和复诊安排。',
      en: 'We help international patients move smoothly through specialist consultations, testing, follow-ups, and multilingual communication.',
    },
    description: {
      zh: '对于初诊复杂、资料跨语言、停留时间有限的患者，国际门诊协调的价值往往不只体现在“挂到号”，更体现在诊前准备和诊后落实。',
      en: 'For patients with complex first visits, multilingual records, and limited time in-country, the value of clinic coordination lies not only in booking but in preparation before the visit and execution after it.',
    },
    stats: [
      { value: 'MDT', label: { zh: '多学科协同导向', en: 'MDT-oriented support' } },
      { value: 'Bilingual', label: { zh: '双语沟通支持', en: 'Bilingual support' } },
      { value: 'Follow-up', label: { zh: '诊后持续衔接', en: 'Post-visit continuity' } },
    ],
    sections: [
      {
        title: { zh: '诊前准备', en: 'Before the Consultation' },
        paragraphs: [
          {
            zh: '很多门诊效率低，并不是医生资源不足，而是患者在诊前没有把最关键的问题和资料准备好。',
            en: 'Many clinic bottlenecks come not from specialist availability, but from arriving without the most relevant questions and records properly prepared.',
          },
        ],
        bullets: [
          { zh: '影像、病理、用药史与既往方案整理', en: 'Imaging, pathology, medication history, and prior-treatment organization' },
          { zh: '主诉、目标和优先问题排序', en: 'Prioritization of symptoms, goals, and key questions' },
          { zh: '必要时提前准备第二诊疗意见问题', en: 'Preparation of second-opinion questions when needed' },
        ],
      },
      {
        title: { zh: '诊中协同', en: 'During the Visit' },
        paragraphs: [
          {
            zh: '国际患者常常需要在一次门诊中做很多判断，因此我们会帮助记录重点结论、检查建议和下一步动作。',
            en: 'International patients often need to make several decisions during one consultation, so we help capture key conclusions, recommended tests, and next actions.',
          },
        ],
      },
      {
        title: { zh: '诊后落实', en: 'After the Visit' },
        paragraphs: [
          {
            zh: '门诊结束后，真正影响体验的往往是检查怎么排、住院是否需要、复诊何时进行，以及回国后如何继续跟进。',
            en: 'After the consultation, the real experience is often shaped by how tests are scheduled, whether admission is needed, when follow-up should happen, and how care continues once the patient goes home.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '最终门诊安排和医生接诊时间以医院实际放号与院方通知为准。',
      en: 'Final appointment availability and physician schedules are subject to hospital release timing and official confirmation.',
    },
    ctaLabel: {
      zh: '发起门诊咨询',
      en: 'Request a Consultation',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'precision-medicine',
    href: '/services/precision-medicine',
    category: 'services',
    title: {
      zh: '精准医疗',
      en: 'Precision Medicine',
    },
    summary: {
      zh: '围绕病理、基因、影像和多学科会诊，帮助患者理解更个体化的诊疗选择。',
      en: 'We help patients understand more individualized care options through pathology, genomics, imaging, and multidisciplinary review.',
    },
    description: {
      zh: '精准医疗并不是一个单一项目，而是一套更依赖分层评估、数据解释和适应证判断的诊疗路径，常见于肿瘤、罕见病和复杂慢病场景。',
      en: 'Precision medicine is not a single product but a care pathway that relies on layered assessment, data interpretation, and indication matching, often used in oncology, rare disease, and complex chronic conditions.',
    },
    highlights: [
      {
        title: { zh: '先看是否适合', en: 'Suitability first' },
        description: {
          zh: '并非每位患者都适合做更多检测，关键在于检测结果是否会改变决策。',
          en: 'Not every patient needs more testing; the key question is whether additional data would meaningfully change decision-making.',
        },
      },
      {
        title: { zh: '重视多学科判断', en: 'Multidisciplinary interpretation' },
        description: {
          zh: '单个结果往往需要结合病理、影像、临床症状和治疗史综合判断。',
          en: 'Any single result is best interpreted alongside pathology, imaging, symptoms, and treatment history.',
        },
      },
      {
        title: { zh: '帮助患者读懂术语', en: 'Translate complexity into clarity' },
        description: {
          zh: '患者最常见的痛点不是拿不到结果，而是拿到后难以理解其真正意义。',
          en: 'The most common patient challenge is not obtaining the result, but understanding what it actually means.',
        },
      },
    ],
    sections: [
      {
        title: { zh: '常见应用场景', en: 'Common Use Cases' },
        paragraphs: [
          {
            zh: '在肿瘤治疗中，精准医疗常用于辅助判断靶向治疗、免疫治疗或进一步试验性路径是否值得考虑；在其他领域，也可用于帮助缩小诊断范围。',
            en: 'In oncology, precision medicine may help evaluate whether targeted therapy, immunotherapy, or additional investigational options are worth considering; in other fields, it can help narrow diagnostic direction.',
          },
        ],
      },
      {
        title: { zh: 'Sana 在其中做什么', en: 'How Sana Supports This Process' },
        paragraphs: [
          {
            zh: '我们重点帮助患者完成资料前置梳理、检测沟通准备、会诊安排衔接和结果说明整理，而不是替代医生解释检测结论。',
            en: 'Our role is to organize records, prepare communication around testing, coordinate consultations, and structure result summaries, not to replace clinician interpretation.',
          },
        ],
        bullets: [
          { zh: '整理病理、影像、既往治疗与时间线', en: 'Organizing pathology, imaging, prior treatment, and timeline history' },
          { zh: '梳理“做不做、为什么做、做了以后有什么变化”', en: 'Clarifying whether to test, why it matters, and what decisions it may affect' },
          { zh: '衔接复诊与后续方案讨论', en: 'Linking test outcomes to follow-up consultations and next-step planning' },
        ],
      },
      {
        title: { zh: '患者需要注意什么', en: 'What Patients Should Keep in Mind' },
        paragraphs: [
          {
            zh: '任何高级检测都不一定带来立即可执行的治疗路径。理解“结果有价值”和“结果一定改变方案”之间的差别，是精准医疗沟通中的关键。',
            en: 'Advanced testing does not always produce an immediately actionable treatment path. Understanding the difference between a useful result and a result that changes care is essential.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '任何检测、用药或治疗路径选择都应由持证医生结合病情判断。',
      en: 'All testing, medication, and treatment-path choices must be determined by licensed physicians in the context of the patient’s condition.',
    },
    ctaLabel: {
      zh: '咨询精准医疗路径',
      en: 'Discuss Precision Care Options',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'post-op-recovery',
    href: '/services/post-op-recovery',
    category: 'services',
    title: {
      zh: '术后康复',
      en: 'Post-op Recovery',
    },
    summary: {
      zh: '围绕手术后恢复阶段的复诊、功能康复、生活管理与跨国随访衔接，帮助患者把出院后的每一步走得更稳。',
      en: 'We support patients through follow-up, functional recovery, daily management, and cross-border continuity after surgery.',
    },
    description: {
      zh: '对国际患者而言，真正考验服务质量的往往不是手术当天，而是出院后的恢复节奏、复查安排、并发症警示理解、家属照护和回国后的持续衔接。',
      en: 'For international patients, service quality is often tested not on the surgery day itself, but in the recovery rhythm after discharge, the follow-up schedule, warning-sign awareness, family caregiving, and continuity once they return home.',
    },
    highlights: [
      {
        title: { zh: '恢复期节奏管理', en: 'Recovery pacing support' },
        description: {
          zh: '帮助患者理解休息、活动、复查和再次就医之间的优先级，而不是被零散信息牵着走。',
          en: 'We help patients understand the priorities among rest, activity, rechecks, and escalation needs instead of reacting to scattered information.',
        },
      },
      {
        title: { zh: '适合跨国家庭协同', en: 'Designed for cross-border families' },
        description: {
          zh: '尤其适用于患者出院后需要异地恢复、家属照护和远程复诊同时发生的情况。',
          en: 'This is especially useful when patients recover away from the hospital while caregiving and remote follow-up are happening in parallel.',
        },
      },
      {
        title: { zh: '关注回国后的连续性', en: 'Continuity after returning home' },
        description: {
          zh: '把阶段性报告、复查节点和恢复建议整理清楚，便于患者继续在本地执行。',
          en: 'We package phase summaries, recheck timing, and recovery advice so patients can continue locally after returning home.',
        },
      },
    ],
    sections: [
      {
        title: { zh: '出院后最常见的需求', en: 'Most Common Post-discharge Needs' },
        paragraphs: [
          {
            zh: '患者在术后阶段常常最关心什么时候复查、哪些症状需要警惕、药物和活动如何调整，以及何时适合返程或恢复日常安排。',
            en: 'After discharge, patients most commonly need clarity around recheck timing, warning signs, medication and activity adjustments, and when it is appropriate to travel home or resume daily routines.',
          },
        ],
      },
      {
        title: { zh: '我们如何协助这一阶段', en: 'How We Support This Stage' },
        paragraphs: [
          {
            zh: '我们帮助整理出院资料、复诊安排、康复节奏和家庭照护要点，并把需要继续跟进的信息整理为可执行的清单。',
            en: 'We help organize discharge materials, follow-up plans, recovery pacing, and family caregiving priorities into actionable next-step lists.',
          },
        ],
        bullets: [
          { zh: '出院摘要、复查节点与报告整理', en: 'Discharge summary, recheck timing, and report organization' },
          { zh: '康复期生活管理与照护重点说明', en: 'Recovery-stage lifestyle and caregiving guidance' },
          { zh: '回国后的远程随访准备', en: 'Preparation for remote follow-up after returning home' },
        ],
      },
      {
        title: { zh: '为什么恢复期值得单独规划', en: 'Why Recovery Needs Its Own Plan' },
        paragraphs: [
          {
            zh: '如果恢复期缺乏清晰安排，患者和家属容易把正常恢复反应、需要警惕的变化和短期生活限制混在一起，增加焦虑和执行偏差。',
            en: 'Without a clear recovery plan, patients and families often mix normal recovery changes, warning signs, and temporary restrictions together, increasing anxiety and execution errors.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '术后并发症判断、用药调整和复查决策，应始终以主诊医生和医院指导为准。',
      en: 'Assessment of post-op complications, medication adjustments, and follow-up decisions must always follow the treating physician and hospital guidance.',
    },
    ctaLabel: {
      zh: '咨询术后康复支持',
      en: 'Plan Post-op Recovery',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'medical-tourism',
    href: '/services/medical-tourism',
    category: 'services',
    title: {
      zh: '医疗旅游',
      en: 'Medical Tourism',
    },
    summary: {
      zh: '在以医疗安排为主线的前提下，协助国际患者规划更稳妥的停留、休息与城市体验节奏。',
      en: 'We help international patients plan lodging, recovery pacing, and light city experiences with the medical schedule kept as the main priority.',
    },
    description: {
      zh: '成熟的医疗旅游安排并不是把治疗和观光简单叠加，而是在确保就医效率、体力负荷和恢复安全的前提下，为患者及家属设计更合适的停留方式。',
      en: 'Mature medical tourism planning does not simply stack treatment and sightseeing together. It is about designing a better stay for patients and families while protecting care efficiency, energy level, and recovery safety.',
    },
    stats: [
      { value: 'Care First', label: { zh: '医疗主线优先', en: 'Medical schedule first' } },
      { value: 'Light', label: { zh: '低强度行程建议', en: 'Low-intensity planning' } },
      { value: 'Flexible', label: { zh: '可取消与可调整', en: 'Flexible adjustments' } },
    ],
    sections: [
      {
        title: { zh: '适合什么样的安排', en: 'What Kind of Planning Works' },
        paragraphs: [
          {
            zh: '更适合把医疗旅游理解为“医疗主线下的恢复型停留”，例如在检查间隙安排低强度休息、在康复稳定期进行轻量城市体验，或为陪同家属安排独立活动。',
            en: 'It is more useful to think of medical tourism as recovery-oriented staying around a medical itinerary, such as low-intensity rest between tests, light city experiences during stable recovery periods, or separate activities for accompanying family members.',
          },
        ],
      },
      {
        title: { zh: '我们如何协助规划', en: 'How We Help Plan It' },
        paragraphs: [
          {
            zh: '我们会结合医院地点、复查节奏、交通半径、体力状态和家庭需求，建议更现实的住宿落点、出行方式和可调整行程。',
            en: 'We help evaluate hospital location, follow-up rhythm, transport radius, energy level, and family needs to suggest more realistic lodging, mobility, and flexible itineraries.',
          },
        ],
        bullets: [
          { zh: '围绕医院与复查安排停留半径', en: 'Plan the stay radius around hospitals and follow-ups' },
          { zh: '优先低强度、可随时取消的活动', en: 'Prioritize low-intensity activities that can be cancelled anytime' },
          { zh: '兼顾患者恢复与家属陪同行程', en: 'Balance patient recovery with accompanying family needs' },
        ],
      },
      {
        title: { zh: '哪些情况不建议额外安排行程', en: 'When Extra Itineraries Should Be Limited' },
        paragraphs: [
          {
            zh: '如果患者处于术前、住院待定、治疗反应明显或关键结果尚未明确的阶段，额外出行通常会增加不确定性与疲劳负担，应以医疗安排为先。',
            en: 'If the patient is pre-op, awaiting admission, experiencing significant treatment effects, or still waiting for key results, extra outings usually add fatigue and uncertainty and should give way to medical priorities.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '医疗旅游相关安排应始终服从医院预约、治疗计划、患者体力状态和医生建议。',
      en: 'Any medical tourism arrangement should remain secondary to hospital bookings, treatment plans, patient energy level, and physician advice.',
    },
    ctaLabel: {
      zh: '规划来华停留安排',
      en: 'Plan a Care Journey',
    },
    ctaHref: '/#contact',
  },
]

export const insightPages: ContentPage[] = [
  {
    slug: 'patient-life',
    href: '/insights/patient-life',
    category: 'insights',
    title: {
      zh: '患者生活',
      en: 'Patient Life',
    },
    summary: {
      zh: '跨境就医不只是看病，患者在华期间的饮食、出行、睡眠、家属陪伴和信息节奏，同样会影响恢复体验。',
      en: 'Cross-border care is not only about appointments; daily routines in China, including food, transport, sleep, family support, and information pacing, also shape recovery.',
    },
    description: {
      zh: '这篇页面整理的是患者在来华期间最常见的生活层面问题，帮助第一次来中国就医的人更快进入状态。',
      en: 'This page focuses on the everyday practical issues patients often face during treatment in China, especially for those visiting for the first time.',
    },
    sections: [
      {
        title: { zh: '住与行：把医院半径想清楚', en: 'Where to Stay and How to Move Around' },
        paragraphs: [
          {
            zh: '住得离医院太远，会显著增加早晨检查、复诊和临时加号的压力。对需要连续到院的患者来说，住宿位置往往比房间本身更重要。',
            en: 'Staying far from the hospital can add significant stress to early tests, repeat visits, and last-minute scheduling changes. For patients with repeated appointments, location often matters more than the room itself.',
          },
        ],
        bullets: [
          { zh: '优先考虑到院时间稳定而非单纯低价', en: 'Prioritize stable travel time over lowest price alone' },
          { zh: '提前确认医院主院区、分院区和检查地点', en: 'Confirm the main campus, branch campus, and test locations in advance' },
          { zh: '为陪同家属预留可休息和沟通的空间', en: 'Plan enough rest and communication space for accompanying family members' },
        ],
      },
      {
        title: { zh: '吃与休息：治疗节奏比“打卡攻略”更重要', en: 'Food and Rest: Care Rhythm Matters More Than Travel Checklists' },
        paragraphs: [
          {
            zh: '患者在治疗期间常常容易被信息和行程填满，但充足睡眠、稳定补水、遵医嘱饮食和不过度移动，更能帮助身体恢复。',
            en: 'Treatment periods can quickly become overloaded with logistics and information. In most cases, better sleep, hydration, clinician-approved meals, and less unnecessary movement support recovery more effectively.',
          },
        ],
      },
      {
        title: { zh: '情绪与家属：把沟通频率约定好', en: 'Emotions and Family: Agree on Communication Rhythm' },
        paragraphs: [
          {
            zh: '不少家庭在跨境就医时会因为消息过多或过少而产生焦虑。提前约定每天汇报时间、重点事项和谁负责对外沟通，会让整个过程更平稳。',
            en: 'Families often become anxious when updates are either too frequent or too sparse. Setting expectations in advance around update timing, key topics, and who communicates externally can make the experience much smoother.',
          },
        ],
      },
    ],
    ctaLabel: {
      zh: '获取来华准备建议',
      en: 'Get Travel Preparation Support',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'medical-tourism',
    href: '/insights/medical-tourism',
    category: 'insights',
    title: {
      zh: '医疗+旅游',
      en: 'Medical Tourism',
    },
    summary: {
      zh: '“医疗+旅游”不应被理解成轻松旅行，而更适合被看作医疗主线下的恢复型停留与城市体验安排。',
      en: 'Medical tourism is best understood not as casual travel, but as recovery-oriented city planning built around a medical itinerary.',
    },
    description: {
      zh: '真正成熟的医疗旅游安排，重点在于把医疗节奏放在第一位，再考虑休息、文化体验和陪同家属的活动选择。',
      en: 'A mature medical tourism plan puts the medical schedule first, then carefully layers in rest, cultural experiences, and family-friendly options.',
    },
    sections: [
      {
        title: { zh: '什么时候适合加入城市体验', en: 'When City Experiences Make Sense' },
        paragraphs: [
          {
            zh: '适合加入轻量体验的阶段，通常是检查间隙、恢复稳定后的短时外出，或陪同家属在患者休息期间的独立活动。',
            en: 'The most appropriate moments for light city experiences are usually between tests, after recovery becomes stable, or as independent activities for family members while the patient rests.',
          },
        ],
      },
      {
        title: { zh: '哪些情况不建议安排额外行程', en: 'When Extra Itineraries Should Be Avoided' },
        paragraphs: [
          {
            zh: '如果患者处在术前、治疗反应明显、住院待定或检查结果尚不明确阶段，额外出行往往会增加疲劳和不确定性。',
            en: 'If the patient is pre-operative, experiencing significant treatment effects, waiting for admission, or still awaiting important results, extra outings often add fatigue and uncertainty.',
          },
        ],
      },
      {
        title: { zh: '更稳妥的安排原则', en: 'Safer Planning Principles' },
        paragraphs: [
          {
            zh: '与其追求“景点数量”，不如优先考虑就近、低强度、可随时取消的安排。这也是很多国际医疗服务机构在面对外地患者时强调的思路。',
            en: 'Instead of chasing a long sightseeing list, it is usually better to prioritize nearby, low-intensity activities that can be cancelled at any time. That is also a common principle in international patient support practice.',
          },
        ],
        bullets: [
          { zh: '不与门诊、治疗和复查冲突', en: 'Do not conflict with consultations, treatment, or follow-ups' },
          { zh: '控制单日步行与通勤强度', en: 'Limit daily walking and commuting intensity' },
          { zh: '确保有安静、可休息的回撤空间', en: 'Make sure there is a calm fallback environment for rest' },
        ],
      },
    ],
    ctaLabel: {
      zh: '规划来华行程',
      en: 'Plan a China Care Journey',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'medical-tips',
    href: '/insights/medical-tips',
    category: 'insights',
    title: {
      zh: '医疗小知识',
      en: 'Medical Tips',
    },
    summary: {
      zh: '在正式就医前掌握几条关键原则，往往能让患者少走很多弯路。',
      en: 'Learning a few core principles before treatment begins can save patients significant time, cost, and stress.',
    },
    description: {
      zh: '以下内容整理了跨境就医中最容易被忽视、但又会直接影响沟通效率和决策质量的细节。',
      en: 'The points below focus on the frequently overlooked details that directly affect communication quality and decision-making in cross-border care.',
    },
    sections: [
      {
        title: { zh: '先准备问题，再准备行李', en: 'Prepare Questions Before You Pack' },
        paragraphs: [
          {
            zh: '很多患者带着完整行李来到医院，却没有带着完整问题进入诊室。事先写下想确认的诊断、方案替代项、风险和时间线，比临场回忆更有效。',
            en: 'Many patients arrive fully packed for travel but not fully prepared for the consultation itself. Writing down your questions about diagnosis, alternatives, risks, and timing is far more effective than trying to recall them in the room.',
          },
        ],
      },
      {
        title: { zh: '病历不是越多越好，而是越清楚越好', en: 'More Records Is Not Always Better; Clearer Records Are' },
        paragraphs: [
          {
            zh: '把时间线、关键检查、主要治疗节点和当前用药整理清楚，往往比提交大量零散截图更有帮助。',
            en: 'A clean timeline of major tests, treatment milestones, and current medications is usually more useful than sending a large volume of disconnected screenshots.',
          },
        ],
      },
      {
        title: { zh: '第二意见的目标要具体', en: 'Be Specific About What You Want From a Second Opinion' },
        paragraphs: [
          {
            zh: '好的第二意见不是单纯重复原方案，而是帮助你确认诊断是否完整、当前路径是否合理、还有没有其他值得讨论的选项。',
            en: 'A strong second opinion does more than repeat an existing plan. It helps clarify whether the diagnosis is complete, whether the current path is reasonable, and whether additional options deserve discussion.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '本页内容仅作一般信息参考，不能替代医生面对面的专业建议。',
      en: 'This page provides general information only and does not replace direct professional advice from a physician.',
    },
    ctaLabel: {
      zh: '发起第二意见咨询',
      en: 'Request a Second Opinion',
    },
    ctaHref: '/second-opinion',
  },
  {
    slug: 'tcm-diet',
    href: '/insights/tcm-diet',
    category: 'insights',
    title: {
      zh: '中医食疗',
      en: 'TCM Diet',
    },
    summary: {
      zh: '中医食疗更适合被理解为恢复期的辅助性日常管理，而不是替代规范治疗的捷径。',
      en: 'TCM diet is best understood as supportive daily management during recovery, not as a shortcut that replaces standard treatment.',
    },
    description: {
      zh: '很多国际患者对中医食疗感兴趣，但真正重要的，是分清“适合日常调理的内容”和“必须先问医生的禁忌”。',
      en: 'Many international patients are curious about TCM diet. The most important step is separating general wellness ideas from items that require clinician approval first.',
    },
    sections: [
      {
        title: { zh: '食疗的正确定位', en: 'The Right Role of Dietary Therapy' },
        paragraphs: [
          {
            zh: '食疗通常用于帮助患者在恢复过程中调整饮食结构、进食节奏和体感状态，特别是在睡眠、食欲和体力波动阶段。',
            en: 'Dietary therapy is commonly used to help patients adjust food structure, meal rhythm, and daily comfort during recovery, especially when sleep, appetite, and energy fluctuate.',
          },
        ],
      },
      {
        title: { zh: '哪些人更需要谨慎', en: 'Who Should Be More Careful' },
        paragraphs: [
          {
            zh: '肿瘤治疗期、器官移植后、正在使用抗凝药或存在复杂代谢疾病的患者，在尝试任何补养类食疗前都应先咨询医生。',
            en: 'Patients undergoing cancer treatment, recovering from transplant, taking anticoagulants, or managing complex metabolic disease should consult clinicians before trying tonic-style dietary approaches.',
          },
        ],
      },
      {
        title: { zh: '更实用的执行原则', en: 'Practical Principles' },
        paragraphs: [
          {
            zh: '比起追求“名贵食材”，恢复期更需要的是规律、清淡、适量和与当前治疗相匹配的饮食节奏。',
            en: 'During recovery, regularity, moderation, lighter meals, and compatibility with current treatment are usually more important than expensive ingredients.',
          },
        ],
        bullets: [
          { zh: '确认是否与当前用药或治疗冲突', en: 'Check for conflicts with current medication or treatment' },
          { zh: '少量、循序渐进，不做突然改变', en: 'Start small and avoid abrupt dietary changes' },
          { zh: '把体感变化及时反馈给医生或营养师', en: 'Report changes in how you feel to your doctor or nutrition professional' },
        ],
      },
    ],
    disclaimer: {
      zh: '中医食疗不替代规范诊疗；如有基础病、术后恢复或正在用药，请先咨询医生。',
      en: 'TCM dietary approaches do not replace standard medical care; if you have chronic disease, are post-operative, or take medication, consult your clinician first.',
    },
    ctaLabel: {
      zh: '咨询康复支持',
      en: 'Ask About Recovery Support',
    },
    ctaHref: '/#contact',
  },
]

export const legalPages: ContentPage[] = [
  {
    slug: 'privacy-policy',
    href: '/privacy-policy',
    category: 'legal',
    title: {
      zh: '隐私政策',
      en: 'Privacy Policy',
    },
    summary: {
      zh: '我们尊重并保护您的个人信息与健康资料，所有处理均以最小必要和明确授权为原则。',
      en: 'We respect and protect your personal and health information, handling it under principles of minimum necessity and clear authorization.',
    },
    description: {
      zh: '本政策说明 Sana 在提供咨询、协调和网站服务时如何收集、使用、存储和共享信息。该框架参考了国际医疗机构与患者服务平台普遍采用的隐私治理做法。',
      en: 'This policy explains how Sana collects, uses, stores, and shares information while providing consultation, coordination, and website services. The framework is informed by privacy practices commonly used by major medical institutions and patient-service platforms.',
    },
    sections: [
      {
        title: { zh: '我们可能收集的信息', en: 'Information We May Collect' },
        paragraphs: [
          {
            zh: '根据服务类型不同，我们可能收集您的姓名、联系方式、国籍、护照或旅行信息、病历资料、影像报告、既往治疗信息、付款沟通信息以及网站使用记录。',
            en: 'Depending on the service, we may collect your name, contact details, nationality, passport or travel information, medical records, imaging reports, treatment history, payment-related communication, and website usage information.',
          },
        ],
      },
      {
        title: { zh: '我们如何使用这些信息', en: 'How We Use Information' },
        paragraphs: [
          {
            zh: '这些信息主要用于回应咨询、协调预约、准备资料、支持沟通、改进服务流程、保障网站运行，以及在您授权时与相关合作机构完成服务衔接。',
            en: 'We use this information to respond to inquiries, coordinate appointments, prepare records, support communication, improve service operations, maintain the website, and, when authorized by you, connect with relevant partner organizations.',
          },
        ],
        bullets: [
          { zh: '不会把敏感健康信息用于与服务无关的营销', en: 'We do not use sensitive health information for unrelated marketing' },
          { zh: '只有在必要时才会共享给参与服务的相关方', en: 'Information is shared only when necessary with parties involved in delivering the requested service' },
          { zh: '在法律要求或安全需要下可能进行必要披露', en: 'Necessary disclosure may occur when legally required or needed for safety reasons' },
        ],
      },
      {
        title: { zh: '存储、保留与安全措施', en: 'Storage, Retention, and Security' },
        paragraphs: [
          {
            zh: '我们采取合理的管理与技术措施保护信息安全，并根据服务需要、合同义务和适用法律要求保留资料。超出必要期限后，我们会删除、匿名化或停止继续使用相关信息。',
            en: 'We use reasonable administrative and technical safeguards to protect information security and retain records based on service needs, contractual obligations, and applicable legal requirements. When no longer necessary, records are deleted, anonymized, or removed from active use.',
          },
        ],
      },
      {
        title: { zh: '您的权利', en: 'Your Rights' },
        paragraphs: [
          {
            zh: '在适用法律允许的范围内，您可以请求访问、更正、更新、删除相关信息，或撤回部分授权。某些请求可能会影响我们继续提供服务的能力。',
            en: 'Where applicable law allows, you may request access to, correction of, update to, deletion of, or withdrawal of certain permissions related to your information. Some requests may affect our ability to continue providing service.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '如您对隐私处理有疑问，请通过网站联系方式与我们沟通，我们会在合理时间内回复。',
      en: 'If you have privacy-related questions, please contact us through the channels listed on the site and we will respond within a reasonable timeframe.',
    },
    ctaLabel: {
      zh: '联系隐私支持',
      en: 'Contact Privacy Support',
    },
    ctaHref: '/#contact',
  },
  {
    slug: 'terms-of-service',
    href: '/terms-of-service',
    category: 'legal',
    title: {
      zh: '服务条款',
      en: 'Terms of Service',
    },
    summary: {
      zh: '使用 Sana 网站与相关协调服务，即表示您理解并同意遵守以下基本服务规则。',
      en: 'By using the Sana website and related coordination services, you acknowledge and agree to the basic service rules below.',
    },
    description: {
      zh: '这些条款用于说明 Sana 的服务边界、用户责任、信息使用方式和内容权利。它们并不构成医疗建议或治疗协议。',
      en: 'These terms describe Sana’s service boundaries, user responsibilities, information usage, and content rights. They do not constitute medical advice or a treatment agreement.',
    },
    sections: [
      {
        title: { zh: '服务性质', en: 'Nature of the Service' },
        paragraphs: [
          {
            zh: 'Sana 主要提供信息整理、沟通协调、患者导航、就医流程支持与非临床服务安排。我们不是医疗机构，也不直接提供诊断、处方、治疗或护理服务。',
            en: 'Sana primarily provides information organization, communication coordination, patient navigation, care-process support, and non-clinical service arrangements. We are not a medical institution and do not directly provide diagnosis, prescriptions, treatment, or nursing care.',
          },
        ],
      },
      {
        title: { zh: '用户责任', en: 'User Responsibilities' },
        paragraphs: [
          {
            zh: '您应提供真实、完整、及时的信息，并在重要医疗决策上直接与持证医生或医院确认。若您提供的信息存在重大遗漏，可能影响服务准确性与安排时效。',
            en: 'You are responsible for providing truthful, complete, and timely information, and for confirming major medical decisions directly with licensed physicians or hospitals. Material omissions may affect service accuracy and scheduling.',
          },
        ],
      },
      {
        title: { zh: '预约、费用与变更', en: 'Bookings, Fees, and Changes' },
        paragraphs: [
          {
            zh: '不同医院、检查项目和支持服务的可预约性、费用结构与取消规则可能不同。我们会尽量在确认前向您说明关键条件，但最终仍以实际机构要求为准。',
            en: 'Availability, fee structures, and cancellation rules vary across hospitals, tests, and support services. We aim to explain the key conditions before confirmation, but final terms remain subject to the actual institution involved.',
          },
        ],
      },
      {
        title: { zh: '内容与知识产权', en: 'Content and Intellectual Property' },
        paragraphs: [
          {
            zh: '网站上的文字、结构、视觉内容与品牌标识归 Sana 或相关权利方所有。未经授权，不得擅自复制、改编或用于商业传播。',
            en: 'Text, structure, visual materials, and brand assets on this site belong to Sana or the relevant rights holders. They may not be copied, adapted, or used for commercial distribution without authorization.',
          },
        ],
      },
    ],
    disclaimer: {
      zh: '如您不同意这些条款，请不要继续使用相关网站功能或协调服务。',
      en: 'If you do not agree to these terms, please do not continue using the related website functions or coordination services.',
    },
    ctaLabel: {
      zh: '查看法律声明',
      en: 'View Legal Notice',
    },
    ctaHref: '/legal-notice',
  },
  {
    slug: 'legal-notice',
    href: '/legal-notice',
    category: 'legal',
    title: {
      zh: '法律声明',
      en: 'Legal Notice',
    },
    summary: {
      zh: '本网站提供的是一般信息与服务介绍，不保证适用于所有个人情况，也不构成正式法律或医疗意见。',
      en: 'This website provides general information and service descriptions. It is not guaranteed to fit every individual circumstance and does not constitute formal legal or medical advice.',
    },
    description: {
      zh: '为避免误解，我们在此说明网站内容用途、外部链接、责任边界以及用户应如何理解本站信息。',
      en: 'To avoid misunderstanding, this notice clarifies how website content should be used, how external links are handled, and where responsibility boundaries apply.',
    },
    sections: [
      {
        title: { zh: '信息用途', en: 'Use of Information' },
        paragraphs: [
          {
            zh: '本网站内容主要用于帮助用户了解 Sana 的服务范围、常见流程和一般健康管理知识，不应替代个体化的医生建议、正式法律意见或财务意见。',
            en: 'Site content is intended to help users understand Sana’s service scope, common care pathways, and general health-management concepts. It should not replace individualized physician advice, formal legal advice, or financial advice.',
          },
        ],
      },
      {
        title: { zh: '外部链接', en: 'External Links' },
        paragraphs: [
          {
            zh: '为了帮助用户获取更多背景信息，网站可能包含外部机构或第三方网站链接。我们不对外部网站的内容准确性、更新状态或隐私做法承担控制责任。',
            en: 'To help users access broader context, the site may include links to external organizations or third-party websites. We do not control, and are not responsible for, the accuracy, currentness, or privacy practices of those external sites.',
          },
        ],
      },
      {
        title: { zh: '责任边界', en: 'Liability Boundaries' },
        paragraphs: [
          {
            zh: '我们会尽合理努力保持内容更新与表达准确，但不能保证所有信息在任何时间都完全无误，也不能保证服务结果一定符合用户预期。',
            en: 'We make reasonable efforts to keep content updated and accurate, but cannot guarantee that all information is error-free at all times or that service outcomes will always match user expectations.',
          },
        ],
      },
      {
        title: { zh: '适用与解释', en: 'Application and Interpretation' },
        paragraphs: [
          {
            zh: '如果本网站的中文与英文内容在理解上存在差异，应结合具体情境和实际服务沟通结果进行解释；必要时，以最终书面确认内容为准。',
            en: 'If the Chinese and English versions of this website differ in interpretation, they should be read together in context and alongside actual service communications; where needed, final written confirmations govern.',
          },
        ],
      },
    ],
    ctaLabel: {
      zh: '返回首页咨询',
      en: 'Return to Home',
    },
    ctaHref: '/#contact',
  },
]

export const footerLinkGroups: Record<'about' | 'services' | 'news' | 'legal', FooterGroup> = {
  about: {
    title: { zh: '关于我们', en: 'About Us' },
    links: aboutPages.map((page) => ({ href: page.href, label: page.title })),
  },
  services: {
    title: { zh: '医疗服务', en: 'Medical Services' },
    links: [
      {
        href: '/services/health-checkups',
        label: { zh: '浣撴鏈嶅姟', en: 'Health Checkups' },
      },
      {
        href: '/services/international-clinic',
        label: { zh: '鍥介檯闂ㄨ瘖', en: 'International Clinic' },
      },
      {
        href: '/services/precision-medicine',
        label: { zh: '绮惧噯鍖荤枟', en: 'Precision Medicine' },
      },
    ],
  },
  news: {
    title: { zh: '就医动态', en: 'Medical News' },
    links: [
      {
        href: '/patient-stories',
        label: { zh: '患者故事', en: 'Patient Stories' },
      },
      ...insightPages.map((page) => ({ href: page.href, label: page.title })),
    ],
  },
  legal: {
    title: { zh: '法律支持', en: 'Legal' },
    links: legalPages.map((page) => ({ href: page.href, label: page.title })),
  },
}

export function getPageBySlug(
  collection: ContentPage[],
  slug: string,
) {
  return collection.find((page) => page.slug === slug)
}
