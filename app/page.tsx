
'use client';
import Link from 'next/link';

const tools = [
  {
    title: 'પાન-આધાર લિંક તપાસો',
    description: 'તમારું પાન કાર્ડ આધાર સાથે લિંક છે કે નહીં તે ચકાસો',
    icon: 'ri-id-card-line',
    href: '/tools/pan-aadhaar-link',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'પીએમ કિસાન લાભાર્થી તપાસો',
    description: 'PM કિસાન યોજનામાં તમારું નામ છે કે નહીં જુઓ',
    icon: 'ri-plant-line',
    href: '/tools/pm-kisan',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'રેશન કાર્ડ સ્થિતિ',
    description: 'તમારા રેશન કાર્ડની વિગતો અને સ્થિતિ ચકાસો',
    icon: 'ri-shopping-basket-line',
    href: '/tools/ration-card',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'ઇલેક્ટ્રિસિટી બિલ ચેક',
    description: 'તમારા વીજળી બિલની રકમ અને સ્થિતિ જુઓ',
    icon: 'ri-flashlight-line',
    href: '/tools/electricity-bill',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'વોટર આઈડી દ્વારા નામ શોધો',
    description: 'વોટર આઈડી કાર્ડ નંબર દ્વારા નામ શોધો',
    icon: 'ri-user-search-line',
    href: '/tools/voter-id-search',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'આવક દાખલો તપાસો',
    description: 'તમારા આવક પ્રમાણપત્રની સ્થિતિ ચકાસો',
    icon: 'ri-file-text-line',
    href: '/tools/income-certificate',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'ઇ-શ્રમ કાર્ડ ડાઉનલોડ',
    description: 'તમારું e-SHRAM કાર્ડ ડાઉનલોડ કરો',
    icon: 'ri-download-line',
    href: '/tools/e-shram-card',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'પીએફ બેલેન્સ તપાસો',
    description: 'તમારા PF એકાઉન્ટનું બેલેન્સ ચકાસો',
    icon: 'ri-bank-line',
    href: '/tools/pf-balance',
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'સ્કોલારશીપ સ્થિતિ',
    description: 'તમારી સ્કોલારશીપની અરજીની સ્થિતિ જુઓ',
    icon: 'ri-graduation-cap-line',
    href: '/tools/scholarship-status',
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'આઈ-ખેડૂત પોર્ટલ',
    description: 'ગુજરાતના ખેડૂતો માટે સરકારી યોજનાઓ અને સેવાઓ',
    icon: 'ri-plant-line',
    href: '/tools/i-khedut',
    color: 'from-emerald-500 to-green-600'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            DesiGovTools
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ભારતીય નાગરિકો માટે સરકારી સેવાઓ અને યોજનાઓની સ્થિતિ ચકાસવા માટે સરળ અને મફત ટૂલ્સ
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              આ વેબસાઇટ શું કરે છે?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">સરળ ઉપયોગ</h3>
                  <p className="text-sm text-gray-600">કોઈપણ તકનીકી જાણકારી વિના સરળતાથી ઉપયોગ કરી શકાય</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">સુરક્ષિત</h3>
                  <p className="text-sm text-gray-600">તમારી વ્યક્તિગત માહિતી સંપૂર્ણ સુરક્ષિત રાખવામાં આવે છે</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-purple-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">24/7 ઉપલબ્ધ</h3>
                  <p className="text-sm text-gray-600">કોઈપણ સમયે, ક્યાંથી પણ ઉપયોગ કરી શકો છો</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            મુખ્ય સરકારી ટૂલ્સ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Link key={index} href={tool.href}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${tool.color}`}></div>
                  <div className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center mb-4`}>
                      <i className={`${tool.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {tool.description}
                    </p>
                    <button className={`w-full bg-gradient-to-r ${tool.color} text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity !rounded-button`}>
                      હવે ચકાસો
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            વધુ માહિતી માટે અમારો બ્લોગ વાંચો
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            સરકારી યોજનાઓ અને સેવાઓ વિશે વિગતવાર માર્ગદર્શન મેળવો
          </p>
          <Link href="/blog">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button">
              બ્લોગ વાંચો
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
