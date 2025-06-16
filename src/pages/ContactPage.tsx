import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24">
      <div className="container-custom section-padding">
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={22} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>{t('contact.address')}</span>
                </li>
                <li className="flex items-center">
                  <Phone size={22} className="text-primary mr-3 flex-shrink-0" />
                  <span>{t('contact.phone')}</span>
                </li>
                <li className="flex items-center">
                  <Mail size={22} className="text-primary mr-3 flex-shrink-0" />
                  <span>{t('contact.email')}</span>
                </li>
                <li className="flex items-start">
                  <Clock size={22} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>{t('contact.hours')}</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">{t('footer.follow')}</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/pixiecoffeeplace" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-secondary/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="https://facebook.com/pixiecoffeeplace" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-secondary/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="https://twitter.com/pixiecoffeeplace" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-secondary/80 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="PixieCoffeePlace Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.837032249715!2d-58.43277929999999!3d-34.5830895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e0a70b291d%3A0x7cc84ba20830c479!2sPalermo%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2ses!4v1641729546090!5m2!1ses!2ses"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Answers to common questions"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                question: "What are your opening hours?",
                answer: "We are open Monday through Saturday, from 9:00 am to 7:00 pm. We are closed on Sundays for maintenance."
              },
              {
                question: "Do I need a reservation?", 
                answer: "For regular visits, we recommend making a reservation, especially on weekends. For birthdays and special events, a reservation is required."
              },
              {
                question: "Is parking available?",
                answer: "We have our own parking lot for customers, with limited spaces. There is also public parking one block away."
              },
              {
                question: "Are parents allowed in classes?",
                answer: "Yes, parents must accompany children under 3 years old. For children over 3 years old, it depends on the specific activity."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;