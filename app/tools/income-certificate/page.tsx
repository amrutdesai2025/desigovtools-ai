'use client';

export default function IncomeCertificatePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-file-text-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              આવક દાખલો તપાસો
            </h1>
            <p className="text-lg text-gray-600">
              તમારા આવક પ્રમાણપત્રની સ્થિતિ અને વિગતો ચકાસો
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                આવક દાખલો ચકાસવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">તમારા રાજ્યની e-District પોર્ટલ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"Track Application Status" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">એપ્લિકેશન નંબર અથવા રેફરન્સ નંબર દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">"Track Status" બટન દબાવો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-document-line text-blue-600 mr-2"></i>
                આવક દાખલાના ઉપયોગ:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• સ્કોલરશીપ માટે અરજી</li>
                <li>• શિક્ષણ લોન મેળવવા માટે</li>
                <li>• સરકારી નોકરી માટે રિઝર્વેશન</li>
                <li>• EWS સર્ટિફિકેટ મેળવવા માટે</li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="https://digitalgujarat.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                સરકારી વેબસાઇટ પર જાઓ
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-folder-line text-green-600 mr-2"></i>
                જરૂરી દસ્તાવેજો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• આધાર કાર્ડ</li>
                <li>• રાશન કાર્ડ</li>
                <li>• સેલેરી સ્લિપ અથવા ITR</li>
                <li>• બેંક સ્ટેટમેન્ટ</li>
                <li>• ઘરનું સરનામું પુરાવો</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-time-line text-yellow-600 mr-2"></i>
                પ્રક્રિયાનો સમય:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• સામાન્ય રીતે 7-15 દિવસ લાગે છે</li>
                <li>• ઓનલાઇન અરજી ઝડપી પ્રક્રિયા થાય છે</li>
                <li>• ટાટકાલ સેવા પણ ઉપલબ્ધ છે</li>
                <li>• ફી: સામાન્ય ₹30, ટાટકાલ ₹100</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}