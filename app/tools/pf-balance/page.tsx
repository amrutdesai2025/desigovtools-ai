'use client';

export default function PFBalancePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-bank-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              પીએફ બેલેન્સ તપાસો
            </h1>
            <p className="text-lg text-gray-600">
              તમારા PF એકાઉન્ટનું બેલેન્સ અને વિગતો ચકાસો
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                PF બેલેન્સ ચકાસવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-teal-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">EPFO પોર્ટલ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-teal-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"For Employees" સેક્શનમાં "Member Passbook" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-teal-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">UAN નંબર અને પાસવર્ડ દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-teal-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">લોગિન કરીને પાસબુક ડાઉનલોડ કરો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-smartphone-line text-blue-600 mr-2"></i>
                મિસ્ડ કોલ દ્વારા બેલેન્સ જાણો:
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>011-22901406</strong> પર મિસ્ડ કોલ કરો</p>
                <p>તમારા રજિસ્ટર્ડ મોબાઇલ નંબરથી કોલ કરવો જરૂરી છે</p>
                <p>2-3 મિનિટમાં SMS દ્વારા બેલેન્સ મળશે</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://unifiedportal-mem.epfindia.gov.in/memberinterface/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                EPFO પોર્ટલ પર જાઓ
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-money-dollar-circle-line text-green-600 mr-2"></i>
                PF વિશે મહત્વની માહિતી:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• કર્મચારી અને એમ્પ્લોયર બંને PF મા પૈસા નાખે છે</li>
                <li>• વર્તમાન વ્યાજદર 8.5% છે</li>
                <li>• 5 વર્ષ પછી પૈસા કાઢી શકો છો</li>
                <li>• નોકરી બદલવા પર PF ટ્રાન્સફર કરી શકો છો</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-alert-line text-yellow-600 mr-2"></i>
                UAN એક્ટિવેશન:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• પહેલા UAN એક્ટિવેટ કરવું પડશે</li>
                <li>• મોબાઇલ નંબર અને આધાર લિંક કરવું જરૂરી</li>
                <li>• કંપની HR ડિપાર્ટમેન્ટથી UAN નંબર મેળવો</li>
                <li>• ઓનલાઇન પોર્ટલ પર પહેલા રજિસ્ટ્રેશન કરો</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}