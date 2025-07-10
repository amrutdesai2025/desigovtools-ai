'use client';
import Link from 'next/link';

export default function PANLinkBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=PAN%20card%20and%20Aadhaar%20card%20documents%20on%20clean%20white%20background%2C%20official%20Indian%20government%20identity%20cards%2C%20realistic%20photography%2C%20professional%20document%20photography%20style%2C%20clear%20and%20sharp%20details&width=800&height=400&seq=panblog2&orientation=landscape"
            alt="PAN Aadhaar Link"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                દસ્તાવેજો
              </span>
              <span className="ml-4 text-gray-500 text-sm">4 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              પાન કાર્ડ કેવી રીતે લિંક કરવું?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">પાન-આધાર લિંક કરવાનું મહત્વ</h2>
              <p className="mb-4">
                સરકાર દ્વારા પાન કાર્ડને આધાર કાર્ડ સાથે લિંક કરવું ફરજિયાત બનાવવામાં આવ્યું છે. આ લિંકિંગ ટેક્સ ચોરી અટકાવવા અને વ્યવસ્થામાં પારદર્શિતા લાવવા માટે જરૂરી છે.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ઓનલાઇન લિંક કરવાની રીત</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>incometax.gov.in વેબસાઇટ પર જાઓ</li>
                <li>"Link Aadhaar" વિકલ્પ પર ક્લિક કરો</li>
                <li>તમારો પાન નંબર દાખલ કરો</li>
                <li>આધાર નંબર દાખલ કરો</li>
                <li>આધાર કાર્ડ પરનું નામ દાખલ કરો</li>
                <li>મોબાઇલ નંબર દાખલ કરો</li>
                <li>OTP વેરિફાઇ કરો</li>
                <li>"Link Aadhaar" બટન દબાવો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">SMS થી લિંક કરવાની રીત</h2>
              <p className="mb-4">
                તમે SMS ના માધ્યમથી પણ પાન-આધાર લિંક કર શકો છો:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="font-mono text-sm">
                  UIDPAN&lt;space&gt;&lt;12 digit Aadhaar&gt;&lt;space&gt;&lt;10 digit PAN&gt;
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  આને 567678 અથવા 56161 પર SMS કરો
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">મહત્વપૂર્ણ બાબતો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>પાન અને આધાર કાર્ડ પરનું નામ સમાન હોવું જોઈએ</li>
                <li>જન્મ તારીખ મેચ થવી જોઈએ</li>
                <li>મોબાઇલ નંબર આધાર સાથે રજિસ્ટર્ડ હોવો જોઈએ</li>
                <li>લિંકિંગ મફત છે</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">લિંક સ્ટેટસ ચેક કરવાની રીત</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>incometax.gov.in પર જાઓ</li>
                <li>"Link Aadhaar Status" પર ક્લિક કરો</li>
                <li>પાન નંબર દાખલ કરો</li>
                <li>આધાર નંબર દાખલ કરો</li>
                <li>"View Link Aadhaar Status" દબાવો</li>
              </ol>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <h3 className="font-semibold text-red-800 mb-2">નામ મેચ ન થાય તો શું કરવું?</h3>
                <ul className="text-red-700 text-sm">
                  <li>• પાન કાર્ડમાં નામ સુધારો કરાવો</li>
                  <li>• અથવા આધાર કાર્ડમાં નામ અપડેટ કરાવો</li>
                  <li>• બંને કાર્ડ પર સમાન નામ હોવું જરૂરી</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">લિંકિંગના ફાયદા</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>ITR ફાઇલ કરવામાં સુવિધા</li>
                <li>ઝડપી ટેક્સ રિફંડ</li>
                <li>બેંક એકાઉન્ટ ખોલવામાં સુવિધા</li>
                <li>સરકારી યોજનાઓનો લાભ</li>
              </ul>

              <div className="text-center mt-8">
                <Link 
                  href="/tools/pan-aadhaar-link"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  પાન-આધાર લિંક સ્ટેટસ ચેક કરો
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}