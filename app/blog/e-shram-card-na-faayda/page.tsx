'use client';
import Link from 'next/link';

export default function EShramBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=Indian%20construction%20workers%20and%20laborers%20with%20safety%20equipment%2C%20diverse%20group%20of%20working%20people%2C%20realistic%20photography%2C%20construction%20site%20background%2C%20professional%20work%20environment%2C%20bright%20daylight&width=800&height=400&seq=eshblog3&orientation=landscape"
            alt="e-SHRAM Card"
            className="w-full h-64 object-cover object-top"
          />
          
          <div className="p-8">
            <div className="mb-6">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                રોજગાર
              </span>
              <span className="ml-4 text-gray-500 text-sm">6 મિનિટ વાંચન</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              ઇ-શ્રમ કાર્ડના ફાયદા
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ઇ-શ્રમ કાર્ડ શું છે?</h2>
              <p className="mb-4">
                ઇ-શ્રમ કાર્ડ એ ભારત સરકારનું એક મહત્વપૂર્ણ પોર્ટલ છે જે અસંગઠિત ક્ષેત્રના કામદારોનું રજિસ્ટ્રેશન કરે છે. આ કાર્ડથી મજૂરો અને કામદારોને વિવિધ સરકારી યોજનાઓનો લાભ મળે છે.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">મુખ્ય ફાયદા</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>₹2 લાખનું ફ્રી જીવન વીમો</li>
                <li>₹1 લાખનું અકસ્માત વીમો</li>
                <li>કોવિડ અને અન્ય સહાય યોજનાઓ</li>
                <li>રોજગાર સબંધી માહિતી</li>
                <li>પેન્શન યોજનાઓનો લાભ</li>
                <li>સ્કિલ ડેવલોપમેન્ટ પ્રોગ્રામ</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">કોણ અરજી કરી શકે?</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>અસંગઠિત ક્ષેત્રના કામદારો</li>
                <li>મજૂરો અને દિહાડી કામદારો</li>
                <li>ઘરેલું કામદારો</li>
                <li>ડ્રાઇવર, સિક્યુરિટી ગાર્ડ</li>
                <li>દરજી, નાઈ, ધોબી</li>
                <li>16-59 વર્ષ વયના લોકો</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">જરૂરી દસ્તાવેજો</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>આધાર કાર્ડ</li>
                <li>બેંક પાસબુક અથવા કેન્સલ ચેક</li>
                <li>મોબાઇલ નંબર (આધાર લિંક)</li>
                <li>પાસપોર્ટ સાઇઝ ફોટો</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">રજિસ્ટ્રેશન પ્રક્રિયા</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>eshram.gov.in વેબસાઇટ પર જાઓ</li>
                <li>"Register on e-SHRAM" પર ક્લિક કરો</li>
                <li>આધાર નંબર દાખલ કરો</li>
                <li>OTP વેરિફાઇ કરો</li>
                <li>વ્યક્તિગત માહિતી ભરો</li>
                <li>કામનો પ્રકાર પસંદ કરો</li>
                <li>બેંક ડિટેઇલ્સ ભરો</li>
                <li>Submit કરો</li>
              </ol>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">વીમાનો લાભ કેવી રીતે લેવો?</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">જીવન વીમા:</h3>
                <ul className="text-blue-700 text-sm mb-4">
                  <li>• કુદરતી મૃત્યુ: ₹2 લાખ</li>
                  <li>• કુટુંબને સીધો લાભ</li>
                  <li>• કોઈ પ્રીમિયમ ભરવાની જરૂર નહીં</li>
                </ul>
                <h3 className="font-semibold text-blue-800 mb-2">અકસ્માત વીમા:</h3>
                <ul className="text-blue-700 text-sm">
                  <li>• સંપૂર્ણ અપંગતા: ₹2 લાખ</li>
                  <li>• આંશિક અપંગતા: ₹1 લાખ</li>
                  <li>• અકસ્માતથી મૃત્યુ: ₹2 લાખ</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">કાર્ડ ડાઉનલોડ કેવી રીતે કરવું?</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>eshram.gov.in પર જાઓ</li>
                <li>"Download Card" પર ક્લિક કરો</li>
                <li>UAN નંબર દાખલ કરો</li>
                <li>જન્મ તારીખ દાખલ કરો</li>
                <li>"Download" પર ક્લિક કરો</li>
              </ol>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">મહત્વપૂર્ણ સૂચનાઓ:</h3>
                <ul className="text-green-700 text-sm">
                  <li>• રજિસ્ટ્રેશન સંપૂર્ણ મફત છે</li>
                  <li>• કોઈ એજન્ટને પૈસા ન આપો</li>
                  <li>• UAN નંબર સુરક્ષિત રાખો</li>
                  <li>• નકલી વેબસાઇટથી સાવચેત રહો</li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <Link 
                  href="/tools/e-shram-card"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-colors !rounded-button"
                >
                  ઇ-શ્રમ કાર્ડ ડાઉનલોડ કરો
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}