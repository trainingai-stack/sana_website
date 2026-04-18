'use client'

import { Building, Users, Award, MapPin, TrendingUp, CheckCircle } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const hospitals = [
  {
    name: { zh: '北京协和医院', en: 'Peking Union Medical College Hospital' },
    location: { zh: '中国北京', en: 'Beijing, China' },
    image: '/hospital1.jpg',
    rank: { zh: '全国排名第 1', en: 'Ranked #1 Nationally' },
    specialties: [
      { zh: '疑难重症诊疗', en: 'Complex Disease Treatment' },
      { zh: '多学科会诊', en: 'Multidisciplinary Consultation' },
      { zh: '国家级重点学科', en: 'National Key Disciplines' }
    ],
    stats: {
      doctors: '3000+',
      beds: '2000+',
      successRate: '99%'
    }
  },
  {
    name: { zh: '中国医学科学院肿瘤医院', en: 'Cancer Hospital Chinese Academy of Medical Sciences' },
    location: { zh: '中国北京', en: 'Beijing, China' },
    image: '/hospital2.jpg',
    rank: { zh: '亚洲顶级肿瘤中心', en: 'Top Asian Cancer Center' },
    specialties: [
      { zh: '肿瘤综合治疗', en: 'Comprehensive Cancer Treatment' },
      { zh: '精准放疗', en: 'Precision Radiotherapy' },
      { zh: '免疫治疗', en: 'Immunotherapy' }
    ],
    stats: {
      doctors: '2500+',
      beds: '1800+',
      successRate: '95%'
    }
  },
  {
    name: { zh: '上海交通大学医学院附属瑞金医院', en: 'Ruijin Hospital Shanghai Jiao Tong University' },
    location: { zh: '中国上海', en: 'Shanghai, China' },
    image: '/hospital3.jpg',
    rank: { zh: '华东地区领先', en: 'Leading in East China' },
    specialties: [
      { zh: '器官移植', en: 'Organ Transplantation' },
      { zh: '心血管外科', en: 'Cardiovascular Surgery' },
      { zh: '神经外科', en: 'Neurosurgery' }
    ],
    stats: {
      doctors: '2800+',
      beds: '2200+',
      successRate: '98%'
    }
  },
  {
    name: { zh: '四川大学华西医院', en: 'West China Hospital Sichuan University' },
    location: { zh: '中国成都', en: 'Chengdu, China' },
    image: '/hospital4.jpg',
    rank: { zh: '西部地区第一', en: 'Ranked #1 in West China' },
    specialties: [
      { zh: '微创手术', en: 'Minimally Invasive Surgery' },
      { zh: '介入治疗', en: 'Interventional Therapy' },
      { zh: '重症监护', en: 'Critical Care' }
    ],
    stats: {
      doctors: '4000+',
      beds: '4300+',
      successRate: '97%'
    }
  },
  {
    name: { zh: '中山大学肿瘤防治中心', en: 'Sun Yat-sen University Cancer Center' },
    location: { zh: '中国广州', en: 'Guangzhou, China' },
    image: '/hospital5.jpg',
    rank: { zh: '华南肿瘤诊疗中心', en: 'South China Cancer Center' },
    specialties: [
      { zh: '鼻咽癌治疗', en: 'Nasopharyngeal Cancer Treatment' },
      { zh: '肝癌综合治疗', en: 'Liver Cancer Treatment' },
      { zh: '肺癌精准治疗', en: 'Lung Cancer Precision Treatment' }
    ],
    stats: {
      doctors: '2200+',
      beds: '1600+',
      successRate: '94%'
    }
  },
  {
    name: { zh: '复旦大学附属华山医院', en: 'Huashan Hospital Fudan University' },
    location: { zh: '中国上海', en: 'Shanghai, China' },
    image: '/hospital6.jpg',
    rank: { zh: '神经外科领先', en: 'Leading in Neurosurgery' },
    specialties: [
      { zh: '神经外科', en: 'Neurosurgery' },
      { zh: '皮肤科', en: 'Dermatology' },
      { zh: '感染科', en: 'Infectious Diseases' }
    ],
    stats: {
      doctors: '2600+',
      beds: '1900+',
      successRate: '98%'
    }
  }
]

const facilities = [
  {
    icon: Building,
    title: { zh: '现代化医疗大楼', en: 'Modern Medical Buildings' },
    description: {
      zh: '所有合作医院均配备现代化医疗设施，层流手术室、ICU 病房、国际医疗部，为患者提供舒适安全的就医环境。',
      en: 'All partner hospitals equipped with modern medical facilities, laminar flow operating rooms, ICU wards, international medical departments, providing comfortable and safe medical environment.'
    }
  },
  {
    icon: Award,
    title: { zh: '尖端医疗设备', en: 'Cutting-Edge Medical Equipment' },
    description: {
      zh: '配备 PET-CT、3.0T MRI、达芬奇手术机器人、质子治疗系统等国际先进设备，确保精准诊断和治疗。',
      en: 'Equipped with PET-CT, 3.0T MRI, Da Vinci surgical robots, proton therapy systems and other internationally advanced equipment to ensure precise diagnosis and treatment.'
    }
  },
  {
    icon: Users,
    title: { zh: '专业医护团队', en: 'Professional Medical Teams' },
    description: {
      zh: '三甲医院主任级别专家亲自诊疗，经验丰富的护理团队，多学科协作，为患者提供全方位医疗服务。',
      en: 'Chief physician level experts from top-tier hospitals provide personal diagnosis, experienced nursing teams, multidisciplinary collaboration, providing comprehensive medical services.'
    }
  },
  {
    icon: MapPin,
    title: { zh: '便捷就医环境', en: 'Convenient Medical Environment' },
    description: {
      zh: '国际医疗部提供一站式服务，独立候诊区、多语言服务、快速检查通道，零等待就医体验。',
      en: 'International medical departments provide one-stop service, independent waiting areas, multi-language services, fast examination channels, zero-wait medical experience.'
    }
  }
]

const videoTours = [
  {
    hospital: { zh: '北京协和医院', en: 'Peking Union Medical College Hospital' },
    title: { zh: '百年协和新貌 - 门诊大楼全景展示', en: 'Century-Old PUMCH - Outpatient Building Tour' },
    platform: 'Bilibili',
    videoId: 'BV1xxx',
    thumbnail: '/video-thumb-pumch.jpg',
    duration: '8:35',
    views: '12.5 万'
  },
  {
    hospital: { zh: '四川大学华西医院', en: 'West China Hospital' },
    title: { zh: '探秘西部第一医院 - 华西医院环境 Vlog', en: 'West China Hospital Environment Vlog' },
    platform: 'Bilibili',
    videoId: 'BV1xxx',
    thumbnail: '/video-thumb-westchina.jpg',
    duration: '12:20',
    views: '28.3 万'
  },
  {
    hospital: { zh: '上海瑞金医院', en: 'Ruijin Hospital Shanghai' },
    title: { zh: '现代化医疗中心 - 瑞金医院新大楼', en: 'Modern Medical Center - Ruijin New Building' },
    platform: 'Bilibili',
    videoId: 'BV1xxx',
    thumbnail: '/video-thumb-ruijin.jpg',
    duration: '10:15',
    views: '15.8 万'
  },
  {
    hospital: { zh: '中国医学科学院肿瘤医院', en: 'CAMS Cancer Hospital' },
    title: { zh: '亚洲顶级肿瘤中心探访', en: 'Top Asian Cancer Center Tour' },
    platform: 'Bilibili',
    videoId: 'BV1xxx',
    thumbnail: '/video-thumb-cancer.jpg',
    duration: '9:45',
    views: '9.2 万'
  }
]

const doctorTeams = [
  {
    department: { zh: '肿瘤科', en: 'Oncology' },
    experts: 500,
    title: { zh: '国家级肿瘤诊疗团队', en: 'National Cancer Treatment Team' },
    description: {
      zh: '包括院士、长江学者、国家杰青等顶尖专家，年手术量超过 10 万台，在肺癌、肝癌、胃癌等治疗领域处于国际领先水平。',
      en: 'Including academicians, Changjiang scholars, national outstanding young experts, annual surgical volume exceeds 100,000 cases, leading internationally in lung cancer, liver cancer, gastric cancer and other treatment fields.'
    }
  },
  {
    department: { zh: '心血管科', en: 'Cardiology' },
    experts: 300,
    title: { zh: '心血管介入治疗团队', en: 'Cardiovascular Intervention Team' },
    description: {
      zh: '擅长复杂冠脉介入、心脏电生理、结构性心脏病治疗，年心脏手术量超过 5 万台，成功率 99% 以上。',
      en: 'Specializing in complex coronary intervention, cardiac electrophysiology, structural heart disease treatment, annual cardiac surgery volume exceeds 50,000 cases, success rate over 99%.'
    }
  },
  {
    department: { zh: '神经外科', en: 'Neurosurgery' },
    experts: 200,
    title: { zh: '微创神经外科团队', en: 'Minimally Invasive Neurosurgery Team' },
    description: {
      zh: '采用显微外科技术、神经导航、术中 MRI 等先进技术，年手术量超过 3 万台，治愈率国内领先。',
      en: 'Using microsurgical techniques, neuronavigation, intraoperative MRI and other advanced technologies, annual surgical volume exceeds 30,000 cases, cure rate leading domestically.'
    }
  },
  {
    department: { zh: '器官移植', en: 'Organ Transplantation' },
    experts: 150,
    title: { zh: '器官移植专家团队', en: 'Organ Transplant Expert Team' },
    description: {
      zh: '开展肾、肝、心、肺等多器官移植，移植后 1 年存活率 95% 以上，5 年存活率 85% 以上，达到国际先进水平。',
      en: 'Performing kidney, liver, heart, lung and other multi-organ transplants, 1-year post-transplant survival rate over 95%, 5-year survival rate over 85%, reaching international advanced standards.'
    }
  },
  {
    department: { zh: '骨科', en: 'Orthopedics' },
    experts: 250,
    title: { zh: '骨科微创治疗团队', en: 'Orthopedic Minimally Invasive Team' },
    description: {
      zh: '擅长关节置换、脊柱微创、运动医学等，年手术量超过 8 万台，术后恢复快，并发症少。',
      en: 'Specializing in joint replacement, minimally invasive spine, sports medicine, etc., annual surgical volume exceeds 80,000 cases, fast postoperative recovery, few complications.'
    }
  },
  {
    department: { zh: '儿科', en: 'Pediatrics' },
    experts: 180,
    title: { zh: '儿童疑难病诊疗团队', en: 'Pediatric Complex Disease Team' },
    description: {
      zh: '专注于儿童疑难杂症、先天性疾病、儿童肿瘤等，多学科协作，为儿童患者提供最佳治疗方案。',
      en: 'Focusing on pediatric complex diseases, congenital diseases, pediatric tumors, etc., multidisciplinary collaboration, providing best treatment plans for pediatric patients.'
    }
  }
]

export default function HospitalsPage() {
  const { locale, t } = useI18n()

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC0000]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'zh' ? '合作医院网络' : 'Partner Hospital Network'}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '汇聚中国顶尖三甲医院，覆盖全国主要城市，提供世界级医疗服务'
                : 'Gathering China top-tier hospitals, covering major cities nationwide, providing world-class medical services'}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <Building className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">{locale === 'zh' ? '合作医院' : 'Partner Hospitals'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <Users className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">15000+</div>
              <div className="text-gray-400">{locale === 'zh' ? '专家医生' : 'Expert Doctors'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <Award className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">{locale === 'zh' ? '国家重点学科' : 'National Key Disciplines'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <TrendingUp className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">{locale === 'zh' ? '平均成功率' : 'Average Success Rate'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '核心合作医院' : 'Core Partner Hospitals'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' ? '中国顶尖三甲医院，国际医疗部直付服务' : 'China top-tier hospitals, international medical department direct billing service'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#CC0000]/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-24 h-24 text-gray-700" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#CC0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {locale === 'zh' ? hospital.rank.zh : hospital.rank.en}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {locale === 'zh' ? hospital.name.zh : hospital.name.en}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {locale === 'zh' ? hospital.location.zh : hospital.location.en}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {hospital.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-[#CC0000] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">
                          {locale === 'zh' ? spec.zh : spec.en}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#CC0000]">{hospital.stats.doctors}</div>
                      <div className="text-xs text-gray-500">{locale === 'zh' ? '专家' : 'Doctors'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#CC0000]">{hospital.stats.beds}</div>
                      <div className="text-xs text-gray-500">{locale === 'zh' ? '床位' : 'Beds'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#CC0000]">{hospital.stats.successRate}</div>
                      <div className="text-xs text-gray-500">{locale === 'zh' ? '成功率' : 'Success Rate'}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '医院设施与环境' : 'Hospital Facilities & Environment'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' ? '现代化医疗设施，舒适安全的就医环境' : 'Modern medical facilities, comfortable and safe medical environment'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon
              return (
                <div 
                  key={idx}
                  className="p-8 bg-[#1a1a1a] border border-gray-800 rounded-xl hover:border-[#CC0000]/50 transition-all"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {locale === 'zh' ? facility.title.zh : facility.title.en}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {locale === 'zh' ? facility.description.zh : facility.description.en}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Tours Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '医院环境视频导览' : 'Hospital Environment Video Tours'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' 
                ? '真实探访中国顶尖医院，感受现代化医疗环境'
                : 'Real visits to China top hospitals, experience modern medical environment'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTours.map((video, idx) => (
              <div 
                key={idx}
                className="group bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#CC0000]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#CC0000]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-[#CC0000] text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.platform}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">
                    {locale === 'zh' ? video.title.zh : video.title.en}
                  </h3>
                  <div className="text-xs text-gray-500 mb-2">
                    {locale === 'zh' ? video.hospital.zh : video.hospital.en}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{video.views} 次观看</span>
                    <span>哔哩哔哩</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#1a1a1a] border border-gray-800 rounded-xl px-6 py-4">
              <svg className="w-5 h-5 text-[#CC0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-400 text-sm">
                {locale === 'zh' 
                  ? '更多医院环境视频可在 B 站、抖音等平台搜索医院名称观看'
                  : 'Search hospital name on Bilibili, Douyin and other platforms for more environment videos'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Teams Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'zh' ? '专家团队与医生力量' : 'Expert Teams & Medical Staff'}
            </h2>
            <p className="text-gray-400">
              {locale === 'zh' ? '国家级专家团队，丰富临床经验' : 'National-level expert teams, rich clinical experience'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorTeams.map((team, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl hover:border-[#CC0000]/50 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">
                      {locale === 'zh' ? team.department.zh : team.department.en}
                    </h3>
                    <div className="text-sm text-gray-400">
                      {team.experts}+ {locale === 'zh' ? '专家' : 'Experts'}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-[#CC0000] mb-2">
                    {locale === 'zh' ? team.title.zh : team.title.en}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {locale === 'zh' ? team.description.zh : team.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#CC0000]/20 to-[#990000]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {locale === 'zh' ? '预约顶尖医院专家' : 'Book Top Hospital Experts'}
          </h2>
          <p className="text-gray-300 mb-8">
            {locale === 'zh' 
              ? '24-48 小时内安排就诊，零等待时间，国际保险直付'
              : 'Appointment arranged within 24-48 hours, zero wait time, international insurance direct billing'}
          </p>
          <button className="px-8 py-4 bg-[#CC0000] hover:bg-[#A30000] text-white font-semibold rounded-lg transition-colors inline-flex items-center">
            {locale === 'zh' ? '立即预约' : 'Book Now'}
            <TrendingUp className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </>
  )
}
