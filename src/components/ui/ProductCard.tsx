import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-0 left-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-br-lg">
            Nuevo
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="text-lg font-semibold text-secondary">${product.price}</span>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        
        <a 
          href={product.shopifyUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary w-full text-center"
        >
          {t('shop.button')}
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;