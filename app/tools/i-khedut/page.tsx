'use client';

export default function IKhedutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-plant-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              આઈ-ખેડૂત પોર્ટલ
            </h1>
            <p className="text-lg text-gray-600">
              ગુજરાતના ખેડૂતો માટે સરકારી યોજનાઓ અને સેવાઓ
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                આઈ-ખેડૂત પોર્ટલનો ઉપયોગ કેવી રીતે કરવો:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">ikhedut.gujarat.gov.in પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"કિસાન રજિસ્ટ્રેશન" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">આધાર નંબર અને મોબાઇલ નંબર દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">ખેતીની વિગતો અને બેંક ડિટેઇલ્સ ભરો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-seedling-line text-blue-600 mr-2"></i>
                મુખ્ય સેવાઓ:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• PM કિસાન સન્માન નિધિ યોજના</li>
                <li>• જમીન રેકોર્ડ (7/12, 8-A)</li>
                <li>• કિસાન ક્રેડિટ કાર્ડ અરજી</li>
                <li>• ખાતર અને બીજ સબસિડી</li>
                <li>• પાક વીમા યોજના</li>
                <li>• હવામાન સલાહ</li>
                <li>• બજાર ભાવ માહિતી</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-money-dollar-circle-line text-yellow-600 mr-2"></i>
                મુખ્ય યોજનાઓ:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">PM કિસાન</h4>
                  <p className="text-sm text-gray-600">વર્ષે ₹6,000 સીધી સહાય</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">પાક વીમા</h4>
                  <p className="text-sm text-gray-600">પાકના નુકસાન માટે વીમો</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">KCC કાર્ડ</h4>
                  <p className="text-sm text-gray-600">સસ્તા દરે લોન</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">સબસિડી</h4>
                  <p className="text-sm text-gray-600">ખાતર અને બીજ સબસિડી</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://ikhedut.gujarat.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                આઈ-ખેડૂત પોર્ટલ પર જાઓ
              </a>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-file-list-line text-orange-600 mr-2"></i>
                જરૂરી દસ્તાવેજો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• આધાર કાર્ડ</li>
                <li>• જમીનના કાગળો (7/12, 8-A)</li>
                <li>• બેંક પાસબુક</li>
                <li>• મોબાઇલ નંબર</li>
                <li>• પાસપોર્ટ સાઇઝ ફોટો</li>
                <li>• જાતિ પ્રમાણપત્ર (જો લાગુ પડે)</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-smartphone-line text-purple-600 mr-2"></i>
                મોબાઇલ એપ:
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                i-Khedut મોબાઇલ એપ ડાઉનલોડ કરો અને ઘરે બેઠા બધી સેવાઓનો લાભ લો
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=in.gov.gujarat.ikhedut" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors !rounded-button"
                >
                  Google Play Store
                </a>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-phone-line text-red-600 mr-2"></i>
                હેલ્પલાઇન:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• કિસાન કોલ સેન્ટર: <strong>1551</strong></li>
                <li>• i-Khedut હેલ્પલાઇન: <strong>079-23258550</strong></li>
                <li>• PM કિસાન હેલ્પલાઇન: <strong>155261</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}