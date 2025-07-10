
'use client';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'પીએમ કિસાન યોજના શું છે?',
    excerpt: 'PM કિસાન યોજનાની સંપૂર્ણ માહિતી, લાભ અને અરજીની પ્રક્રિયા',
    slug: 'pm-kisan-yojana-kya-che',
    category: 'કૃષિ યોજના',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20farmer%20working%20in%20green%20agricultural%20field%20with%20traditional%20farming%20tools%2C%20realistic%20photography%20style%20with%20natural%20lighting%2C%20rural%20landscape%20background%2C%20vibrant%20green%20crops%2C%20clear%20blue%20sky%2C%20peaceful%20farming%20scene&width=400&height=250&seq=blog1&orientation=landscape'
  },
  {
    title: 'પાન કાર્ડ કેવી રીતે લિંક કરવું?',
    excerpt: 'પાન કાર્ડને આધાર કાર્ડ સાથે લિંક કરવાની સંપૂર્ણ પ્રક્રિયા',
    slug: 'pan-card-link-kevi-rite',
    category: 'દસ્તાવેજો',
    readTime: '4 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=PAN%20card%20and%20Aadhaar%20card%20documents%20on%20clean%20white%20background%2C%20official%20Indian%20government%20identity%20cards%2C%20realistic%20photography%2C%20professional%20document%20photography%20style%2C%20clear%20and%20sharp%20details&width=400&height=250&seq=blog2&orientation=landscape'
  },
  {
    title: 'ઇ-શ્રમ કાર્ડના ફાયદા',
    excerpt: 'e-SHRAM કાર્ડ બનાવવાના ફાયદા અને અરજીની રીત',
    slug: 'e-shram-card-na-faayda',
    category: 'રોજગાર',
    readTime: '6 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20construction%20workers%20and%20laborers%20with%20safety%20equipment%2C%20diverse%20group%20of%20working%20people%2C%20realistic%20photography%2C%20construction%20site%20background%2C%20professional%20work%20environment%2C%20bright%20daylight&width=400&height=250&seq=blog3&orientation=landscape'
  },
  {
    title: 'રેશન કાર્ડ કેવી રીતે અપડેટ કરવું?',
    excerpt: 'રેશન કાર્ડમાં નવા સભ્યો ઉમેરવા અને માહિતી અપડેટ કરવાની પ્રક્રીયા',
    slug: 'ration-card-update-kevi-rite',
    category: 'સામાજિક કલ્યાણ',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20family%20receiving%20food%20grains%20from%20government%20ration%20shop%2C%20traditional%20ration%20store%20with%20rice%20wheat%20and%20other%20essentials%2C%20realistic%20photography%2C%20warm%20lighting%2C%20community%20welfare%20scene&width=400&height=250&seq=blog4&orientation=landscape'
  },
  {
    title: 'આયુષ્માન ભારત યોજના',
    excerpt: 'આયુષ્માન ભારત હેલ્થ કાર્ડ અને તેના ફાયદા વિશે જાણો',
    slug: 'ayushman-bharat-yojana',
    category: 'સ્વાસ્થ્ય',
    readTime: '7 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20healthcare%20scene%20with%20doctor%20and%20patient%2C%20modern%20hospital%20environment%2C%20medical%20consultation%2C%20healthcare%20card%2C%20professional%20medical%20setting%2C%20bright%20and%20clean%20atmosphere&width=400&height=250&seq=blog5&orientation=landscape'
  },
  {
    title: 'વૃદ્ધત્વ પેન્શન યોજના',
    excerpt: 'વરિષ્ઠ નાગરિકો માટે પેન્શન યોજનાઓ અને અરજીની રીત',
    slug: 'vruddhatva-pension-yojana',
    category: 'પેન્શન',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Happy%20elderly%20Indian%20couple%20sitting%20together%2C%20senior%20citizens%20smiling%2C%20traditional%20Indian%20clothing%2C%20peaceful%20home%20environment%2C%20warm%20family%20atmosphere%2C%20realistic%20photography&width=400&height=250&seq=blog6&orientation=landscape'
  },
  {
    title: 'આધાર કાર્ડ કેવી રીતે ડાઉનલોડ કરવું?',
    excerpt: 'આધાર કાર્ડ ઓનલાઇન ડાઉનલોડ કરવાની સંપૂર્ણ પ્રક્રિયા',
    slug: 'aadhaar-card-download-kevi-rite',
    category: 'દસ્તાવેજો',
    readTime: '4 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Aadhaar%20card%20document%20on%20laptop%20screen%2C%20digital%20identity%20verification%2C%20Indian%20official%20document%2C%20modern%20technology%2C%20clean%20office%20environment%2C%20professional%20setup&width=400&height=250&seq=blog7&orientation=landscape'
  },
  {
    title: 'ડ્રાઇવિંગ લાઇસન્સ ઓનલાઇન અરજી',
    excerpt: 'ડ્રાઇવિંગ લાઇસન્સ માટે ઓનલાઇન અરજી કેવી રીતે કરવી?',
    slug: 'driving-license-online-application',
    category: 'પરિવહન',
    readTime: '6 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20person%20holding%20driving%20license%20with%20car%20in%20background%2C%20RTO%20office%20scene%2C%20official%20document%20photography%2C%20professional%20lighting%2C%20clear%20and%20sharp%20details&width=400&height=250&seq=blog8&orientation=landscape'
  },
  {
    title: 'પાસપોર્ટ માટે અરજી કેવી રીતે કરવી?',
    excerpt: 'પાસપોર્ટ બનાવવાની સંપૂર્ણ પ્રક્રિયા અને જરૂરી દસ્તાવેજો',
    slug: 'passport-application-process',
    category: 'દસ્તાવેજો',
    readTime: '8 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20passport%20and%20application%20documents%20on%20desk%2C%20official%20government%20documents%2C%20passport%20office%20environment%2C%20professional%20photography%2C%20bright%20lighting&width=400&height=250&seq=blog9&orientation=landscape'
  },
  {
    title: 'જાતિ પ્રમાણપત્ર કેવી રીતે મેળવવું?',
    excerpt: 'જાતિ પ્રમાણપત્ર માટે અરજી અને જરૂરી દસ્તાવેજોની માહિતી',
    slug: 'caste-certificate-kevi-rite-melvo',
    category: 'પ્રમાણપત્રો',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Official%20Indian%20government%20certificate%20documents%2C%20legal%20papers%20on%20office%20desk%2C%20formal%20documentation%2C%20professional%20environment%2C%20administrative%20office%20setting&width=400&height=250&seq=blog10&orientation=landscape'
  },
  {
    title: 'બેરોજગારી ભથ્થું કેવી રીતે મેળવવું?',
    excerpt: 'બેરોજગારી ભથ્થા માટે અરજી કરવાની પ્રક્રિયા અને પાત્રતા',
    slug: 'unemployment-allowance-kevi-rite',
    category: 'રોજગાર',
    readTime: '6 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Young%20Indian%20job%20seekers%20at%20employment%20office%2C%20people%20waiting%20for%20interviews%2C%20professional%20job%20search%20environment%2C%20realistic%20photography%2C%20hopeful%20atmosphere&width=400&height=250&seq=blog11&orientation=landscape'
  },
  {
    title: 'મહિલા સુરક્ષા યોજનાઓ',
    excerpt: 'મહિલાઓ માટે વિવિધ સરકારી સુરક્ષા અને કલ્યાણ યોજનાઓ',
    slug: 'mahila-suraksha-yojana',
    category: 'મહિલા કલ્યાણ',
    readTime: '7 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20women%20empowerment%20scene%2C%20confident%20women%20in%20traditional%20and%20modern%20clothing%2C%20community%20support%2C%20bright%20positive%20environment%2C%20diverse%20group%20of%20women&width=400&height=250&seq=blog12&orientation=landscape'
  },
  {
    title: 'બાલ આધાર કાર્ડ કેવી રીતે બનાવવું?',
    excerpt: '5 વર્ષથી ઓછી ઉંમરના બાળકો માટે બાલ આધાર કાર્ડની પ્રક્રિયા',
    slug: 'bal-aadhaar-card-kevi-rite',
    category: 'દસ્તાવેજો',
    readTime: '4 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20family%20with%20small%20children%20at%20Aadhaar%20enrollment%20center%2C%20parent%20and%20child%20registration%20process%2C%20official%20government%20office%2C%20family%20documentation%20scene&width=400&height=250&seq=blog13&orientation=landscape'
  },
  {
    title: 'ગેસ સબસિડી કેવી રીતે ચકાસવી?',
    excerpt: 'LPG ગેસ સબસિડીની સ્થિતિ અને બેંક ટ્રાન્સફર ચકાસવાની રીત',
    slug: 'gas-subsidy-kevi-rite-check-karvi',
    category: 'સબસિડી',
    readTime: '4 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20kitchen%20with%20LPG%20gas%20cylinder%20and%20cooking%20setup%2C%20traditional%20Indian%20home%20cooking%2C%20gas%20stove%20and%20cylinder%2C%20domestic%20scene%2C%20warm%20lighting&width=400&height=250&seq=blog14&orientation=landscape'
  },
  {
    title: 'બિઝનેસ લોન કેવી રીતે મેળવવી?',
    excerpt: 'મુદ્રા લોન અને અન્ય બિઝનેસ લોન માટે અરજીની સંપૂર્ણ પ્રક્રિયા',
    slug: 'business-loan-kevi-rite-melvo',
    category: 'લોન',
    readTime: '8 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20small%20business%20owner%20at%20shop%2C%20entrepreneur%20with%20products%2C%20small%20retail%20business%2C%20traditional%20Indian%20marketplace%2C%20successful%20business%20scene&width=400&height=250&seq=blog15&orientation=landscape'
  },
  {
    title: 'કિસાન ક્રેડિટ કાર્ડ કેવી રીતે મેળવવું?',
    excerpt: 'KCC કાર્ડ માટે અરજી, લાભ અને જરૂરી દસ્તાવેજોની માહિતી',
    slug: 'kisan-credit-card-kevi-rite',
    category: 'કૃષિ યોજના',
    readTime: '6 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20farmer%20holding%20credit%20card%20at%20bank%2C%20agricultural%20loan%20process%2C%20rural%20banking%20scene%2C%20farmer%20with%20traditional%20clothing%20at%20bank%20counter&width=400&height=250&seq=blog16&orientation=landscape'
  },
  {
    title: 'જમીનના કાગળો કેવી રીતે વેરિફાઈ કરવા?',
    excerpt: 'જમીનના દસ્તાવેજો અને માલિકીનું વેરિફિકેશન કરવાની રીત',
    slug: 'jamin-na-kagal-verify-kevi-rite',
    category: 'પ્રોપર્ટી',
    readTime: '7 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Land%20documents%20and%20property%20papers%20on%20desk%2C%20official%20real%20estate%20documents%2C%20property%20registration%20papers%2C%20legal%20documentation%2C%20professional%20environment&width=400&height=250&seq=blog17&orientation=landscape'
  },
  {
    title: 'શિક્ષણ લોન કેવી રીતે મેળવવી?',
    excerpt: 'ઉચ્ચ શિક્ષણ માટે એજ્યુકેશન લોનની અરજી અને પ્રક્રિયા',
    slug: 'education-loan-kevi-rite-melvo',
    category: 'શિક્ષણ',
    readTime: '7 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20students%20at%20university%20with%20books%20and%20laptop%2C%20higher%20education%20scene%2C%20college%20campus%20environment%2C%20students%20studying%2C%20academic%20atmosphere&width=400&height=250&seq=blog18&orientation=landscape'
  },
  {
    title: 'હેલ્થ કાર્ડ કેવી રીતે બનાવવું?',
    excerpt: 'આયુષ્માન ભારત અને અન્ય હેલ્થ કાર્ડ બનાવવાની પ્રક્રિયા',
    slug: 'health-card-kevi-rite-banavo',
    category: 'સ્વાસ્થ્ય',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20healthcare%20registration%20center%2C%20people%20applying%20for%20health%20cards%2C%20medical%20insurance%20enrollment%2C%20healthcare%20facility%2C%20professional%20medical%20environment&width=400&height=250&seq=blog19&orientation=landscape'
  },
  {
    title: 'ટ્રેન ટિકિટ કેવી રીતે બુક કરવી?',
    excerpt: 'IRCTC પર ઓનલાઇન ટ્રેન ટિકિટ બુક કરવાની સંપૂર્ણ પ્રક્રિયા',
    slug: 'train-ticket-book-kevi-rite',
    category: 'પરિવહન',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20railway%20station%20with%20trains%2C%20people%20booking%20tickets%20online%20on%20mobile%20phone%2C%20modern%20train%20travel%2C%20railway%20platform%20scene%2C%20transportation&width=400&height=250&seq=blog20&orientation=landscape'
  },
  {
    title: 'ITR ફાઇલ કેવી રીતે કરવું?',
    excerpt: 'ઇન્કમ ટેક્સ રિટર્ન ઓનલાઇન ફાઇલ કરવાની સરળ પ્રક્રિયા',
    slug: 'itr-file-kevi-rite-karvu',
    category: 'ટેક્સ',
    readTime: '8 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Person%20filing%20tax%20returns%20on%20computer%2C%20ITR%20forms%20and%20documents%2C%20tax%20calculation%2C%20professional%20accounting%20environment%2C%20financial%20documents&width=400&height=250&seq=blog21&orientation=landscape'
  },
  {
    title: 'વોટર આઈડી કાર્ડ કેવી રીતે બનાવવું?',
    excerpt: 'નવું વોટર આઈડી કાર્ડ બનાવવા અને અપડેટ કરવાની પ્રક્રિયા',
    slug: 'voter-id-card-kevi-rite-banavo',
    category: 'દસ્તાવેજો',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20election%20commission%20office%2C%20people%20registering%20for%20voter%20ID%2C%20voting%20registration%20process%2C%20democratic%20participation%2C%20official%20government%20center&width=400&height=250&seq=blog22&orientation=landscape'
  },
  {
    title: 'બેંક એકાઉન્ટ કેવી રીતે ખોલવું?',
    excerpt: 'નવું બેંક એકાઉન્ટ ખોલવા માટે જરૂરી દસ્તાવેજો અને પ્રક્રિયા',
    slug: 'bank-account-kevi-rite-kholvu',
    category: 'બેંકિંગ',
    readTime: '6 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20bank%20interior%20with%20customers%20and%20staff%2C%20bank%20account%20opening%20process%2C%20people%20at%20bank%20counter%2C%20professional%20banking%20environment%2C%20financial%20services&width=400&height=250&seq=blog23&orientation=landscape'
  },
  {
    title: 'ફ્રી મોબાઇલ યોજના',
    excerpt: 'મહિલાઓ અને વિદ્યાર્થીઓ માટે ફ્રી મોબાઇલ ફોન યોજનાઓ',
    slug: 'free-mobile-yojana',
    category: 'ટેકનોલોજી',
    readTime: '5 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20women%20and%20students%20receiving%20free%20mobile%20phones%2C%20government%20distribution%20program%2C%20technology%20empowerment%2C%20community%20gathering%2C%20digital%20inclusion%20initiative&width=400&height=250&seq=blog24&orientation=landscape'
  },
  {
    title: 'ડિજિટલ ઇન્ડિયા સેવાઓ',
    excerpt: 'ડિજિટલ ઇન્ડિયા પોર્ટલ પર ઉપલબ્ધ વિવિધ ઓનલાઇન સેવાઓ',
    slug: 'digital-india-services',
    category: 'ડિજિટલ સેવા',
    readTime: '6 મિનિટ વાંચન',
    image: 'https://readdy.ai/api/search-image?query=Indian%20people%20using%20digital%20services%20on%20computers%20and%20smartphones%2C%20modern%20technology%20adoption%2C%20digital%20literacy%20scene%2C%20government%20e-services%2C%20tech-enabled%20citizens&width=400&height=250&seq=blog25&orientation=landscape'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            મદદરૂપ બ્લોગ
          </h1>
          <p className="text-xl text-gray-600">
            સરકારી યોજનાઓ અને સેવાઓ વિશે ઉપયોગી માહિતી
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span className="text-blue-600 font-medium">વાંચો →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
