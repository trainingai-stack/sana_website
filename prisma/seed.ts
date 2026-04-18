import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '@prisma/client'

const adapter = new PrismaBetterSqlite3({ url: 'file:./prisma/dev.db' })
const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.navItem.deleteMany()
  await prisma.medicalService.deleteMany()
  await prisma.consultant.deleteMany()
  await prisma.patientStory.deleteMany()
  await prisma.processStep.deleteMany()
  await prisma.siteConfig.deleteMany()

  await prisma.navItem.createMany({
    data: [
      { labelZh: '首页', labelEn: 'Home', href: '/', order: 1 },
      { labelZh: '医疗服务', labelEn: 'Treatments', href: '#services', order: 2, hasDropdown: true },
      { labelZh: '服务流程', labelEn: 'Process', href: '/service-process', order: 3 },
      { labelZh: '合作医院', labelEn: 'Hospitals', href: '/hospitals', order: 4 },
      { labelZh: '先进治疗', labelEn: 'Advanced Tech', href: '/advanced-technologies', order: 5 },
      { labelZh: '第二诊疗', labelEn: 'Second Opinion', href: '/second-opinion', order: 6 },
      { labelZh: '费用透明', labelEn: 'Pricing', href: '/pricing', order: 7 },
      { labelZh: '患者见证', labelEn: 'Patient Stories', href: '/patient-stories', order: 8 },
      { labelZh: '常见问题', labelEn: 'FAQs', href: '/faqs', order: 9 },
      { labelZh: '免费咨询', labelEn: 'Free Consultation', href: '#contact', order: 10 },
      { labelZh: '关于我们', labelEn: 'About Us', href: '#about', order: 11 },
    ],
  })

  await prisma.medicalService.createMany({
    data: [
      {
        slug: 'health-checkup',
        titleZh: '高端体检',
        titleEn: 'Executive Health Checkup',
        descZh: '全面深度体检，涵盖 PET-CT 全身扫描、3.0T MRI、肿瘤标志物筛查等高端项目。零等待时间，48 小时内获取双语报告，国际保险直付。',
        descEn: 'Comprehensive executive health checkup including PET-CT full body scan, 3.0T MRI, tumor marker screening. Zero wait time, bilingual report within 48 hours, direct international insurance billing.',
        icon: 'HeartPulse',
        featuresZh: 'PET-CT 全身肿瘤筛查\n3.0T 磁共振成像\n200+ 项血液检测指标\n资深专家一对一报告解读',
        featuresEn: 'PET-CT full body cancer screening\n3.0T Magnetic Resonance Imaging\n200+ blood test indicators\nSenior expert one-on-one report interpretation',
        statsZh: '48 小时出报告',
        statsEn: '48h Report',
        order: 1,
      },
      {
        slug: 'precision-medicine',
        titleZh: '精准医疗',
        titleEn: 'Precision Medicine',
        descZh: '基于基因检测与大数据分析，提供个性化癌症治疗、慢性病管理。国际领先技术：CAR-T 细胞疗法、质子重离子治疗、达芬奇机器人手术。',
        descEn: 'Based on genetic testing and big data analysis, providing personalized cancer treatment and chronic disease management. Advanced technologies: CAR-T therapy, Proton/Heavy ion therapy, Da Vinci robotic surgery.',
        icon: 'Dna',
        featuresZh: 'CAR-T 细胞免疫疗法\n质子/重离子精准放疗\n达芬奇机器人微创手术\n基因测序与靶向治疗',
        featuresEn: 'CAR-T Cell Immunotherapy\nProton/Heavy Ion Precision Radiotherapy\nDa Vinci Robotic Minimally Invasive Surgery\nGene Sequencing and Targeted Therapy',
        statsZh: '90% 早期癌症治愈率',
        statsEn: '90% Early Cancer Cure Rate',
        order: 2,
      },
      {
        slug: 'international-clinic',
        titleZh: '国际门诊',
        titleEn: 'International Clinic',
        descZh: 'JCI 认证国际医疗中心，100+ 位国际医疗背景专家，支持 200+ 家国际保险公司直付。7×24 小时多语种服务，私密诊疗环境。',
        descEn: 'JCI-certified international medical center with 100+ internationally-trained experts, direct billing with 200+ international insurance companies. 24/7 multilingual service, private treatment environment.',
        icon: 'Stethoscope',
        featuresZh: 'JCI 国际质量认证\n500+ 张床位，35+ 临床科室\n7×24 小时急诊服务\n200+ 国际保险直付',
        featuresEn: 'JCI International Quality Certification\n500+ beds, 35+ clinical departments\n24/7 Emergency Service\n200+ International Insurance Direct Billing',
        statsZh: '200+ 保险公司',
        statsEn: '200+ Insurance',
        order: 3,
      },
      {
        slug: 'tcm-therapy',
        titleZh: '中医康复',
        titleEn: 'TCM Rehabilitation',
        descZh: '中西医结合治疗，针灸、推拿、中药调理配合现代康复技术。术后康复、慢性病管理、免疫力提升，85% 慢性疼痛缓解率。',
        descEn: 'Integrated Chinese and Western medicine, acupuncture, massage, herbal medicine combined with modern rehabilitation technology. Post-operative recovery, chronic disease management, immunity enhancement.',
        icon: 'Leaf',
        featuresZh: '针灸推拿非侵入治疗\n个性化中药调理方案\n术后康复与免疫支持\n85% 慢性疼痛缓解率',
        featuresEn: 'Acupuncture and Massage non-invasive treatment\nPersonalized herbal medicine plan\nPost-operative recovery and immune support\n85% chronic pain relief rate',
        statsZh: '85% 缓解率',
        statsEn: '85% Relief',
        order: 4,
      },
      {
        slug: 'second-opinion',
        titleZh: '远程第二诊疗',
        titleEn: 'Remote Second Opinion',
        descZh: '无需来华，72 小时内获得中国顶尖专家书面第二诊疗意见。上传病历资料，专家复核诊断，提供治疗方案建议，决策更安心。',
        descEn: 'Get written second opinion from top Chinese experts within 72 hours without traveling to China. Upload medical records, expert review diagnosis, provide treatment plan recommendations.',
        icon: 'FileSearch',
        featuresZh: '72 小时极速响应\n三甲医院专家复核\n书面诊疗方案与建议\n国际远程会诊服务',
        featuresEn: '72-hour rapid response\nTop-tier hospital expert review\nWritten treatment plan and recommendations\nInternational remote consultation service',
        statsZh: '72 小时出报告',
        statsEn: '72h Response',
        order: 5,
      },
      {
        slug: 'organ-transplant',
        titleZh: '器官移植',
        titleEn: 'Organ Transplant',
        descZh: '心脏、肝脏、肾脏、肺脏移植手术，国际领先成功率。完善器官分配系统，术后抗排斥治疗与长期随访管理。',
        descEn: 'Heart, liver, kidney, lung transplant surgery with international leading success rates. Complete organ allocation system, post-operative anti-rejection treatment and long-term follow-up.',
        icon: 'HeartPulse',
        featuresZh: '心/肝/肾/肺移植\n国际领先存活率\n术后抗排斥管理\n终身随访服务',
        featuresEn: 'Heart/Liver/Kidney/Lung Transplant\nInternational leading survival rate\nPost-operative anti-rejection management\nLifetime follow-up service',
        statsZh: '95% 一年存活率',
        statsEn: '95% 1-Year Survival',
        order: 6,
      },
      {
        slug: 'neurology',
        titleZh: '神经外科',
        titleEn: 'Neurosurgery',
        descZh: '脑肿瘤、脑血管病、功能神经外科疾病治疗。显微神经外科技术、立体定向放射治疗，最小创伤，最快恢复。',
        descEn: 'Brain tumor, cerebrovascular disease, functional neurosurgery treatment. Microsurgical techniques, stereotactic radiosurgery, minimal trauma, fastest recovery.',
        icon: 'Dna',
        featuresZh: '显微神经外科手术\n立体定向放射治疗\n脑深部电刺激 (DBS)\n神经介入治疗',
        featuresEn: 'Microsurgical Neurosurgery\nStereotactic Radiosurgery\nDeep Brain Stimulation (DBS)\nNeurointerventional Treatment',
        statsZh: '98% 手术成功率',
        statsEn: '98% Success Rate',
        order: 7,
      },
      {
        slug: 'cardiology',
        titleZh: '心血管中心',
        titleEn: 'Cardiovascular Center',
        descZh: '冠心病、心律失常、心脏瓣膜病诊疗。心脏支架、射频消融、TAVR 微创手术，心脏内外科一体化治疗。',
        descEn: 'Coronary artery disease, arrhythmia, heart valve disease treatment. Cardiac stenting, radiofrequency ablation, TAVR minimally invasive surgery.',
        icon: 'HeartPulse',
        featuresZh: '冠脉支架植入术\n射频消融治疗\nTAVR 微创瓣膜置换\n心脏移植手术',
        featuresEn: 'Coronary Stent Implantation\nRadiofrequency Ablation\nTAVR Minimally Invasive Valve Replacement\nHeart Transplant Surgery',
        statsZh: '99% 手术成功率',
        statsEn: '99% Success Rate',
        order: 8,
      },
    ],
  })

  await prisma.consultant.createMany({
    data: [
      { name: 'Alexom', titleZh: '英语顾问', titleEn: 'English Consultant', languages: 'English', order: 1, image: '/images/consultants/consultant-1.jpg' },
      { name: 'Alifa Janat', titleZh: '俄语顾问', titleEn: 'Russian Consultant', languages: 'Russian', order: 2, image: '/images/consultants/consultant-2.jpg' },
      { name: 'JM Taleb VAA', titleZh: '阿拉伯语顾问', titleEn: 'Arabic Consultant', languages: 'Arabic', order: 3, image: '/images/consultants/consultant-3.jpg' },
      { name: 'Sofia Martinez', titleZh: '西班牙语顾问', titleEn: 'Spanish Consultant', languages: 'Spanish', order: 4, image: '/images/consultants/consultant-4.jpg' },
    ],
  })

  await prisma.processStep.createMany({
    data: [
      {
        step: 1,
        titleZh: '免费评估',
        titleEn: 'Free Assessment',
        descZh: '提交既往病历、病情简述。免费病历审查、跨境就医适配性，规划专属诊疗路径。全程保密、零费用评估，24小时极速反馈。',
        descEn: 'Submit medical records and brief description. Free medical record review, cross-border medical suitability assessment. Confidential, zero-cost evaluation, 24-hour response.',
        icon: 'FileSearch',
      },
      {
        step: 2,
        titleZh: '精准匹配',
        titleEn: 'Precise Matching',
        descZh: '确认就医需求、诊疗方向。专属国际通道，三甲及国际认证医院、科室顶尖专家按需匹配、名医直达，免去繁琐筛选流程。',
        descEn: 'Confirm medical needs and treatment direction. Exclusive international channel, top-tier hospitals and experts matched on demand.',
        icon: 'Target',
      },
      {
        step: 3,
        titleZh: '远程问诊',
        titleEn: 'Remote Consultation',
        descZh: '上传诊断报告、影像资料。顶尖专家复核诊断，出具书面诊疗方案与权威报告。出行前敲定方案，72小时内邮箱直达，决策更安心。',
        descEn: 'Upload diagnostic reports and imaging. Top experts review diagnosis and provide written treatment plan. Plan finalized before travel, delivered within 72 hours.',
        icon: 'Video',
      },
      {
        step: 4,
        titleZh: '方案定制',
        titleEn: 'Plan Customization',
        descZh: '根据诊断结果和患者需求，定制个性化治疗方案和报价。透明费用明细，无隐藏收费。',
        descEn: 'Based on diagnosis and patient needs, customize personalized treatment plan and quotation. Transparent cost breakdown, no hidden fees.',
        icon: 'ClipboardList',
      },
      {
        step: 5,
        titleZh: '行程确认',
        titleEn: 'Itinerary Confirmation',
        descZh: '准备个人基础材料。代办S1/S2医疗签证、预约酒店、专属接机、交通协调。',
        descEn: 'Prepare personal documents. S1/S2 medical visa assistance, hotel booking, exclusive airport pickup, transportation coordination.',
        icon: 'Plane',
      },
      {
        step: 6,
        titleZh: '双语陪诊',
        titleEn: 'Bilingual Accompaniment',
        descZh: '到院检查、专家面诊。专业医学双语全程陪同，无障碍沟通、保障就医权益。告别语言壁垒，就诊全程无忧、高效顺畅。',
        descEn: 'Hospital check-up and expert consultation. Professional bilingual medical accompaniment throughout, barrier-free communication.',
        icon: 'Users',
      },
      {
        step: 7,
        titleZh: '诊疗康复',
        titleEn: 'Treatment & Recovery',
        descZh: '接受专项治疗、术后养护。西医精准治疗+中医康养结合，康复方案、住院陪护。中西结合康复快，副作用管控佳，恢复周期更短。',
        descEn: 'Receive specialized treatment and post-operative care. Western precision treatment + TCM recovery combination for faster healing.',
        icon: 'Activity',
      },
      {
        step: 8,
        titleZh: '回国随访',
        titleEn: 'Follow-up Care',
        descZh: '康复回国、远程复诊。线上复诊、病历翻译归档、本地医生对接、用药指导。康复不中断，长期健康守护，全程售后保障。',
        descEn: 'Return home with follow-up care. Online follow-up, medical record translation, local doctor coordination, medication guidance.',
        icon: 'Home',
      },
    ],
  })

  await prisma.patientStory.createMany({
    data: [
      {
        name: 'Joshua M.',
        country: '英国',
        treatmentZh: '多发性骨髓瘤 CAR-T 治疗',
        treatmentEn: 'Multiple Myeloma CAR-T Therapy',
        contentZh: '我在英国被诊断为多发性骨髓瘤，经过多次化疗效果不佳。Sana 团队为我安排了上海嘉会国际医院的 CAR-T 细胞免疫治疗。治疗两周内顺利出院，现在已完全缓解。费用比英国私立医院节省 60%，更重要的是获得了最先进的治疗方案。',
        contentEn: 'I was diagnosed with multiple myeloma in the UK and had poor response to multiple chemotherapy sessions. Sana team arranged CAR-T cell immunotherapy at Shanghai Jiahui International Hospital. I was discharged within two weeks and am now in complete remission. Cost was 60% less than UK private hospitals, and more importantly, I received the most advanced treatment.',
        featured: true,
      },
      {
        name: 'Ahmed K.',
        country: '沙特阿拉伯',
        treatmentZh: '颈椎肿瘤质子治疗',
        treatmentEn: 'Cervical Spine Tumor Proton Therapy',
        contentZh: '我的颈椎肿瘤被当地医院建议传统放疗，但 Sana 的医疗团队评估后推荐更安全的质子治疗方案。在上海完成了 30 次质子治疗（约$39,000 美元），成功避免脊髓损伤风险。72 小时内确认治疗方案，专业高效。',
        contentEn: 'My cervical spine tumor was recommended for traditional radiotherapy by local hospitals, but Sana medical team recommended safer proton therapy. Completed 30 proton therapy sessions in Shanghai (about $39,000 USD), successfully avoiding spinal cord injury risk. Treatment plan confirmed within 72 hours, very professional and efficient.',
        featured: true,
      },
      {
        name: 'Elena V.',
        country: '俄罗斯',
        treatmentZh: '神经外科疑难病症',
        treatmentEn: 'Complex Neurosurgery Condition',
        contentZh: '我在俄罗斯和德国都未能确诊的神经系统疾病，Sana 团队联系上海华山医院专家进行紧急病例审查。专家发现了我被忽视的严重纤维化疤痕这一根本原因，并制定了精准治疗方案。现在症状已明显缓解。',
        contentEn: 'My neurological condition remained undiagnosed in Russia and Germany. Sana team contacted Shanghai Huashan Hospital experts for urgent case review. The expert discovered the root cause - severe fibrotic scarring that was overlooked - and developed a precise treatment plan. My symptoms have significantly improved.',
        featured: true,
      },
      {
        name: 'Fatima A.',
        country: '阿联酋',
        treatmentZh: '心脏瓣膜置换手术',
        treatmentEn: 'Heart Valve Replacement Surgery',
        contentZh: '我需要心脏瓣膜置换手术，在阿联酋等待时间太长。Sana 为我安排了上海心血管中心的 TAVR 微创手术，手术成功率 99%，术后一周即可出院。阿拉伯语顾问全程陪同，沟通完全无障碍。',
        contentEn: 'I needed heart valve replacement surgery with too long waiting time in UAE. Sana arranged TAVR minimally invasive surgery at Shanghai Cardiovascular Center with 99% success rate. I was discharged within one week. Arabic consultant accompanied throughout with completely barrier-free communication.',
        featured: true,
      },
      {
        name: 'Michael T.',
        country: '美国',
        treatmentZh: '肝癌质子重离子治疗',
        treatmentEn: 'Liver Cancer Proton/Heavy Ion Therapy',
        contentZh: '我被诊断为早期肝癌，美国医生建议手术切除。Sana 团队推荐了质子重离子治疗，无需开刀，副作用更小。治疗费用仅为美国的三分之一，效果相同甚至更好。现在我已经完全康复。',
        contentEn: 'I was diagnosed with early-stage liver cancer, and US doctors recommended surgical resection. Sana team recommended proton/heavy ion therapy - no surgery needed, fewer side effects. Treatment cost was only one-third of US prices with same or better results. I am now fully recovered.',
        featured: true,
      },
    ],
  })

  await prisma.siteConfig.createMany({
    data: [
      {
        key: 'site_name',
        valueZh: 'Sana - Med in China',
        valueEn: 'Sana - Med in China',
      },
      {
        key: 'site_slogan',
        valueZh: '中国医疗，全球关怀',
        valueEn: 'Chinese Healthcare, Global Care',
      },
      {
        key: 'hero_title',
        valueZh: '您通往中国先进医疗保健的桥梁',
        valueEn: 'Your Bridge to Advanced Healthcare in China',
      },
      {
        key: 'hero_subtitle',
        valueZh: '访问顶级医院、顶尖专家，并大幅节省成本 —— 所有这些都有个性化的礼宾支持。',
        valueEn: 'Access top hospitals, leading experts, and save significantly on costs — all with personalized concierge support.',
      },
      {
        key: 'about_title',
        valueZh: '了解 Sana',
        valueEn: 'About Sana',
      },
      {
        key: 'about_content',
        valueZh: 'Sana，作为深耕跨国医疗服务的专业品牌，以「Med in China」为核心主张，致力于打破全球医疗资源壁垒，为每一位海外患者搭建安心、便捷、高性价比的来华就医桥梁。我们始终坚守以患者为中心的服务理念，整合国内JCI认证、三甲顶尖医院及权威医疗专家资源，覆盖精准重症治疗、中医特色理疗、高端健康体检、国际门诊等全品类医疗服务，全程提供病情评估、医疗签证协助、多语种翻译、专属陪诊、行程住宿安排、术后回国随访等一站式闭环服务。',
        valueEn: 'Sana, as a professional brand deeply engaged in cross-border medical services, takes "Med in China" as its core proposition, dedicated to breaking down global medical resource barriers and building a safe, convenient, and cost-effective bridge to healthcare in China for every overseas patient. We always adhere to a patient-centered service philosophy, integrating domestic JCI-certified, top-tier hospitals and authoritative medical expert resources.',
      },
    ],
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
