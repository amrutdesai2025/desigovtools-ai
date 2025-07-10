'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              અમારા વિશે
            </h1>
            <p className="text-lg text-gray-600">
              DesiGovTools - ભારતીય નાગરિકો માટે સરકારી સેવાઓનો સરળ રસ્તો
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                અમારું મિશન
              </h2>
              <p className="text-gray-700 leading-relaxed">
                DesiGovTools નો મુખ્ય હેતુ ભારતના દરેક નાગરિકને સરકારી સેવાઓ અને યોજનાઓની માહિતી સરળ અને સમજવા યોગ્ય ભાષામાં પહોંચાડવાનો છે. અમે ખાસ કરીને ગ્રામીણ વિસ્તારના લોકો અને તકનીકી જાણકારી ઓછી ધરાવતા લોકોને ધ્યાનમાં રાખીને આ વેબસાઇટ બનાવી છે.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-target-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  અમારો હેતુ
                </h3>
                <p className="text-gray-700 text-sm">
                  સરકારી સેવાઓને સરળ બનાવવી અને લોકોને યોગ્य માર્ગદર્શન આપવું
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-heart-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  અમારી મદદ
                </h3>
                <p className="text-gray-700 text-sm">
                  24/7 મફત સેવા અને સરળ ગુજરાતી ભાષામાં સંપૂર્ણ માર્ગદર્શન
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                અમે કેવી રીતે મદદ કરીએ છીએ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">સરળ ભાષા</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    બધી માહિતી સાદી ગુજરાતી ભાષામાં આપીએ છીએ જેથી દરેક વ્યક્તિ સમજી શકે
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">સ્ટેપ બાય સ્ટેપ ગાઇડ</h4>
                  <p className="text-gray-700 text-sm">
                    દરેક કામ માટે વિગતવાર પગલાં આપીએ છીએ
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">સીધી લિંક</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    સરકારી વેબસાઇટની સીધી લિંક આપીએ છીએ
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">મફત સેવા</h4>
                  <p className="text-gray-700 text-sm">
                    અમારી બધી સેવાઓ સંપૂર્ણપણે મફત છે
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                અમારી પ્રતિબદ્ધતા
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1"></i>
                  <span>તમારી વ્યક્તિગત માહિતી સુરક્ષિત રાખવી</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1"></i>
                  <span>હંમેશા સચોટ અને અપડેટેડ માહિતી આપવી</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1"></i>
                  <span>સરળ અને સમજવા યોગ્ય રજૂઆત</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1"></i>
                  <span>કોઈપણ ફી અથવા ચાર્જ વિના સેવા</span>
                </li>
              </ul>
            </div>

            <div className="text-center bg-blue-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                આપના સુઝાવ અને પ્રશ્નો આવકાર્ય છે
              </h3>
              <p className="mb-4">
                અમને લાગે છે કે આપના અભિપ્રાયથી અમે વધુ સારી સેવા આપી શકીશું
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors !rounded-button"
              >
                અમને સંપર્ક કરો
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}