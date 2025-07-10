'use client';

export default function VoterIdSearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-search-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              વોટર આઈડી દ્વારા નામ શોધો
            </h1>
            <p className="text-lg text-gray-600">
              વોટર આઈડી કાર્ડ નંબર દ્વારા નામ અને વિગતો શોધો
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                વોટર આઈડી શોધવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">મુખ્ય ચૂંટણી અધિકારીની વેબસાઇટ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"Search Voter" અથવા "Know Your Constituency" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">EPIC નંબર (વોટર આઈડી નંબર) દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">કેપ્ચા ભરીને "Search" દબાવો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-information-line text-blue-600 mr-2"></i>
                વોટર આઈડી વિશે:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• EPIC નંબર 10 અક્ષરનો હોય છે</li>
                <li>• તમારા મતદાન કેન્દ્રની માહિતી મળે છે</li>
                <li>• મતદાર યાદીમાં તમારું નામ ચકાસી શકો</li>
                <li>• ઓળખ પુરાવા તરીકે ઉપયોગ થાય છે</li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="https://electoralsearch.eci.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                વોટર આઈડી શોધો
              </a>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-alert-line text-yellow-600 mr-2"></i>
                અન્ય શોધ વિકલ્પો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• નામ અને પિતાના નામ દ્વારા</li>
                <li>• મોબાઇલ નંબર દ્વારા</li>
                <li>• વિધાનસભા બેઠક દ્વારા</li>
                <li>• હાઉસ નંબર દ્વારા</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
