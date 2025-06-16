import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Star, Users } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { TeamMember } from '../types';

// Sample team data
const teamData: TeamMember[] = [
  {
    id: '1',
    name: 'Alexander Arias',
    position: 'Founder & Director',
    bio: "Early childhood educator with a passion for creating playful learning spaces for children.",
    image: 'https://images.pexels.com/photos/5905498/pexels-photo-5905498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Moana Barroso',
    position: 'Creative Lead',
    bio: "Specialist in creative programs and early stimulation, designing unique educational experiences for our little guests.",
    image: 'https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-80 bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative container-custom h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3933024/pexels-photo-3933024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Fundadores de PixieCoffeePlace"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-xl shadow-lg">
                  <p className="text-dark font-bold">Founded in 2025 🎂</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                PixieCoffeePlace was born from the passion of two parents who dreamed of creating a space where children could learn and have fun in a safe and stimulating environment, while parents enjoyed quality time.
              </p>
              <p className="text-gray-600 mb-6">
                After years working in early childhood education and creative programs, they joined forces to create this unique concept in Buenos Aires: a family café with pedagogically designed play areas, specialized classes, and a delicious, healthy menu.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To inspire learning, creativity, and connection for children and families through playful experiences and a welcoming community space.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do at PixieCoffeePlace"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Care & Safety</h3>
              <p className="text-gray-600">
                Children's safety is our number one priority. All our spaces are designed with their well-being in mind and under constant supervision.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Star size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality & Excellence</h3>
              <p className="text-gray-600">
                We are committed to offering the highest quality in every detail, from our educational materials to the ingredients in our menu.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community & Inclusion</h3>
              <p className="text-gray-600">
                We create a space where all families are welcome, fostering diversity and building a community united by love for children.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Team"
            subtitle="The people who make the magic of PixieCoffeePlace possible"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Journey"
            subtitle="The evolution of PixieCoffeePlace from its beginning to today"
            center
          />
          
          <div className="max-w-3xl mx-auto mt-8">
            {[
              {
                year: '2021',
                title: 'The Idea',
                description: 'The concept of PixieCoffeePlace is born during the pandemic, seeking to create a safe space for families.'
              },
              {
                year: '2022',
                title: 'First Steps',
                description: 'Official opening of PixieCoffeePlace in Palermo, with two play areas and a small café.'
              },
              {
                year: '2023',
                title: 'Growth',
                description: 'Expansion of the space including new themed areas and launch of the classes and workshops program.'
              },
              {
                year: '2024',
                title: 'Consolidation',
                description: 'Launch of the online store, team expansion, and recognition as one of the best childrens spaces in Australia.'
              },
              {
                year: '2025',
                title: 'Future',
                description: 'Plans to open a second location and expand the concept to other cities in Australia.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="w-24 mr-8 text-center flex-shrink-0">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary text-white font-bold">
                    {item.year}
                  </div>
                  {index < 4 && (
                    <div className="w-0.5 h-full bg-primary/30 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;