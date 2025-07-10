'use client';

export default function DrivingLicenseBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Indian%20person%20holding%20driving%20license%20with%20car%20in%20background%2C%20RTO%20office%20scene%2C%20official%20document%20photography%2C%20professional%20lighting%2C%20clear%20and%20sharp%20details&width=800&height=400&seq=dlblog8&orientation=landscape"
            alt="Driving License Application"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium">
                પરિવહન
              </span>
              <span className="ml-4 text-gray-500 text-sm">6 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              ડ્રાઇવિંગ લાઇસન્સ ઓનલાઇન અરજી
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ડ્રાઇવિંગ લાઇસન્સની જરૂરિયાત</h2>
              <p className="mb-4">
                ભારતમાં કોઈપણ વાહન ચલાવવા માટે વેલિડ ડ્રાઇવિંગ લાઇસન્સ હોવું ફરજિયાત છે. આજકાલ ડ્રાઇવિંગ લાઇસન્સ માટે ઓનલાઇન અરજી કરી શકાય છે અને આ પ્રક્રિયા ખૂબ સરળ બની ગઈ છે.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">લાઇસન્સના પ્રકાર</h2>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>લર્નર્સ લાઇસન્સ (LL):</strong> શીખવા માટે</li>
                <li><strong>પર્મેનન્ટ લાઇસન્સ (DL):</strong> કાયમી લાઇસન્સ</li>
                <li><strong>કમર્શિયલ લાઇસન્સ:</strong> વ્યાવસાયિક વાહન માટે</li>
                <li><strong>ઇન્ટરનેશનલ લાઇસન્સ:</strong> વિદેશમાં વાપરવા માટે</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">લર્નર્સ લાઇસન્સ માટે પાત્રતા</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>18 વર્ષથી વધુ ઉંમર (દિવ્યાઈટ-વ્હીલર માટે 16 વર્ષ)</li>
                <li>શારીરિક અને માનસિક રીતે સ્વસ્થ</li>
                <li>8મા ધોરણ પાસ (કમર્શિયલ માટે)</li>
                <li>ભારતીય નાગરિક અથવા વલિડ વિઝા</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">જરૂરી દસ્તાવેજો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>ભરેલ ફોર્મ-1 (લર્નર્સ માટે)</li>
                <li>ઉંમરનો પુરાવો (જન્મ પ્રમાણપત્ર/10મા માર્કશીટ)</li>
                <li>સરનામાંનો પુરાવો (આધાર/પાસપોર્ટ/વીજળી બિલ)</li>
                <li>પાસપોર્ટ સાઇઝ ફોટો</li>
                <li>મેડિકલ સર્ટિફિકેટ (જરૂર જણાય તો)</li>
                <li>ફી પેમેન્ટ રસીદ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ઓનલાઇન અરજી પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>parivahan.gov.in વેબસાઇટ પર જાઓ</li>
                <li>તમારું રાજ્ય સિલેક્ટ કરો</li>
                <li>"Apply Online" &gt; "New Driving License" પર ક્લિક કરો</li>
                <li>"Learner License" વિકલ્પ પસંદ કરો</li>
                <li>વ્યક્તિગત માહિતી ભરો</li>
                <li>દસ્તાવેજો અપલોડ કરો</li>
                <li>ફી પેમેન્ટ કરો</li>
                <li>RTO માં ટેસ્ટની તારીખ બુક કરો</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">ફી સ્ટ્રક્ચર:</h3>
                <ul className="text-blue-700 text-sm">
                  <li>• લર્નર્સ લાઇસન્સ: ₹150</li>
                  <li>• પર્મેનન્ટ લાઇસન્સ: ₹200</li>
                  <li>• સ્માર્ટ કાર્ડ: ₹200</li>
                  <li>• ટેસ્ટ ફી: ₹300</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">લર્નર્સ ટેસ્ટ</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>ટ્રાફિક રૂલ્સ અને સાઇન બોર્ડ વિશે પ્રશ્નો</li>
                <li>20 પ્રશ્નોમાંથી 14 સાચા જવાબ જરૂરી</li>
                <li>કોમ્પ્યૂટર આધારિત ટેસ્ટ</li>
                <li>ગુજરાતી, હિન્દી અને અંગ્રેજીમાં ઉપલબ્ધ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">પર્મેનન્ટ લાઇસન્સ માટે</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>લર્નર્સ લાઇસન્સ મળ્યાના 30 દિવસ બાદ અરજી કરો</li>
                <li>પ્રેક્ટિકલ ડ્રાઇવિંગ ટેસ્ટ આપો</li>
                <li>ફોર્મ-2 ભરો</li>
                <li>જરૂરી દસ્તાવેજો જમા કરો</li>
                <li>ફી ભરો</li>
                <li>સ્માર્ટ કાર્ડ મેળવો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ડ્રાઇવિંગ ટેસ્ટ ટિપ્સ</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>સીટ બેલ્ટ બાંધવાનું ભૂલશો નહીં</li>
                <li>ઇન્ડિકેટર યોગ્ય રીતે વાપરો</li>
                <li>સ્પીડ લિમિટ જાળવો</li>
                <li>રેવર્સ પાર્કિંગ સારી રીતે શીખો</li>
                <li>8-ફિગર અને સ્લોપ ટેસ્ટ પ્રેક્ટિસ કરો</li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">મહત્વપૂર્ણ બાબતો:</h3>
                <ul className="text-green-700 text-sm">
                  <li>• લર્નર્સ લાઇસન્સ 6 મહિના માટે વેલિડ</li>
                  <li>• પર્મેનન્ટ લાઇસન્સ 20 વર્ષ માટે વેલિડ</li>
                  <li>• 50 વર્ષ બાદ 5-5 વર્ષે રિન્યૂ કરાવવું</li>
                  <li>• એજન્ટ વગર પણ કામ કરાવી શકાય</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સ્ટેટસ ટ્રેક કરવાની રીત</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>parivahan.gov.in પર જાઓ</li>
                <li>"Know Your Application Status" પર ક્લિક કરો</li>
                <li>એપ્લિકેશન નંબર દાખલ કરો</li>
                <li>જન્મ તારીખ ભરો</li>
                <li>કેપ્ચા કોડ દાખલ કરો</li>
                <li>"Submit" દબાવો</li>
              </ol>

              <div className="text-center mt-8">
                <a 
                  href="https://parivahan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  ડ્રાઇવિંગ લાઇસન્સ અરજી કરો
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}