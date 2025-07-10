'use client';
import Link from 'next/link';

export default function PMKisanBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Indian%20farmer%20working%20in%20green%20agricultural%20field%20with%20traditional%20farming%20tools%2C%20realistic%20photography%20style%20with%20natural%20lighting%2C%20rural%20landscape%20background%2C%20vibrant%20green%20crops%2C%20clear%20blue%20sky%2C%20peaceful%20farming%20scene&width=800&height=400&seq=pmblog1&orientation=landscape"
            alt="PM Kisan Yojana"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                કૃષિ યોજના
              </span>
              <span className="ml-4 text-gray-500 text-sm">5 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              પીએમ કિસાન યોજના શું છે?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">પીએમ કિસાન યોજનાનું પરિચય</h2>
              <p className="mb-4">
                પ્રધાનમંત્રી કિસાન સન્માન નિધિ (PM-KISAN) યોજના ભારત સરકારની એક મહત્વપૂર્ણ કેન્દ્રીય યોજના છે. આ યોજના હેઠળ દેશના નાના અને મધ્યમ કિસાનોને આર્થિક સહાય આપવામાં આવે છે.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">યોજનાના મુખ્ય લાભો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>દર વર્ષે ₹6000 ની આર્થિક સહાય</li>
                <li>વર્ષમાં 3 હપ્તામાં ₹2000-₹2000</li>
                <li>સીધું બેંક એકાઉન્ટમાં ટ્રાન્સફર</li>
                <li>કોઈ મધ્યસ્થી નહીં</li>
                <li>ઓનલાઇન અરજી કરી શકાય</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">પાત્રતા</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>નાના અને મધ્યમ કિસાનો</li>
                <li>2 હેક્ટર સુધીની જમીન ધરાવતા</li>
                <li>ભારતીય નાગરિક હોવા જોઈએ</li>
                <li>કોઈ સરકારી નોકરી ન હોવી જોઈએ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">જરૂરી દસ્તાવેજો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>આધાર કાર્ડ</li>
                <li>બેંક પાસબુક</li>
                <li>જમીનના કાગળો</li>
                <li>મોબાઇલ નંબર</li>
                <li>પાસપોર્ટ સાઇઝ ફોટો</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">અરજી કેવી રીતે કરવી?</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>pmkisan.gov.in પર જાઓ</li>
                <li>"New Farmer Registration" પર ક્લિક કરો</li>
                <li>આધાર નંબર દાખલ કરો</li>
                <li>બધી માહિતી ભરો</li>
                <li>જરૂરી દસ્તાવેજો અપલોડ કરો</li>
                <li>Submit બટન દબાવો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">સ્ટેટસ કેવી રીતે ચેક કરવો?</h2>
              <p className="mb-4">
                તમારી અરજીનો સ્ટેટસ ચેક કરવા માટે PM કિસાન વેબસાઇટ પર "Beneficiary Status" પર ક્લિક કરો અને તમારું આધાર નંબર અથવા એકાઉન્ટ નંબર દાખલ કરો.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">મહત્વપૂર્ણ સૂચના:</h3>
                <ul className="text-green-700 text-sm">
                  <li>• કોઈ પણ દલાલ અથવા એજન્ટને પૈસા ન આપો</li>
                  <li>• આ યોજના સંપૂર્ણ મફત છે</li>
                  <li>• નકલી વેબસાઇટથી સાવચેત રહો</li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <Link 
                  href="/tools/pm-kisan"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  પીએમ કિસાન સ્ટેટસ ચેક કરો
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}