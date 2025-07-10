import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pacifico">DesiGovTools</h3>
            <p className="text-gray-300 text-sm">
              ભારતીય નાગરિકો માટે સરકારી સેવાઓ અને યોજનાઓની સ્થિતિ ચકાસવા માટે સરળ અને મફત ટૂલ્સ
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">ઉપયોગી લિંક્સ</h4>
            <div className="space-y-2 text-sm">
              <Link href="/tools" className="block text-gray-300 hover:text-white">
                બધા ટૂલ્સ
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white">
                બ્લોગ
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white">
                અમારા વિશે
              </Link>
              <Link href="/privacy" className="block text-gray-300 hover:text-white">
                પ્રાઇવસી પોલિસી
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">સંપર્ક</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>ઈમેઇલ: info@desigovtools.com</p>
              <p>ફોન: +91 98765 43210</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 DesiGovTools. બધા હક્કો સુરક્ષિત.</p>
        </div>
      </div>
    </footer>
  );
}