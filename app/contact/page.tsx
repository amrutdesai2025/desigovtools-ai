'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            અમને સંપર્ક કરો
          </h1>
          <p className="text-lg text-gray-600">
            આપના પ્રશ્નો, સુઝાવો અથવા મદદ માટે અમને સંપર્ક કરો
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              સંપર્ક વિગતો
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">ઈમેઇલ</h3>
                  <p className="text-gray-600">info@desigovtools.com</p>
                  <p className="text-gray-600">support@desigovtools.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">ફોન</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">સોમવાર થી શનિવાર: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-purple-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">સરનામું</h3>
                  <p className="text-gray-600">
                    123, ટેક પાર્ક<br />
                    અમદાવાદ, ગુજરાત - 380015<br />
                    ભારત
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                <i className="ri-time-line text-blue-600 mr-2"></i>
                કાર્ય સમય
              </h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>સોમવાર થી શુક્રવાર: 9:00 AM - 7:00 PM</p>
                <p>શનિવાર: 10:00 AM - 5:00 PM</p>
                <p>રવિવાર: બંધ</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              સંદેશો મોકલો
            </h2>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-green-700 font-medium">તમારો સંદેશો મોકલવામાં આવ્યો છે!</span>
                </div>
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  તમારું નામ *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="તમારું પૂરું નામ લખો"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  ઈમેઇલ સરનામું *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="તમારું ઈમેઇલ એડ્રેસ લખો"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  વિષય *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">વિષય પસંદ કરો</option>
                  <option value="સામાન્ય પ્રશ્ન">સામાન્ય પ્રશ્ન</option>
                  <option value="તકનીકી સમસ્યા">તકનીકી સમસ્યા</option>
                  <option value="સુઝાવ">સુઝાવ</option>
                  <option value="ફીડબેક">ફીડબેક</option>
                  <option value="અન્ય">અન્ય</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  સંદેશો *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="તમારો સંદેશો અહીં લખો (મહત્તમ 500 અક્ષરો)"
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 અક્ષરો
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity !rounded-button"
              >
                <i className="ri-send-plane-line mr-2"></i>
                સંદેશો મોકલો
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}