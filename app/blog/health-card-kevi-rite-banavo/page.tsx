'use client';

export default function HealthCardBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Indian%20healthcare%20registration%20center%2C%20people%20applying%20for%20health%20cards%2C%20medical%20insurance%20enrollment%2C%20healthcare%20facility%2C%20professional%20medical%20environment&width=800&height=400&seq=hcblog19&orientation=landscape"
            alt="Health Card"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                સ્વાસ્થ્ય
              </span>
              <span className="ml-4 text-gray-500 text-sm">5 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              હેલ્થ કાર્ડ કેવી રીતે બનાવવું?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">હેલ્થ કાર્ડનું મહત્વ</h2>
              <p className="mb-4">
                હેલ્થ કાર્ડ એ તમારી તબિયતની સંપૂર્ણ માહિતી અને મેડિકલ હિસ્ટ્રી રાખવાનું એક ડિજિટલ માધ્યમ છે. આ કાર્ડથી તમે કોઈપણ હોસ્પિટલમાં જઈને ઝડપથી ઇલાજ કરાવી શકો છો.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">હેલ્થ કાર્ડના પ્રકાર</h2>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>આયુષ્માન ભારત હેલ્થ કાર્ડ:</strong> સરકારી હેલ્થ સ્કીમ</li>
                <li><strong>આબીડ હેલ્થ કાર્ડ:</strong> ડિજિટલ હેલ્થ આઈડી</li>
                <li><strong>ESIC હેલ્થ કાર્ડ:</strong> કર્મચારીઓ માટે</li>
                <li><strong>CGHS કાર્ડ:</strong> કેન્દ્ર સરકારના કર્મચારીઓ માટે</li>
                <li><strong>રાજ્ય હેલ્થ કાર્ડ:</strong> રાજ્ય સરકારની યોજના</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">આયુષ્માન ભારત હેલ્થ કાર્ડ</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">મુખ્ય લાભો:</h3>
                <ul className="text-blue-700 text-sm">
                  <li>• વાર્ષિક ₹5 લાખ સુધીનું કવરેજ</li>
                  <li>• કેશલેસ હોસ્પિટલાઇઝેશન</li>
                  <li>• 1,400+ મેડિકલ પેકેજ</li>
                  <li>• દેશભરમાં પોર્ટેબિલિટી</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">આબીડ હેલ્થ કાર્ડ (ABHA)</h2>
              <p className="mb-4">
                આબીડ (Ayushman Bharat Health Account) એ ડિજિટલ હેલ્થ આઈડી છે જે તમારી તમામ મેડિકલ રેકોર્ડ્સ ડિજિટલ રીતે સ્ટોર કરે છે.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">ABHA કાર્ડના ફાયદા:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>મેડિકલ રેકોર્ડ્સ ક્લાઉડમાં સેવ</li>
                <li>કોઈપણ હોસ્પિટલમાં ઇઝી એક્સેસ</li>
                <li>ડિજિટલ પ્રિસ્ક્રિપ્શન</li>
                <li>લેબ રિપોર્ટ્સ ઓનલાઇન</li>
                <li>ટેલિકન્સલ્ટેશન સુવિધા</li>
              </ul>

              <h2 className="text-2xl font-semibord text-gray-800 mb-4">ABHA કાર્ડ કેવી રીતે બનાવવું?</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>healthid.ndhm.gov.in પર જાઓ</li>
                <li>"Create ABHA Number" પર ક્લિક કરો</li>
                <li>આધાર નંબર દાખલ કરો</li>
                <li>OTP વેરિફાઇ કરો</li>
                <li>વ્યક્તિગત માહિતી ભરો</li>
                <li>મોબાઇલ નંબર કન્ફર્મ કરો</li>
                <li>પાસવર્ડ સેટ કરો</li>
                <li>ABHA નંબર અને કાર્ડ ડાઉનલોડ કરો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">જરૂરી દસ્તાવેજો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>આધાર કાર્ડ</li>
                <li>મોબાઇલ નંબર (આધાર સાથે લિંક)</li>
                <li>ઇમેઇલ આઈડી (વૈકલ્પિક)</li>
                <li>પાસપોર્ટ સાઇઝ ફોટો</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">આયુષ્માન ભારત ગોલ્ડન કાર્ડ</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>pmjay.gov.in પર જાઓ</li>
                <li>"Am I Eligible" ચેક કરો</li>
                <li>આધાર/રેશન કાર્ડ નંબર દાખલ કરો</li>
                <li>પાત્રતા કન્ફર્મ થાય તો નજીકના CSC જાઓ</li>
                <li>બાયોમેટ્રિક વેરિફિકેશન કરાવો</li>
                <li>ફોટો ખેંચાવો</li>
                <li>ગોલ્ડન કાર્ડ મેળવો</li>
              </ol>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">ESIC હેલ્થ કાર્ડ:</h3>
                <ul className="text-green-700 text-sm">
                  <li>• કર્મચારી રાજ્ય વીમા યોજના</li>
                  <li>• ₹21,000 સુધીની સેલેરી વાળા કર્મચારીઓ માટે</li>
                  <li>• ફેમિલી કવરેજ સાથે</li>
                  <li>• મફત OPD અને IPD સેવા</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">રાજ્ય હેલ્થ કાર્ડ યોજનાઓ</h2>
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-purple-400 bg-purple-50 p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">ગુજરાત:</h3>
                  <ul className="text-purple-700 text-sm">
                    <li>• મુખ્યમંત્રી અમૃતમ યોજના</li>
                    <li>• વાર્ષિક ₹5 લાખ કવરેજ</li>
                    <li>• 1,200+ હોસ્પિટલમાં સેવા</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-teal-400 bg-teal-50 p-4">
                  <h3 className="font-semibold text-teal-800 mb-2">મહારાષ્ટ્ર:</h3>
                  <ul className="text-teal-700 text-sm">
                    <li>• મહાત્મા જ્યોતિબા ફુલે જન આરોગ્ય યોજના</li>
                    <li>• વાર્ષિક ₹2.5 લાખ કવરેજ</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">હેલ્થ કાર્ડ કેવી રીતે વાપરવું?</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>હોસ્પિટલમાં હેલ્થ કાર્ડ બતાવો</li>
                <li>રજિસ્ટ્રેશન કાઉન્ટર પર વેરિફિકેશન કરાવો</li>
                <li>આયુષ્માન મિત્રની મદદ લો</li>
                <li>કેશલેસ ટ્રીટમેન્ટ લો</li>
                <li>ડિસ્ચાર્જ સમયે કોઈ પેમેન્ટ ન કરો</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-2">મહત્વપૂર્ણ સૂચનાઓ:</h3>
                <ul className="text-yellow-700 text-sm">
                  <li>• બધા હેલ્થ કાર્ડ મફત છે</li>
                  <li>• કોઈ દલાલને પૈસા ન આપો</li>
                  <li>• નકલી વેબસાઇટથી સાવચેત રહો</li>
                  <li>• કાર્ડ ગુમાવો તો તરત બ્લોક કરાવો</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ટેક્નોલોજી અને હેલ્થકેર</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>આર્ટિફિશિયલ ઇન્ટેલિજન્સ દ્વારા બેહતર ડાયગ્નોસિસ</li>
                <li>ટેલિમેડિસિન સેવાઓ</li>
                <li>ઇ-ફાર્મસી ઇન્ટીગ્રેશન</li>
                <li>વર્ચ્યુઅલ કન્સલ્ટેશન</li>
                <li>હેલ્થ મોનિટરિંગ ડિવાઈસ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ફ્યુચર ઓફ ડિજિટલ હેલ્થ</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>બ્લોકચેઈન આધારિત હેલ્થ રેકોર્ડ્સ</li>
                <li>વેરેબલ ડિવાઈસ ઇન્ટીગ્રેશન</li>
                <li>પર્સનલાઇઝ્ડ મેડિસિન</li>
                <li>પ્રિડિક્ટિવ હેલ્થકેર</li>
                <li>ઇન્ટરઓપરેબિલિટી</li>
              </ul>

              <div className="text-center mt-8">
                <a 
                  href="https://healthid.ndhm.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  હેલ્થ કાર્ડ બનાવો
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}