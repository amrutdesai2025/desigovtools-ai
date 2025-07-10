
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

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            બધા સરકારી ટૂલ્સ
          </h1>
          <p className="text-xl text-gray-600">
            ભારતીય નાગરિકો માટે મહત્વપૂર્ણ સરકારી સેવાઓ અને યોજનાઓ
          </p>
        </div>

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
    </div>
  );
}
