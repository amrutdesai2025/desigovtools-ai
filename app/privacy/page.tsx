'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              પ્રાઇવસી પોલિસી
            </h1>
            <p className="text-lg text-gray-600">
              તમારી માહિતીની સુરક્ષા અમારી પ્રાથમિકતા છે
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                આ પોલિસી વિશે
              </h2>
              <p className="text-gray-700 leading-relaxed">
                DesiGovTools તમારી વ્યક્તિગત માહિતીની સુરક્ષાને લઈને ગંભીર છે. આ પ્રાઇવસી પોલિસી તમને જણાવે છે કે અમે તમારી માહિતી કેવી રીતે એકત્રિત કરીએ છીએ, તેનો ઉપયોગ કેવી રીતે કરીએ છીએ અને તેની સુરક્ષા કેવી રીતે કરીએ છીએ.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                અમે કઈ માહિતી એકત્રિત કરીએ છીએ?
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span><strong>સંપર્ક માહિતી:</strong> નામ, ઈમેઇલ એડ્રેસ, ફોન નંબર (જ્યારે તમે અમને સંપર્ક કરો)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span><strong>ટેકનિકલ માહિતી:</strong> IP એડ્રેસ, બ્રાઉઝર પ્રકાર, ઓપરેટિંગ સિસ્ટમ</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span><strong>ઉપયોગની માહિતી:</strong> તમે કયા પૃષ્ઠો જુઓ છો, કેટલો સમય વિતાવો છો</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                અમે આ માહિતીનો ઉપયોગ કેવી રીતે કરીએ છીએ?
              </h2>
              <div className="bg-green-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <i className="ri-arrow-right-line text-green-600 mt-1"></i>
                    <span>તમારા પ્રશ્નો અને સમસ્યાઓનો જવાબ આપવા માટે</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-arrow-right-line text-green-600 mt-1"></i>
                    <span>વેબસાઇટની કામગીરી સુધારવા માટે</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-arrow-right-line text-green-600 mt-1"></i>
                    <span>નવી સેવાઓ અને અપડેટ્સ વિશે જાણ કરવા માટે</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-arrow-right-line text-green-600 mt-1"></i>
                    <span>કાનૂની જરૂરિયાતોનું પાલન કરવા માટે</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                માહિતીની સુરક્ષા
              </h2>
              <div className="bg-yellow-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  તમારી વ્યક્તિગત માહિતીની સુરક્ષા માટે અમે આ પગલાં લઈએ છીએ:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• SSL એન્ક્રિપ્શન તકનીક</li>
                  <li>• સુરક્ષિત સર્વર અને ડેટાબેઝ</li>
                  <li>• મર્યાદિત એક્સેસ પરમિશન</li>
                  <li>• નિયમિત સિક્યુરિટી અપડેટ્સ</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                કૂકીઝનો ઉપયોગ
              </h2>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  અમે તમારા અનુભવને બહેતર બનાવવા માટે કૂકીઝનો ઉપયોગ કરીએ છીએ:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• વેબસાઇટની કામગીરી સુધારવા</li>
                  <li>• તમારી પસંદગીઓ યાદ રાખવા</li>
                  <li>• ટ્રાફિક વિશ્લેષણ કરવા</li>
                  <li>• સિક્યુરિટી પૂરી પાડવા</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                થર્ડ પાર્ટી સાથે શેરિંગ
              </h2>
              <div className="bg-red-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-red-600 text-xl mt-1"></i>
                  <div>
                    <p className="text-gray-700 font-medium mb-2">
                      અમે તમારી વ્યક્તિગત માહિતી ત્રીજા પક્ષ સાથે વેચતા કે શેર કરતા નથી.
                    </p>
                    <p className="text-gray-600 text-sm">
                      ફક્ત કાનૂની જરૂરિયાત હોય કે તમારી સ્પષ્ટ મંજૂરી હોય તો જ આવું કરવામાં આવશે.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                તમારા અધિકારો
              </h2>
              <div className="bg-indigo-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">તમને આ અધિકારો છે:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• તમારી માહિતી જોવાનો અધિકાર</li>
                  <li>• તમારી માહિતી સુધારવાનો અધિકાર</li>
                  <li>• તમારી માહિતી ડિલીટ કરવાનો અધિકાર</li>
                  <li>• ડેટા પોર્ટેબિલિટીનો અધિકાર</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                પોલિસીમાં ફેરફાર
              </h2>
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-gray-700">
                  અમે આ પ્રાઇવસી પોલિસીમાં સમય સમય પર ફેરફાર કરી શકીએ છીએ. કોઈપણ મહત્વપૂર્ણ ફેરફાર વિશે અમે તમને જાણ કરીશું. નવી પોલિસી અમારી વેબસાઇટ પર પોસ્ટ થયા પછીથી લાગુ થશે.
                </p>
              </div>
            </div>

            <div className="text-center bg-blue-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                પ્રશ્નો અથવા ચિંતાઓ?
              </h3>
              <p className="mb-4">
                જો તમને આ પ્રાઇવસી પોલિસી વિશે કોઈ પ્રશ્ન છે, તો કૃપા કરીને અમને સંપર્ક કરો
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors !rounded-button"
              >
                સંપર્ક કરો
              </a>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>છેલ્લે અપડેટ કર્યું: 1 જાન્યુઆરી, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}