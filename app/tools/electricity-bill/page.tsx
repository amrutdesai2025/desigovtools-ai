'use client';

export default function ElectricityBillPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-flashlight-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              ઇલેક્ટ્રિસિટી બિલ ચેક કરો
            </h1>
            <p className="text-lg text-gray-600">
              તમારા વીજળી બિલની રકમ અને સ્થિતિ ઓનલાઇન જુઓ
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                વીજળી બિલ ચકાસવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">તમારી વીજળી કંપનીની વેબસાઇટ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"View Bill" અથવા "Quick Bill Payment" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">કન્ઝ્યુમર નંબર દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">"View Bill" બટન દબાવો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-building-line text-blue-600 mr-2"></i>
                મુખ્ય વીજળી કંપનીઓ:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold">ગુજરાત:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• PGVCL (પશ્ચિમ ગુજરાત)</li>
                    <li>• MGVCL (મધ્ય ગુજરાત)</li>
                    <li>• UGVCL (ઉત્તર ગુજરાત)</li>
                    <li>• DGVCL (દક્ષિણ ગુજરાત)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">અન્ય રાજ્યો:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• MSEB (મહારાષ્ટ્ર)</li>
                    <li>• BSEB (બિહાર)</li>
                    <li>• PSEB (પંજાબ)</li>
                    <li>• RSEB (રાજસ્થાન)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://www.bijlibill.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                બિલ ચેક કરો
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-lightbulb-line text-green-600 mr-2"></i>
                ઉપયોગી ટિપ્સ:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• કન્ઝ્યુમર નંબર તમારા પુરાણા બિલ પર લખેલો હોય છે</li>
                <li>• મોબાઇલ નંબર રજિસ્ટર કરાવો SMS અલર્ટ માટે</li>
                <li>• ઓટો ડેબિટ સેટ કરવાથી દેર કરવાની ફી બચાવી શકો</li>
                <li>• ઓનલાઇન પેમેન્ટ કરવાથી કેશબેક મળે છે</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}