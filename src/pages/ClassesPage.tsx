import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/ui/SectionTitle';
import ClassCard from '../components/ui/ClassCard';
import { Class } from '../types';

// Sample class data
const classesData: Class[] = [
  {
    id: '1',
    title: 'Music & Movement for Babies',
    description: "An interactive music and movement class to stimulate babies' development and foster parent-child bonding.",
    image: 'https://images.pexels.com/photos/7139943/pexels-photo-7139943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ageGroup: '0-2',
    tags: ['music', 'movement'],
    duration: 45,
    capacity: 8,
    schedule: 'Monday & Wednesday, 10:00am'
  },
  {
    id: '2',
    title: 'Sensory Art Workshop',
    description: 'A creative space to explore different textures, colors, and materials through art activities tailored for little ones.',
    image: 'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ageGroup: '3-5',
    tags: ['sensory', 'creative'],
    duration: 60,
    capacity: 10,
    schedule: 'Tuesday & Thursday, 4:00pm'
  },
  {
    id: '3',
    title: 'Mini Chef: Fun Cooking',
    description: 'A fun introduction to the culinary world where kids learn to prepare simple and healthy recipes.',
    image: 'https://images.pexels.com/photos/4149260/pexels-photo-4149260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ageGroup: '6-8',
    tags: ['creative'],
    duration: 90,
    capacity: 8,
    schedule: 'Friday, 5:00pm'
  },
  {
    id: '4',
    title: 'Yoga for Kids',
    description: 'A playful class that introduces children to yoga through stories, imagination, and age-appropriate movements.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ageGroup: '3-5',
    tags: ['movement'],
    duration: 45,
    capacity: 12,
    schedule: 'Saturday, 11:00am'
  },
  {
    id: '5',
    title: 'Early Stimulation',
    description: 'Activities designed to boost cognitive, motor, and sensory development in babies during their first months of life.',
    image: 'https://images.pexels.com/photos/4473524/pexels-photo-4473524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ageGroup: '0-2',
    tags: ['sensory'],
    duration: 50,
    capacity: 6,
    schedule: 'Tuesday & Thursday, 10:00am'
  },
  {
    id: '6',
    title: 'Musical Storytelling',
    description: 'An immersive experience where stories come to life through music, sounds, and active participation.',
    image: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ageGroup: '3-5',
    tags: ['music', 'creative'],
    duration: 60,
    capacity: 15,
    schedule: 'Wednesday, 5:30pm'
  }
];

const ClassesPage: React.FC = () => {
  const { t } = useTranslation();
  const [ageFilter, setAgeFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [filteredClasses, setFilteredClasses] = useState<Class[]>(classesData);
  
  // Apply filters when they change
  useEffect(() => {
    let result = classesData;
    
    if (ageFilter !== 'all') {
      result = result.filter(item => item.ageGroup === ageFilter);
    }
    
    if (typeFilter !== 'all') {
      result = result.filter(item => item.tags.includes(typeFilter));
    }
    
    setFilteredClasses(result);
  }, [ageFilter, typeFilter]);
  
  return (
    <div className="pt-24">
      <div className="container-custom section-padding">
        <SectionTitle
          title={t('classes.title')}
          subtitle={t('classes.subtitle')}
          center
        />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="inline-block">
            <label htmlFor="age-filter" className="sr-only">{t('classes.filter.age')}</label>
            <select
              id="age-filter"
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">{t('classes.filter.all')}</option>
              <option value="0-2">{t('classes.age.0-2')}</option>
              <option value="3-5">{t('classes.age.3-5')}</option>
              <option value="6-8">{t('classes.age.6-8')}</option>
            </select>
          </div>
          
          <div className="inline-block">
            <label htmlFor="type-filter" className="sr-only">{t('classes.filter.type')}</label>
            <select
              id="type-filter"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">{t('classes.filter.all')}</option>
              <option value="movement">{t('classes.type.movement')}</option>
              <option value="sensory">{t('classes.type.sensory')}</option>
              <option value="creative">{t('classes.type.creative')}</option>
              <option value="music">{t('classes.type.music')}</option>
            </select>
          </div>
        </div>
        
        {/* Classes Grid */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => (
              <ClassCard
                key={classItem.id}
                classItem={classItem}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">No classes found</h3>
            <p className="text-gray-600">
              There are no classes available with the selected filters.
              Try different search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassesPage;