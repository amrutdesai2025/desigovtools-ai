'use client';

export default function ITRFileBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Person%20filing%20tax%20returns%20on%20computer%2C%20ITR%20forms%20and%20documents%2C%20tax%20calculation%2C%20professional%20accounting%20environment%2C%20financial%20documents&width=800&height=400&seq=itrblog21&orientation=landscape"
            alt="ITR Filing"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                ટેક્સ
              </span>
              <span className="ml-4 text-gray-500 text-sm">8 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              ITR ફાઇલ કેવી રીતે કરવું?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ITR ફાઇલ કરવાનું મહત્વ</h2>
              <p className="mb-4">
                ઇન્કમ ટેક્સ રિટર્ન (ITR) ફાઇલ કરવું એ દરેક નાગરિકની જવાબદારી છે. આ દ્વારા તમે સરકારને તમારી આવક અને ચૂકવેલ ટેક્સની જાણકારી આપો છો અને જરૂર જણાય તો રિફંડ પણ મેળવી શકો છો.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ITR ફાઇલ કરવાની જરૂર કોને?</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>વાર્ષિક આવક ₹2.5 લાખથી વધુ હોય</li>
                <li>60+ વર્ષ: ₹3 લાખથી વધુ આવક</li>
                <li>80+ વર્ષ: ₹5 લાખથી વધુ આવક</li>
                <li>TDS કાપવામાં આવ્યો હોય</li>
                <li>બિઝનેસ અથવા પ્રોફેશનલ આવક હોય</li>
                <li>વિદેશી આવક હોય</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ITR ફોર્મના પ્રકાર</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">ITR-1 (સાહજ):</h3>
                <ul className="text-blue-700 text-sm mb-4">
                  <li>• સેલેરી, પેન્શન આવક</li>
                  <li>• બેંક ઇન્ટરેસ્ટ</li>
                  <li>• ₹50 લાખ સુધીની આવક</li>
                  <li>• એક ઘરની મિલકત</li>
                </ul>
                
                <h3 className="font-semibold text-blue-800 mb-2">ITR-2:</h3>
                <ul className="text-blue-700 text-sm mb-4">
                  <li>• કેપિટલ ગેઇન આવક</li>
                  <li>• વિદેશી આવક</li>
                  <li>• ઘણી મિલકતો</li>
                </ul>
                
                <h3 className="font-semibold text-blue-800 mb-2">ITR-3:</h3>
                <ul className="text-blue-700 text-sm">
                  <li>• બિઝનેસ અથવા પ્રોફેશનલ આવક</li>
                  <li>• પાર્ટનરશિપ ફર્મના પાર્ટનર</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">જરૂરી દસ્તાવેજો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Form 16 (સેલેરી સ્લિપ)</li>
                <li>Form 16A (TDS સર્ટિફિકેટ)</li>
                <li>બેંક સ્ટેટમેન્ટ</li>
                <li>FD/RD ઇન્ટરેસ્ટ સર્ટિફિકેટ</li>
                <li>હાઉસ પ્રોપર્ટી ડોક્યુમેન્ટ્સ</li>
                <li>ઇન્વેસ્ટમેન્ટ પ્રૂફ (80C, 80D)</li>
                <li>પાન કાર્ડ</li>
                <li>આધાર કાર્ડ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ઓનલાઇન ITR ફાઇલ કરવાની પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>incometax.gov.in વેબસાઇટ પર જાઓ</li>
                <li>"Register Yourself" પર ક્લિક કરો</li>
                <li>પાન નંબર અને વ્યક્તિગત માહિતી ભરો</li>
                <li>લોગિન કરો</li>
                <li>"e-File" મેન્યુમાં જાઓ</li>
                <li>"Income Tax Return" પસંદ કરો</li>
                <li>યોગ્ય ITR ફોર્મ પસંદ કરો</li>
                <li>આવકની માહિતી ભરો</li>
                <li>કપાતની માહિતી ભરો</li>
                <li>ટેક્સ કેલ્ક્યુલેશન ચેક કરો</li>
                <li>ફોર્મ સબમિટ કરો</li>
                <li>e-Verify કરો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ટેક્સ કેલ્ક્યુલેશન</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">ટેક્સ સ્લેબ (2023-24):</h3>
                <ul className="text-green-700 text-sm">
                  <li>• ₹0 - ₹2.5 લાખ: 0% ટેક્સ</li>
                  <li>• ₹2.5 - ₹5 લાખ: 5% ટેક્સ</li>
                  <li>• ₹5 - ₹10 લાખ: 20% ટેક્સ</li>
                  <li>• ₹10 લાખથી વધુ: 30% ટેક્સ</li>
                  <li>• ₹50 લાખથી વધુ: 37% (સરચાર્જ સહિત)</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ટેક્સ સેવિંગ વિકલ્પો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>80C:</strong> PPF, ELSS, LIC (₹1.5 લાખ)</li>
                <li><strong>80D:</strong> હેલ્થ ઇન્શ્યોરન્સ (₹25,000-50,000)</li>
                <li><strong>80G:</strong> દાન (50%-100% કપાત)</li>
                <li><strong>24B:</strong> હોમ લોન ઇન્ટરેસ્ટ (₹2 લાખ)</li>
                <li><strong>80E:</strong> એજ્યુકેશન લોન ઇન્ટરેસ્ટ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">e-Verification પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>આધાર OTP વેરિફિકેશન</li>
                <li>નેટ બેંકિંગ વેરિફિકેશન</li>
                <li>ડેબિટ કાર્ડ વેરિફિકેશન</li>
                <li>EVC (Electronic Verification Code)</li>
                <li>ડિજિટલ સિગ્નેચર</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-2">મહત્વપૂર્ણ તારીખો:</h3>
                <ul className="text-yellow-700 text-sm">
                  <li>• વ્યક્તિગત ITR: 31 જુલાઈ</li>
                  <li>• ઓડિટ કેસ: 31 ઓક્ટોબર</li>
                  <li>• વિલંબ ફી: ₹1,000-10,000</li>
                  <li>• મેક્સિમમ વિલંબ: 31 માર્ચ</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">રિફંડ પ્રક્રિયા</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>ITR પ્રોસેસ થયા બાદ રિફંડ</li>
                <li>બેંક એકાઉન્ટમાં ડાયરેક્ટ ટ્રાન્સફર</li>
                <li>સામાન્યતઃ 30-45 દિવસમાં</li>
                <li>રિફંડ સ્ટેટસ ઓનલાઇન ચેક કરી શકાય</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સામાન્ય ભૂલો</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-red-800 mb-2">ભૂલ: ખોટી બેંક ડિટેઇલ્સ</h3>
                  <p className="text-red-700 text-sm">
                    ઉકેલ: બેંક IFSC અને એકાઉન્ટ નંબર બે વાર ચેક કરો
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-red-800 mb-2">ભૂલ: TDS ની ખોટી માહિતી</h3>
                  <p className="text-red-700 text-sm">
                    ઉકેલ: Form 26AS સાથે મેચ કરો
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ITR-V ફોર્મ</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>કેટલાક કેસમાં હાર્ડ કોપી મોકલવી પડે છે</li>
                <li>CPC બેંગ્લોર પર પોસ્ટ કરવું</li>
                <li>120 દિવસમાં પહોંચવું જરૂરી</li>
                <li>સ્પીડ પોસ્ટ વાપરો</li>
              </ul>

              <div className="text-center mt-8">
                <a 
                  href="https://incometax.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  ITR ફાઇલ કરો
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}