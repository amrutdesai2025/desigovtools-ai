'use client';

export default function RationCardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shopping-basket-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              રેશન કાર્ડ સ્થિતિ તપાસો
            </h1>
            <p className="text-lg text-gray-600">
              તમારા રેશન કાર્ડની વિગતો અને સ્થિતિ ચકાસો
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                રેશન કાર્ડ સ્થિતિ ચકાસવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-orange-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">તમારા રાજ્યની Food & Civil Supplies વેબસાઇટ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-orange-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"Ration Card Details" અથવા "Card Holder Details" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-orange-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">રેશન કાર્ડ નંબર અથવા આધાર નંબર દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-orange-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">"Search" બટન દબાવો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-information-line text-blue-600 mr-2"></i>
                રેશન કાર્ડના પ્રકારો:
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-red-600 font-semibold mb-2">APL કાર્ડ</div>
                  <p className="text-gray-600">ગરીબી રેખાથી ઉપરના લોકો માટે</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-yellow-600 font-semibold mb-2">BPL કાર્ડ</div>
                  <p className="text-gray-600">ગરીબી રેખાથી નીચેના લોકો માટે</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-green-600 font-semibold mb-2">AAY કાર્ડ</div>
                  <p className="text-gray-600">અત્યંત ગરીબ પરિવારો માટે</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://dcs-dof.gujarat.gov.in/ration-card.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                સરકારી વેબસાઇટ પર જાઓ
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-check-line text-green-600 mr-2"></i>
                રેશન કાર્ડના ફાયદા:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• સસ્તા ભાવે અનાજ મળે છે</li>
                <li>• ઓળખ પુરાવા તરીકે ઉપયોગ થાય છે</li>
                <li>• વિવિધ સરકારી યોજનાઓમાં લાભ</li>
                <li>• ગેસ કનેક્શન મેળવવા માટે જરૂરી</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
