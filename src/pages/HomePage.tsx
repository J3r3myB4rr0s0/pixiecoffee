import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, Book, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaText={t('home.hero.cta')}
        ctaLink="/booking"
        backgroundImage="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
            >
              <SectionTitle
                title={t('home.intro.title')}
                subtitle={t('home.intro.text')}
                rainbow
              />
              <Link to="/about" className="btn-secondary mt-4">
                {t('home.intro.button')}
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3933021/pexels-photo-3933021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Niños jugando en PixieCoffeePlace"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-xl shadow-lg">
                  <p className="text-dark font-bold text-xl">{t('home.intro.fun')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title={t('home.features.title')}
            subtitle={t('home.features.subtitle')}
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Play size={32} />}
              title={t('home.features.play.title')}
              description={t('home.features.play.text')}
              delay={0.1}
            />
            <FeatureCard
              icon={<Book size={32} />}
              title={t('home.features.classes.title')}
              description={t('home.features.classes.text')}
              delay={0.3}
            />
            <FeatureCard
              icon={<Coffee size={32} />}
              title={t('home.features.cafe.title')}
              description={t('home.features.cafe.text')}
              delay={0.5}
            />
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title={t('home.gallery.title')}
            subtitle={t('home.gallery.subtitle')}
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/3662833/pexels-photo-3662833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3662889/pexels-photo-3662889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1148999/pexels-photo-1148999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-lg overflow-hidden shadow-md ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt="Niños jugando en PixieCoffeePlace"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <SectionTitle
            title={t('home.cta.title')}
            subtitle={t('home.cta.text')}
            center
            light
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/booking"
              className="btn-accent text-lg py-4 px-8"
            >
              {t('home.cta.button')} 🎉
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section - Temporarily Hidden
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title={t('home.testimonials.title')}
            subtitle={t('home.testimonials.subtitle')}
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: t('home.testimonials.1.text'),
                author: t('home.testimonials.1.author'),
                role: t('home.testimonials.1.role')
              },
              {
                text: t('home.testimonials.2.text'),
                author: t('home.testimonials.2.author'),
                role: t('home.testimonials.2.role')
              },
              {
                text: t('home.testimonials.3.text'),
                author: t('home.testimonials.3.author'),
                role: t('home.testimonials.3.role')
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm"
              >
                <svg className="w-10 h-10 text-secondary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  );
};

export default HomePage;