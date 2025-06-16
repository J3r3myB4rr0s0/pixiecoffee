import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InlineWidget } from 'react-calendly';
import SectionTitle from '../components/ui/SectionTitle';
import BookingOption from '../components/ui/BookingOption';

const BookingPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    
    // Scroll to calendly widget
    setTimeout(() => {
      document.getElementById('booking-calendly')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };
  
  // Different Calendly URLs based on booking type
  const getCalendlyUrl = () => {
    switch(selectedOption) {
      case 'regular':
        return 'https://calendly.com/pixiecoffeeplace/regular-visit';
      case 'birthday':
        return 'https://calendly.com/pixiecoffeeplace/birthday-party';
      case 'special':
        return 'https://calendly.com/pixiecoffeeplace/special-event';
      default:
        return 'https://calendly.com/pixiecoffeeplace';
    }
  };
  
  return (
    <div className="pt-24">
      <div className="container-custom section-padding">
        <SectionTitle
          title={t('booking.title')}
          subtitle={t('booking.subtitle')}
          center
        />
        
        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <BookingOption
            title={t('booking.regular.title')}
            description={t('booking.regular.text')}
            image="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ctaText="Book a Visit"
            onSelect={() => handleSelectOption('regular')}
            index={0}
          />
          
          <BookingOption
            title={t('booking.birthday.title')}
            description={t('booking.birthday.text')}
            image="https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ctaText="Book a Birthday Party"
            onSelect={() => handleSelectOption('birthday')}
            index={1}
          />
          
          <BookingOption
            title={t('booking.special.title')}
            description={t('booking.special.text')}
            image="https://images.pexels.com/photos/3771831/pexels-photo-3771831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ctaText="Consult a Special Event"
            onSelect={() => handleSelectOption('special')}
            index={2}
          />
        </div>
        
        {/* Calendly Integration */}
        {selectedOption && (
          <div id="booking-calendly" className="mt-8">
            <SectionTitle
              title="Selecciona fecha y hora"
              subtitle="Elige el momento perfecto para tu visita"
              center
            />
            
            <div className="bg-white rounded-2xl shadow-lg p-4 overflow-hidden">
              <InlineWidget 
                url={getCalendlyUrl()}
                styles={{
                  height: '700px'
                }}
              />
            </div>
          </div>
        )}
        
        {/* FAQ Section */}
        <div className="mt-16">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our bookings"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                question: "Do I need to book to visit the café?",
                answer: "We recommend booking to ensure availability, especially on weekends. However, if there is space available, we also accept walk-ins."
              },
              {
                question: "What is the cancellation policy?",
                answer: "You can cancel or reschedule your booking up to 24 hours in advance at no cost. Cancellations made less than 24 hours in advance are non-refundable."
              },
              {
                question: "What does a regular visit include?",
                answer: "A regular visit includes access to all play areas for 2 hours, as well as a drink for the accompanying adult."
              },
              {
                question: "Do you have a special menu for children with allergies?",
                answer: "Yes, we offer gluten-free, lactose-free, and nut-free options. Please inform us of any allergies when making your booking."
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

export default BookingPage;