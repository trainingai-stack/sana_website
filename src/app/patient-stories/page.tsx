'use client'

import { useState } from 'react'
import { Heart, MapPin, Calendar, ChevronRight, Filter } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const patientStories = [
  {
    id: 1,
    name: { zh: '张先生', en: 'Mr. Zhang' },
    country: { zh: '马来西亚', en: 'Malaysia' },
    age: 58,
    condition: { zh: '肺癌晚期', en: 'Advanced Lung Cancer' },
    hospital: { zh: '中国医学科学院肿瘤医院', en: 'CAMS Cancer Hospital' },
    treatment: { zh: 'CAR-T 细胞免疫疗法', en: 'CAR-T Cell Immunotherapy' },
    date: '2024-03',
    image: '/patient1.jpg',
    videoUrl: '',
    story: {
      zh: '来自马来西亚的张先生，2023 年被诊断为肺癌晚期，在当地医院被告知只有 3-6 个月生存期。通过 Sana 的服务，他来到中国医学科学院肿瘤医院接受 CAR-T 细胞免疫疗法。经过 6 个月的治疗，肿瘤缩小了 80%，现在张先生已经恢复正常生活。',
      en: 'Mr. Zhang from Malaysia was diagnosed with advanced lung cancer in 2023 and was told he had only 3-6 months to live. Through Sana services, he came to CAMS Cancer Hospital for CAR-T cell immunotherapy. After 6 months of treatment, the tumor shrank by 80%, and Mr. Zhang has now returned to normal life.'
    },
    quote: {
      zh: '感谢 Sana 团队和中国医生，给了我第二次生命。全程服务非常专业，让我在异国他乡也感到安心。',
      en: 'Thanks to the Sana team and Chinese doctors for giving me a second life. The service was very professional throughout, making me feel at ease in a foreign country.'
    },
    outcome: { zh: '肿瘤缩小 80%，恢复正常生活', en: 'Tumor reduced by 80%, normal life resumed' },
    featured: true
  },
  {
    id: 2,
    name: { zh: 'Sarah Johnson', en: 'Sarah Johnson' },
    country: { zh: '美国', en: 'USA' },
    age: 45,
    condition: { zh: '乳腺癌', en: 'Breast Cancer' },
    hospital: { zh: '北京协和医院', en: 'Peking Union Medical College Hospital' },
    treatment: { zh: '保乳手术 + 质子治疗', en: 'Breast-conserving Surgery + Proton Therapy' },
    date: '2024-01',
    image: '/patient2.jpg',
    videoUrl: '',
    story: {
      zh: 'Sarah 来自美国加州，被诊断为早期乳腺癌。她选择来北京协和医院接受保乳手术和质子治疗。整个治疗过程仅用了 3 周，不仅保留了乳房，而且副作用极小。现在她已经完全康复，定期回中国复查。',
      en: 'Sarah from California, USA was diagnosed with early-stage breast cancer. She chose to come to Peking Union Medical College Hospital for breast-conserving surgery and proton therapy. The entire treatment took only 3 weeks, not only preserving the breast but also with minimal side effects. She has now fully recovered and returns to China regularly for check-ups.'
    },
    quote: {
      zh: '中国的医疗技术和医生的专业水平让我印象深刻。Sana 的团队全程陪伴，让我毫无后顾之忧。',
      en: 'I was impressed by the medical technology and the professionalism of the doctors in China. The Sana team accompanied me throughout, giving me no worries.'
    },
    outcome: { zh: '完全康复，定期复查', en: 'Fully recovered, regular check-ups' },
    featured: true
  },
  {
    id: 3,
    name: { zh: 'Ahmed Hassan', en: 'Ahmed Hassan' },
    country: { zh: '沙特阿拉伯', en: 'Saudi Arabia' },
    age: 62,
    condition: { zh: '肝硬化', en: 'Liver Cirrhosis' },
    hospital: { zh: '上海瑞金医院', en: 'Ruijin Hospital Shanghai' },
    treatment: { zh: '肝脏移植', en: 'Liver Transplant' },
    date: '2023-11',
    image: '/patient3.jpg',
    videoUrl: '',
    story: {
      zh: 'Ahmed 来自沙特阿拉伯，患有严重肝硬化，急需肝脏移植。通过 Sana 的绿色通道，他在上海瑞金医院成功接受了肝脏移植手术。术后恢复顺利，现在 Ahmed 已经回到沙特阿拉伯，过着健康的生活。',
      en: 'Ahmed from Saudi Arabia suffered from severe liver cirrhosis and urgently needed a liver transplant. Through Sana green channel, he successfully received a liver transplant at Ruijin Hospital Shanghai. The postoperative recovery was smooth, and Ahmed has now returned to Saudi Arabia, living a healthy life.'
    },
    quote: {
      zh: 'Sana 帮我在最短时间内找到了合适的供体，并安排了手术。整个过程高效、透明，我非常感激。',
      en: 'Sana helped me find a suitable donor in the shortest time and arranged the surgery. The whole process was efficient and transparent, and I am very grateful.'
    },
    outcome: { zh: '移植成功，健康生活', en: 'Successful transplant, healthy life' },
    featured: true
  },
  {
    id: 4,
    name: { zh: '李女士', en: 'Ms. Li' },
    country: { zh: '新加坡', en: 'Singapore' },
    age: 35,
    condition: { zh: '不孕症', en: 'Infertility' },
    hospital: { zh: '中山大学附属第一医院', en: 'First Affiliated Hospital of Sun Yat-sen University' },
    treatment: { zh: '试管婴儿', en: 'IVF' },
    date: '2024-02',
    image: '/patient4.jpg',
    videoUrl: '',
    story: {
      zh: '李女士来自新加坡，结婚多年未能怀孕。她在新加坡尝试了多次试管婴儿都失败了。通过 Sana 的服务，她来到中山大学附属第一医院生殖医学中心。在专家的精心治疗下，第一次试管婴儿就成功怀孕，现在已经顺利生下健康的宝宝。',
      en: 'Ms. Li from Singapore had been unable to conceive for many years. She tried IVF multiple times in Singapore without success. Through Sana services, she came to the Reproductive Medicine Center of the First Affiliated Hospital of Sun Yat-sen University. Under the careful treatment of experts, she successfully became pregnant on her first IVF attempt and has now successfully given birth to a healthy baby.'
    },
    quote: {
      zh: '感谢中国医生的专业技术和 Sana 的贴心服务，让我实现了做母亲的梦想。',
      en: 'Thanks to the professional skills of Chinese doctors and the thoughtful service of Sana, my dream of becoming a mother has come true.'
    },
    outcome: { zh: '成功怀孕，顺利生产', en: 'Successful pregnancy, smooth delivery' },
    featured: false
  },
  {
    id: 5,
    name: { zh: 'John Smith', en: 'John Smith' },
    country: { zh: '英国', en: 'UK' },
    age: 55,
    condition: { zh: '帕金森病', en: 'Parkinson Disease' },
    hospital: { zh: '北京天坛医院', en: 'Beijing Tiantan Hospital' },
    treatment: { zh: '脑深部电刺激术 (DBS)', en: 'Deep Brain Stimulation (DBS)' },
    date: '2023-09',
    image: '/patient5.jpg',
    videoUrl: '',
    story: {
      zh: 'John 来自英国，患有帕金森病多年，药物治疗效果越来越差。通过 Sana 的服务，他在北京天坛医院接受了脑深部电刺激术 (DBS)。手术后，John 的症状得到显著改善，现在他可以独立行走、正常生活。',
      en: 'John from the UK had been suffering from Parkinson disease for many years, and medication was becoming less effective. Through Sana services, he received Deep Brain Stimulation (DBS) at Beijing Tiantan Hospital. After surgery, John symptoms improved significantly, and he can now walk independently and live a normal life.'
    },
    quote: {
      zh: '中国的神经外科技术世界领先。Sana 团队全程安排妥当，让我专注于治疗。',
      en: 'China neurosurgery technology is world-leading. The Sana team arranged everything, allowing me to focus on treatment.'
    },
    outcome: { zh: '症状显著改善，独立生活', en: 'Significant symptom improvement, independent living' },
    featured: false
  },
  {
    id: 6,
    name: { zh: '王先生', en: 'Mr. Wang' },
    country: { zh: '加拿大', en: 'Canada' },
    age: 48,
    condition: { zh: '腰椎间盘突出', en: 'Lumbar Disc Herniation' },
    hospital: { zh: '四川大学华西医院', en: 'West China Hospital' },
    treatment: { zh: '微创脊柱手术', en: 'Minimally Invasive Spine Surgery' },
    date: '2024-04',
    image: '/patient6.jpg',
    videoUrl: '',
    story: {
      zh: '王先生来自加拿大，长期受腰椎间盘突出困扰，疼痛难忍。他在加拿大等待手术需要 18 个月。通过 Sana 的服务，他在四川大学华西医院接受了微创脊柱手术。手术仅用 2 小时，术后第二天就能下床行走，一周后返回加拿大。',
      en: 'Mr. Wang from Canada had been suffering from lumbar disc herniation for a long time with severe pain. He would have to wait 18 months for surgery in Canada. Through Sana services, he received minimally invasive spine surgery at West China Hospital. The surgery took only 2 hours, and he could walk the next day, returning to Canada a week later.'
    },
    quote: {
      zh: '如果继续在加拿大等待，我还要忍受一年的痛苦。感谢 Sana 让我快速得到治疗。',
      en: 'If I continued to wait in Canada, I would have to endure another year of pain. Thanks to Sana for getting me treated quickly.'
    },
    outcome: { zh: '手术成功，快速康复', en: 'Successful surgery, rapid recovery' },
    featured: false
  }
]

const categories = [
  { zh: '全部', en: 'All', value: 'all' },
  { zh: '肿瘤治疗', en: 'Oncology', value: 'oncology' },
  { zh: '器官移植', en: 'Transplant', value: 'transplant' },
  { zh: '神经系统', en: 'Neurology', value: 'neurology' },
  { zh: '生殖医学', en: 'Reproductive', value: 'reproductive' },
  { zh: '骨科', en: 'Orthopedics', value: 'orthopedics' }
]

export default function PatientStoriesPage() {
  const { locale } = useI18n()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStory, setSelectedStory] = useState<typeof patientStories[0] | null>(null)

  const filteredStories = selectedCategory === 'all' 
    ? patientStories 
    : patientStories.filter(story => {
        if (selectedCategory === 'oncology') {
          return story.condition.zh.includes('癌') || story.condition.en.includes('Cancer')
        }
        if (selectedCategory === 'transplant') {
          return story.treatment.zh.includes('移植') || story.treatment.en.includes('Transplant')
        }
        if (selectedCategory === 'neurology') {
          return story.condition.zh.includes('帕金森') || story.condition.en.includes('Parkinson')
        }
        if (selectedCategory === 'reproductive') {
          return story.condition.zh.includes('不孕') || story.condition.en.includes('Infertility')
        }
        if (selectedCategory === 'orthopedics') {
          return story.condition.zh.includes('腰椎') || story.condition.en.includes('Disc')
        }
        return true
      })

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC0000]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'zh' ? '患者见证' : 'Patient Stories'}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '真实案例，真实康复。来自世界各地的患者分享他们在中国的治疗经历。'
                : 'Real cases, real recovery. Patients from around the world share their treatment experiences in China.'}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-[#CC0000] mb-2">500+</div>
              <div className="text-gray-400">{locale === 'zh' ? '成功案例' : 'Success Stories'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-[#CC0000] mb-2">50+</div>
              <div className="text-gray-400">{locale === 'zh' ? '国家地区' : 'Countries'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-[#CC0000] mb-2">98%</div>
              <div className="text-gray-400">{locale === 'zh' ? '满意度' : 'Satisfaction'}</div>
            </div>
            <div className="text-center p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-[#CC0000] mb-2">24/7</div>
              <div className="text-gray-400">{locale === 'zh' ? '全程陪伴' : 'Full Support'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#111] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-[#CC0000] text-white'
                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                }`}
              >
                {locale === 'zh' ? cat.zh : cat.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div 
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="group bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#CC0000]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-[#CC0000]/30" />
                  </div>
                  {story.featured && (
                    <div className="absolute top-4 right-4 bg-[#CC0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {locale === 'zh' ? '精选案例' : 'Featured'}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">
                      {locale === 'zh' ? story.name.zh : story.name.en}
                    </h3>
                    <span className="text-sm text-gray-500">{story.age} {locale === 'zh' ? '岁' : 'y/o'}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {locale === 'zh' ? story.country.zh : story.country.en}
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {story.date}
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">{locale === 'zh' ? '疾病' : 'Condition'}</div>
                    <div className="text-white font-medium">{locale === 'zh' ? story.condition.zh : story.condition.en}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">{locale === 'zh' ? '治疗' : 'Treatment'}</div>
                    <div className="text-[#CC0000] font-medium">{locale === 'zh' ? story.treatment.zh : story.treatment.en}</div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800">
                    <div className="text-sm text-gray-500 mb-1">{locale === 'zh' ? '治疗结果' : 'Outcome'}</div>
                    <div className="text-green-400 font-medium">{locale === 'zh' ? story.outcome.zh : story.outcome.en}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-[#1a1a1a] border border-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {locale === 'zh' ? selectedStory.name.zh : selectedStory.name.en}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {locale === 'zh' ? selectedStory.country.zh : selectedStory.country.en}
                    </span>
                    <span>{selectedStory.age} {locale === 'zh' ? '岁' : 'y/o'}</span>
                    <span>{selectedStory.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">{locale === 'zh' ? '疾病诊断' : 'Diagnosis'}</div>
                  <div className="text-white text-lg font-medium">{locale === 'zh' ? selectedStory.condition.zh : selectedStory.condition.en}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">{locale === 'zh' ? '治疗医院' : 'Hospital'}</div>
                  <div className="text-white">{locale === 'zh' ? selectedStory.hospital.zh : selectedStory.hospital.en}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">{locale === 'zh' ? '治疗方案' : 'Treatment'}</div>
                  <div className="text-[#CC0000] font-medium">{locale === 'zh' ? selectedStory.treatment.zh : selectedStory.treatment.en}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">{locale === 'zh' ? '治疗故事' : 'Story'}</div>
                  <p className="text-gray-300 leading-relaxed">
                    {locale === 'zh' ? selectedStory.story.zh : selectedStory.story.en}
                  </p>
                </div>

                <div className="bg-[#2a2a2a] p-6 rounded-lg border-l-4 border-[#CC0000]">
                  <div className="text-sm text-gray-500 mb-2">{locale === 'zh' ? '患者感言' : 'Patient Quote'}</div>
                  <p className="text-white italic">
                    "{locale === 'zh' ? selectedStory.quote.zh : selectedStory.quote.en}"
                  </p>
                </div>

                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <div className="text-sm text-gray-500 mb-1">{locale === 'zh' ? '治疗结果' : 'Outcome'}</div>
                  <div className="text-green-400 font-semibold text-lg">
                    {locale === 'zh' ? selectedStory.outcome.zh : selectedStory.outcome.en}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-full px-6 py-3 bg-[#CC0000] hover:bg-[#A30000] text-white font-semibold rounded-lg transition-colors"
                >
                  {locale === 'zh' ? '关闭' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {locale === 'zh' ? '开始您的康复之旅' : 'Start Your Recovery Journey'}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {locale === 'zh' 
              ? '无论您来自哪里，我们都将为您提供专业的医疗服务和全程陪伴。'
              : 'No matter where you are from, we will provide you with professional medical services and full companionship.'}
          </p>
          <button className="px-8 py-4 bg-[#CC0000] hover:bg-[#A30000] text-white font-semibold rounded-lg transition-colors inline-flex items-center">
            {locale === 'zh' ? '免费咨询' : 'Free Consultation'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </>
  )
}
