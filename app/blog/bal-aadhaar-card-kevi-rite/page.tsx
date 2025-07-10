'use client';

export default function BalAadhaarCardBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Indian%20family%20with%20small%20children%20at%20Aadhaar%20enrollment%20center%2C%20parent%20and%20child%20registration%20process%2C%20official%20government%20office%2C%20family%20documentation%20scene&width=800&height=400&seq=bablog13&orientation=landscape"
            alt="Bal Aadhaar Card"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium">
                દસ્તાવેજો
              </span>
              <span className="ml-4 text-gray-500 text-sm">4 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              બાલ આધાર કાર્ડ કેવી રીતે બનાવવું?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">બાલ આધાર કાર્ડ શું છે?</h2>
              <p className="mb-4">
                બાલ આધાર કાર્ડ 5 વર્ષથી ઓછી ઉંમરના બાળકો માટે બનાવવામાં આવે છે. આ કાર્ડમાં બાળકના બાયોમેટ્રિક (ફીંગરપ્રિંટ અને આઈરિસ સ્કેન) લેવામાં આવતા નથી, માત્ર ફોટો લેવામાં આવે છે.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">બાલ આધારની વિશેષતાઓ</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>0-5 વર્ષના બાળકો માટે</li>
                <li>બાયોમેટ્રિક ડેટા જરૂરી નથી</li>
                <li>5 વર્ષ બાદ અપડેટ કરવું જરૂરી</li>
                <li>12 અંકનો યુનિક નંબર</li>
                <li>સંપૂર્ણ મફત સેવા</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">પાત્રતા</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>0-5 વર્ષની ઉંમરના બાળકો</li>
                <li>ભારતીય મૂળના બાળકો</li>
                <li>માતા-પિતામાંથી એકનું આધાર કાર્ડ હોવું જરૂરી</li>
                <li>જન્મ પ્રમાણપત્ર હોવું જરૂરી</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">જરૂરી દસ્તાવેજો</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">બાળકના દસ્તાવેજો:</h3>
                <ul className="text-blue-700 text-sm mb-4">
                  <li>• જન્મ પ્રમાણપત્ર (બર્થ સર્ટિફિકેટ)</li>
                  <li>• હોસ્પિટલ ડિસ્ચાર્જ સ્લિપ</li>
                  <li>• શાળાનું TC (જો લાગુ હોય)</li>
                </ul>
                
                <h3 className="font-semibold text-blue-800 mb-2">માતા-પિતાના દસ્તાવેજો:</h3>
                <ul className="text-blue-700 text-sm">
                  <li>• માતા-પિતાનું આધાર કાર્ડ</li>
                  <li>• સરનામાંનો પુરાવો</li>
                  <li>• આવકનો પુરાવો (જરૂર જણાય તો)</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">એનરોલમેન્ટ પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>નજીકના આધાર એનરોલમેન્ટ સેન્ટર પર જાઓ</li>
                <li>બાલ આધાર કાર્ડ ફોર્મ ભરો</li>
                <li>જરૂરી દસ્તાવેજો જમા કરો</li>
                <li>બાળકનો ફોટો ખેંચાવો</li>
                <li>માતા-પિતાનું બાયોમેટ્રિક વેરિફિકેશન</li>
                <li>એનરોલમેન્ટ સ્લિપ લો</li>
                <li>14 અંકનું એનરોલમેન્ટ ID સેવ કરો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ઓનલાઇન અપોઇન્ટમેન્ટ</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>uidai.gov.in વેબસાઇટ પર જાઓ</li>
                <li>"Book an Appointment" પર ક્લિક કરો</li>
                <li>નજીકનું સેન્ટર પસંદ કરો</li>
                <li>"Child Enrollment (0-5 years)" સિલેક્ટ કરો</li>
                <li>તારીખ અને સમય પસંદ કરો</li>
                <li>મોબાઇલ નંબર વેરિફાઇ કરો</li>
                <li>અપોઇન્ટમેન્ટ કન્ફર્મ કરો</li>
              </ol>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">મહત્વપૂર્ણ નોંધ:</h3>
                <ul className="text-green-700 text-sm">
                  <li>• બાલ આધાર કાર્ડ સંપૂર્ણ મફત છે</li>
                  <li>• કોઈ એજન્ટને પૈસા ન આપો</li>
                  <li>• 5 વર્ષ બાદ બાયોમેટ્રિક અપડેટ જરૂરી</li>
                  <li>• 15 વર્ષ બાદ ફરીથી અપડેટ કરવું</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સ્ટેટસ ચેક કરવાની રીત</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>uidai.gov.in પર જાઓ</li>
                <li>"Check Aadhaar Status" પર ક્લિક કરો</li>
                <li>14 અંકનું એનરોલમેન્ટ ID દાખલ કરો</li>
                <li>તારીખ અને સમય ભરો</li>
                <li>કેપ્ચા કોડ દાખલ કરો</li>
                <li>"Check Status" દબાવો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5 વર્ષ બાદ અપડેટ પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>બાળક 5 વર્ષનું થયા બાદ આધાર સેન્ટર જાઓ</li>
                <li>બાયોમેટ્રિક ડેટા આપવો પડશે</li>
                <li>નવો ફોટો ખેંચાવવો પડશે</li>
                <li>આ અપડેટ મફત છે</li>
                <li>અપડેટ ન કરાવો તો કાર્ડ બંધ થઈ જશે</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">બાલ આધારના ફાયદા</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>વહેલાં આધાર નંબર મળે છે</li>
                <li>શાળામાં દાખલા માટે ઉપયોગી</li>
                <li>બેંક એકાઉન્ટ ખોલવા માટે</li>
                <li>સરકારી યોજનાઓનો લાભ</li>
                <li>LPG કનેક્શન મેળવવા માટે</li>
                <li>મેડિકલ ઇન્શ્યોરન્સ માટે</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-2">સમસ્યાઓ અને ઉકેલ:</h3>
                <ul className="text-yellow-700 text-sm">
                  <li>• જન્મ પ્રમાણપત્ર નહીં હોય તો હોસ્પિટલ રેકોર્ડ લાવો</li>
                  <li>• માતા-પિતાનું આધાર ન હોય તો પહેલા તેઓનું બનાવાવો</li>
                  <li>• ફોટો સ્પષ્ટ અને તાજા હોવા જોઈએ</li>
                  <li>• બાળક રડતું હોય તો થોડી રાહ જુઓ</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સામાન્ય પ્રશ્નો</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800">Q: નવજાત બાળક માટે આધાર બનાવી શકાય?</h3>
                  <p className="text-gray-600 text-sm">A: હા, જન્મના તરત બાદ બાલ આધાર બનાવી શકાય છે</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Q: 5 વર્ષ બાદ અપડેટ ન કરાવો તો શું થશે?</h3>
                  <p className="text-gray-600 text-sm">A: આધાર કાર્ડ બંધ થઈ જશે અને સેવાઓ મળશે નહીં</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <a 
                  href="https://uidai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  બાલ આધાર કાર્ડ બનાવો
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}