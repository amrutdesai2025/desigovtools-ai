'use client';

export default function TrainTicketBookBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Indian%20railway%20station%20with%20trains%2C%20people%20booking%20tickets%20online%20on%20mobile%20phone%2C%20modern%20train%20travel%2C%20railway%20platform%20scene%2C%20transportation&width=800&height=400&seq=ttblog20&orientation=landscape"
            alt="Train Ticket Booking"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                પરિવહન
              </span>
              <span className="ml-4 text-gray-500 text-sm">5 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              ટ્રેન ટિકિટ કેવી રીતે બુક કરવી?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">IRCTC પર ટિકિટ બુકિંગ</h2>
              <p className="mb-4">
                ભારતીય રેલવેની IRCTC વેબસાઇટ અને એપ પર તમે સરળતાથી ટ્રેન ટિકિટ બુક કરી શકો છો. આ સંપૂર્ણ ઓનલાઇન પ્રક્રિયા છે અને ઘરે બેસીને જ કરી શકાય છે.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">IRCTC એકાઉન્ટ બનાવવું</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>irctc.co.in વેબસાઇટ પર જાઓ</li>
                <li>"Register" બટન પર ક્લિક કરો</li>
                <li>યુઝર નેમ અને પાસવર્ડ સેટ કરો</li>
                <li>વ્યક્તિગત માહિતી ભરો</li>
                <li>મોબાઇલ નંબર વેરિફાઇ કરો</li>
                <li>ઇમેઇલ વેરિફિકેશન કરો</li>
                <li>એકાઉન્ટ એક્ટિવેટ કરો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ટિકિટ બુક કરવાની પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>IRCTC વેબસાઇટ પર લોગિન કરો</li>
                <li>"Book Ticket" પર ક્લિક કરો</li>
                <li>From અને To સ્ટેશન પસંદ કરો</li>
                <li>જર્ની ડેટ સિલેક્ટ કરો</li>
                <li>ક્લાસ પસંદ કરો (AC/Non-AC)</li>
                <li>"Find Trains" બટન દબાવો</li>
                <li>ટ્રેન પસંદ કરો અને "Book Now" દબાવો</li>
                <li>પેસેન્જર ડિટેઇલ્સ ભરો</li>
                <li>પેમેન્ટ કરો</li>
                <li>ટિકિટ ડાઉનલોડ કરો</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">ટ્રેન ક્લાસ વિકલ્પો:</h3>
                <ul className="text-blue-700 text-sm">
                  <li>• AC First Class (1A) - સૌથી મોંઘી</li>
                  <li>• AC 2 Tier (2A) - પ્રીમિયમ સર્વિસ</li>
                  <li>• AC 3 Tier (3A) - મિડ રેન્જ AC</li>
                  <li>• Sleeper (SL) - બિન-AC સ્લીપર</li>
                  <li>• Second Sitting (2S) - સૌથી સસ્તી</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">પેસેન્જર ડિટેઇલ્સ</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>નામ (ID પ્રૂફ અનુસાર)</li>
                <li>ઉંમર</li>
                <li>લિંગ</li>
                <li>બર્થ પ્રાધાન્ય (Upper/Middle/Lower)</li>
                <li>ફૂડ ચોઇસ (વેજ/નોન-વેજ)</li>
                <li>મોબાઇલ નંબર</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">પેમેન્ટ વિકલ્પો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>ડેબિટ/ક્રેડિટ કાર્ડ</li>
                <li>નેટ બેંકિંગ</li>
                <li>UPI (PhonePe, Google Pay, Paytm)</li>
                <li>વોલેટ (Paytm, Amazon Pay)</li>
                <li>EMI વિકલ્પ (કેટલાક કાર્ડ માટે)</li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">બુકિંગ ટાઇમિંગ:</h3>
                <ul className="text-green-700 text-sm">
                  <li>• સામાન્ય ટ્રેન: 120 દિવસ અગાઉથી</li>
                  <li>• એક્સપ્રેસ ટ્રેન: 90 દિવસ અગાઉથી</li>
                  <li>• લોકલ ટ્રેન: 15 દિવસ અગાઉથી</li>
                  <li>• તાત્કાલ ટિકિટ: 1 દિવસ પહેલા</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ટિકિટ સ્ટેટસ ચેક કરવું</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>IRCTC વેબસાઇટ પર જાઓ</li>
                <li>"PNR Status" પર ક્લિક કરો</li>
                <li>10 અંકનો PNR નંબર દાખલ કરો</li>
                <li>"Get Status" બટન દબાવો</li>
                <li>કન્ફર્મેશન સ્ટેટસ જુઓ</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ટિકિટ કેન્સલેશન</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>કન્ફર્મ ટિકિટ: જર્ની પહેલા કેન્સલ કરી શકાય</li>
                <li>વૈટિંગ લિસ્ટ: ઓટો કેન્સલ થાય છે</li>
                <li>કેન્સલેશન ચાર્જ લાગે છે</li>
                <li>રિફંડ 3-7 દિવસમાં મળે છે</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-2">મહત્વપૂર્ણ ટિપ્સ:</h3>
                <ul className="text-yellow-700 text-sm">
                  <li>• ફેસ્ટિવલ સીઝનમાં વહેલું બુક કરો</li>
                  <li>• ID પ્રૂફ હંમેશા લઈ જાઓ</li>
                  <li>• ટિકિટ પ્રિન્ટ કરો અથવા મોબાઇલમાં સેવ કરો</li>
                  <li>• ટાઇમ ટેબલ ચેક કરતા રહો</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">મોબાઇલ એપ્લિકેશન</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>IRCTC Rail Connect - ઓફિશિયલ એપ</li>
                <li>તમામ બુકિંગ ફીચર ઉપલબ્ધ</li>
                <li>વેબસાઇટ કરતા ઝડપી</li>
                <li>GPS લોકેશન ફીચર</li>
                <li>ઓફલાઇન ટિકિટ વ્યૂ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સામાન્ય સમસ્યાઓ</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-red-800 mb-2">સમસ્યા: પેમેન્ટ ફેઇલ</h3>
                  <p className="text-red-700 text-sm">
                    ઉકેલ: બેંક સ્ટેટમેન્ટ ચેક કરો, રિફંડ 5-7 દિવસમાં આવશે
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-red-800 mb-2">સમસ્યા: વૈટિંગ લિસ્ટ</h3>
                  <p className="text-red-700 text-sm">
                    ઉકેલ: 2-3 વિકલ્પ રાખો, તાત્કાલ ટિકિટ ટ્રાય કરો
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <a 
                  href="https://irctc.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  ટ્રેન ટિકિટ બુક કરો
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}