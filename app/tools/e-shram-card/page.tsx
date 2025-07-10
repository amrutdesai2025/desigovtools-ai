'use client';

export default function EShramCardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-download-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              ઇ-શ્રમ કાર્ડ ડાઉનલોડ કરો
            </h1>
            <p className="text-lg text-gray-600">
              તમારું e-SHRAM કાર્ડ ડાઉનલોડ કરો અને વિગતો જુઓ
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                e-SHRAM કાર્ડ ડાઉનલોડ કરવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-indigo-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">e-SHRAM પોર્ટલ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-indigo-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"Download e-SHRAM Card" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-indigo-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">UAN નંબર અને આધાર નંબર દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-indigo-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">OTP વેરિફિકેશન કરીને કાર્ડ ડાઉનલોડ કરો</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-shield-check-line text-green-600 mr-2"></i>
                e-SHRAM કાર્ડના ફાયદા:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• ₹2 લાખ સુધીનો દુર્ઘટના વીમો</li>
                <li>• વિવિધ સરકારી યોજનાઓમાં લાભ</li>
                <li>• રોજગારના નવા મોકાઓ</li>
                <li>• ડિજિટલ ઓળખ પુરાવો</li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="https://eshram.gov.in/employment-schemes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                e-SHRAM પોર્ટલ પર જાઓ
              </a>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-user-line text-blue-600 mr-2"></i>
                કોણ રજિસ્ટર કરી શકે છે?
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• અસંગઠિત ક્ષેત્રના કામદારો</li>
                <li>• કન્સ્ટ્રક્શન વર્કર</li>
                <li>• ડોમેસ્ટિક વર્કર</li>
                <li>• સ્ટ્રીટ વેન્ડર</li>
                <li>• ખેતમજૂરો</li>
                <li>• ફિશરમેન</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-file-list-line text-yellow-600 mr-2"></i>
                જરૂરી દસ્તાવેજો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• આધાર કાર્ડ (આધાર લિંક મોબાઇલ નંબર)</li>
                <li>• બેંક એકાઉન્ટ પાસબુક</li>
                <li>• રેશન કાર્ડ</li>
                <li>• IFSC કોડ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
