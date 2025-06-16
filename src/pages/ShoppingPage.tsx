import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/ui/SectionTitle';
import ProductCard from '../components/ui/ProductCard';
import { Product } from '../types';

// Sample product data
const productsData: Product[] = [
  {
    id: '1',
    name: 'PixieCoffeePlace Kids Cup',
    description: 'Colorful cup with spill-proof lid, perfect for little hands. BPA-free and dishwasher safe.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isNew: true,
    shopifyUrl: 'https://pixiecoffeeplace.myshopify.com/products/vaso-infantil'
  },
  {
    id: '2',
    name: 'PixieCoffeePlace T-shirt',
    description: '100% organic cotton t-shirt with exclusive PixieCoffeePlace design. Available in various colors and kids sizes.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/5872367/pexels-photo-5872367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shopifyUrl: 'https://pixiecoffeeplace.myshopify.com/products/remera'
  },
  {
    id: '3',
    name: 'PixieCoffeePlace Gift Card',
    description: 'The perfect gift for any occasion. Gift card valid for entries, classes, or products from our store.',
    price: 50,
    image: 'https://images.pexels.com/photos/6634181/pexels-photo-6634181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shopifyUrl: 'https://pixiecoffeeplace.myshopify.com/products/giftcard'
  },
  {
    id: '4',
    name: 'PixieCoffeePlace Sensory Kit',
    description: 'Set of sensory toys to stimulate the senses and creativity of little ones. Includes 5 different items.',
    price: 35.99,
    image: 'https://images.pexels.com/photos/6623832/pexels-photo-6623832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isNew: true,
    shopifyUrl: 'https://pixiecoffeeplace.myshopify.com/products/kit-sensorial'
  },
  {
    id: '5',
    name: 'PixieCoffeePlace Educational Book',
    description: 'Interactive activity book for children ages 3-6. Made with non-toxic materials and different textures.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/6456147/pexels-photo-6456147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shopifyUrl: 'https://pixiecoffeeplace.myshopify.com/products/libro-educativo'
  },
  {
    id: '6',
    name: 'PixieCoffeePlace Kids Backpack',
    description: 'Small backpack ideal for kids to carry their belongings. Colorful and durable design.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    shopifyUrl: 'https://pixiecoffeeplace.myshopify.com/products/mochila-infantil'
  }
];

const ShoppingPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24">
      <div className="container-custom section-padding">
        <SectionTitle
          title={t('shop.title')}
          subtitle={t('shop.subtitle')}
          center
        />
        
        {/* Banner */}
        <div className="bg-accent/20 rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Bring the magic of PixieCoffeePlace home
              </h3>
              <p className="text-gray-700 mb-6">
                Discover our selection of exclusive products and souvenirs to extend the PixieCoffeePlace experience.
                All products are available at our physical store or in our online Shopify store!
              </p>
              <a 
                href="https://pixiecoffeeplace.myshopify.com" 
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                Visit Shopify Store
              </a>
            </div>
            <div className="md:w-1/3">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-primary rounded-full flex items-center justify-center relative float-animation mx-auto">
                <div className="text-white text-center">
                  <span className="block text-xl font-bold">NEW</span>
                  <span className="block text-3xl font-bold">15% OFF</span>
                  <span className="block text-sm">on your first purchase</span>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-dashed border-white rounded-full animate-spin-slow opacity-70" style={{ animationDuration: '30s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
        
        {/* More Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">Purchase Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Shipping</h4>
              <p className="text-gray-600 mb-2">
                We ship nationwide. Orders are processed within 24-48 business hours.
              </p>
              <p className="text-gray-600">
                Free shipping on purchases over $50.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Returns</h4>
              <p className="text-gray-600">
                You have 30 days to make a return. Products must be unused and in their original packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;