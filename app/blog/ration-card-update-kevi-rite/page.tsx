'use client';
import Link from 'next/link';

export default function RationCardBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Indian%20family%20receiving%20food%20grains%20from%20government%20ration%20shop%2C%20traditional%20ration%20store%20with%20rice%20wheat%20and%20other%20essentials%2C%20realistic%20photography%2C%20warm%20lighting%2C%20community%20welfare%20scene&width=800&height=400&seq=ratblog4&orientation=landscape"
            alt="Ration Card Update"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                સામાજિક કલ્યાણ
              </span>
              <span className="ml-4 text-gray-500 text-sm">5 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              રેશન કાર્ડ કેવી રીતે અપડેટ કરવું?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">રેશન કાર્ડ અપડેટ કરવાનું મહત્વ</h2>
              <p className="mb-4">
                રેશન કાર્ડમાં સમયાંતરે નવા સભ્યો ઉમેરવા, જૂના સભ્યોને દૂર કરવા અથવા અન્ય માહિતી અપડેટ કરવાની જરૂર પડે છે. આ પ્રક્રિયા કરવી જરૂરી છે જેથી તમને યોગ્ય રાશનનો લાભ મળી શકે.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">કયા કયા અપડેટ કરી શકાય?</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>નવા સભ્યનું નામ ઉમેરવું</li>
                <li>જૂના સભ્યનું નામ કાઢવું</li>
                <li>સરનામું બદલવું</li>
                <li>આવકમાં ફેરફાર</li>
                <li>કેટેગરી બદલવી (APL/BPL/AAY)</li>
                <li>મોબાઇલ નંબર અપડેટ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">જરૂરી દસ્તાવેજો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>વર્તમાન રેશન કાર્ડ</li>
                <li>આધાર કાર્ડ (બધા સભ્યોના)</li>
                <li>આવકનો પુરાવો</li>
                <li>સરનામાંનો પુરાવો</li>
                <li>જન્મ પ્રમાણપત્ર (નવા સભ્ય માટે)</li>
                <li>મૃત્યુ પ્રમાણપત્ર (જૂના સભ્ય દૂર કરવા માટે)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ઓનલાઇન અપડેટ પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>તમારા રાજ્યના Food &amp; Supply વિભાગની વેબસાઇટ પર જાઓ</li>
                <li>"Ration Card Services" પર ક્લિક કરો</li>
                <li>"Update/Modify Details" વિકલ્પ પસંદ કરો</li>
                <li>રેશન કાર્ડ નંબર દાખલ કરો</li>
                <li>જે માહિતી બદલવાની છે તે સિલેક્ટ કરો</li>
                <li>નવી માહિતી ભરો</li>
                <li>જરૂરી દસ્તાવેજો અપલોડ કરો</li>
                <li>અરજી સબમિટ કરો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ઓફલાઇન પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>નજીકના તાલુકા કચેરી અથવા CSC સેન્ટર પર જાઓ</li>
                <li>અપડેટ ફોર્મ ભરો</li>
                <li>જરૂરી દસ્તાવેજો જોડો</li>
                <li>ફી ભરો (જો લાગુ હોય)</li>
                <li>રસીદ લઈને રાખો</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">વિવિધ રાજ્યોની વેબસાઇટ:</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• ગુજરાત: ipds.gujarat.gov.in</li>
                  <li>• મહારાષ્ટ્ર: aharvat.maharashtra.gov.in</li>
                  <li>• કર્ણાટક: ahara.kar.nic.in</li>
                  <li>• તમિલનાડુ: tnpds.gov.in</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સ્ટેટસ ટ્રેક કરવાની રીત</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>રાજ્યની Food વિભાગની વેબસાઇટ પર જાઓ</li>
                <li>"Track Application Status" પર ક્લિક કરો</li>
                <li>Application ID અથવા Reference Number દાખલ કરો</li>
                <li>"Check Status" પર ક્લિક કરો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સામાન્ય સમસ્યાઓ અને ઉકેલ</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-2">સમસ્યા: નામ સ્પેલિંગ રોંગ છે</h3>
                <p className="text-yellow-700 text-sm mb-3">
                  ઉકેલ: આધાર કાર્ડ અનુસાર સ્પેલિંગ કરેક્શન અરજી કરો
                </p>
                
                <h3 className="font-semibold text-yellow-800 mb-2">સમસ્યા: કાર્ડ બ્લોક થયું છે</h3>
                <p className="text-yellow-700 text-sm">
                  ઉકેલ: તાલુકા સપ્લાઇ ઓફિસરને મળો અને કારણ જાણો
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ફી સ્ટ્રક્ચર</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>નવું સભ્ય ઉમેરવા: ₹25-50</li>
                <li>સભ્ય દૂર કરવા: ₹25</li>
                <li>સરનામું બદલવા: ₹50-100</li>
                <li>કેટેગરી બદલવા: ₹100</li>
                <li>ડુપ્લિકેટ કાર્ડ: ₹50-100</li>
              </ul>

              <div className="text-center mt-8">
                <Link 
                  href="/tools/ration-card"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  રેશન કાર્ડ સ્ટેટસ ચેક કરો
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}