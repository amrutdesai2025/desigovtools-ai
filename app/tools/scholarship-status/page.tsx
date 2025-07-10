'use client';

export default function ScholarshipStatusPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-graduation-cap-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              સ્કોલારશીપ સ્થિતિ તપાસો
            </h1>
            <p className="text-lg text-gray-600">
              તમારી સ્કોલારશીપની અરજીની સ્થિતિ અને પેમેન્ટ ચકાસો
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-pink-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                સ્કોલારશીપ સ્થિતિ ચકાસવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-pink-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">National Scholarship Portal પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-pink-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"Track NSP Payment" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-pink-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">NSP ID અથવા એપ્લિકેશન ID દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-pink-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">જન્મ તારીખ દાખલ કરીને "Search" દબાવો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-award-line text-blue-600 mr-2"></i>
                મુખ્ય સ્કોલારશીપ સ્કીમ:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold">કેન્દ્ર સરકાર:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Merit cum Means</li>
                    <li>• Pre-Matric Scholarship</li>
                    <li>• Post-Matric Scholarship</li>
                    <li>• Top Class Education</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">રાજ્ય સરકાર:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Mukhyamantri Scholarship</li>
                    <li>• Minority Scholarship</li>
                    <li>• Girl Child Scholarship</li>
                    <li>• Sports Scholarship</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://scholarships.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                NSP પોર્ટલ પર જાઓ
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-check-line text-green-600 mr-2"></i>
                સ્કોલારશીપ મેળવવાની શરતો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• ભારતીય નાગરિકતા</li>
                <li>• પરિવારની વાર્ષિક આવક મર્યાદા</li>
                <li>• શૈક્ષણિક પરિણામ 60% અથવા તેથી વધુ</li>
                <li>• કોર્સ માન્યતા પ્રાપ્ત સંસ્થામાંથી</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-time-line text-yellow-600 mr-2"></i>
                મહત્વપૂર્ણ તારીખો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• નવેમ્બર-ડિસેમ્બરમાં નવી અરજીઓ</li>
                <li>• જૂન-જુલાઈમાં રિન્યુઅલ</li>
                <li>• વેરિફિકેશન: જાન્યુઆરી-માર્ચ</li>
                <li>• પેમેન્ટ: એપ્રિલ-મે</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}