'use client';
import Link from 'next/link';

export default function PMKisanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-plant-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              પીએમ કિસાન લાભાર્થી તપાસો
            </h1>
            <p className="text-lg text-gray-600">
              PM કિસાન યોજનામાં તમારું નામ છે કે નહીં અને પૈસા મળ્યા છે કે નહીં જુઓ
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                PM કિસાન સ્થિતિ ચકાસવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">PM કિસાન પોર્ટલ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">"Beneficiary Status" પર ક્લિક કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">આધાર નંબર, એકાઉન્ટ નંબર અથવા મોબાઇલ નંબર દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">"Get Data" બટન દબાવો</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-money-dollar-circle-line text-blue-600 mr-2"></i>
                PM કિસાન યોજના વિશે:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• વર્ષમાં ₹6000 મળે છે (3 હપ્તામાં ₹2000-2000)</li>
                <li>• દર 4 મહિનામાં ₹2000 એકાઉન્ટમાં આવે છે</li>
                <li>• ફક્ત ખેડૂતોને આ યોજનાનો લાભ મળે છે</li>
                <li>• 2 હેક્ટર સુધીની જમીન વાળા ખેડૂતો પાત્ર છે</li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                સરકારી વેબસાઇટ પર જાઓ
              </a>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-alert-line text-yellow-600 mr-2"></i>
                જરૂરી દસ્તાવેજો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• આધાર કાર્ડ</li>
                <li>• બેંક પાસબુક</li>
                <li>• જમીનના કાગળો</li>
                <li>• મોબાઇલ નંબર</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}