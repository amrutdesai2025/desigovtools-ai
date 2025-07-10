'use client';
import Link from 'next/link';

export default function PanAadhaarLinkPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-id-card-line text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              પાન-આધાર લિંક તપાસો
            </h1>
            <p className="text-lg text-gray-600">
              તમારું પાન કાર્ડ આધાર સાથે લિંક છે કે નહીં તે ચકાસો
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                પાન-આધાર લિંક કરવાના પગલાં:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">સરકારી વેબસાઇટ પર જાઓ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">તમારું પાન કાર્ડ નંબર દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">આધાર કાર્ડના છેલ્લા 4 અંક દાખલ કરો</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">કેપ્ચા કોડ ભરો અને સબમિટ કરો</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-information-line text-yellow-600 mr-2"></i>
                મહત્વપૂર્ણ નોંધ:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• પાન કાર્ડ અને આધાર કાર્ડમાં નામ સમાન હોવું જરૂરી છે</li>
                <li>• જન્મ તારીખ બંને કાર્ડમાં સમાન હોવી જોઈએ</li>
                <li>• લિંક કરવામાં કોઈ ફી લાગતી નથી</li>
                <li>• લિંક થયા પછી SMS દ્વારા કન્ફર્મેશન મળશે</li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-external-link-line mr-2"></i>
                સરકારી વેબસાઇટ પર જાઓ
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-check-line text-green-600 mr-2"></i>
                લાભો:
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• ઝડપી ITR ફાઇલિંગ</li>
                <li>• બેંક એકાઉન્ટ ખોલવામાં આસાનીI</li>
                <li>• વિવિધ સરકારી યોજનાઓમાં લાભ</li>
                <li>• ઓનલાઇન વેરિફિકેશન સરળ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
