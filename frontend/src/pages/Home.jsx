import React from 'react';
import { Button } from '../components/ui/button';
import { ChevronDown, Dumbbell, Moon, Utensils } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, brandInfo } from '../data/mock';

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">EST BODYBUILDING</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors duration-300">Home</a>
              <a href="#products" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors duration-300">Shop</a>
              <a href="#about" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors duration-300">About</a>
              <Button className="bg-black text-white hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wider text-xs px-6">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-px w-12 bg-black"></div>
                <Dumbbell className="h-8 w-8" />
                <div className="h-px w-12 bg-black"></div>
              </div>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none">
              EST<br />BODYBUILDING
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 tracking-wider uppercase font-light">
              Eat · Sleep · Train
            </p>
            <div className="py-4">
              <p className="text-2xl md:text-3xl font-light tracking-wide italic text-gray-700">
                A lifestyle. A Journey. A Vision.
              </p>
            </div>
            <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {brandInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                onClick={scrollToProducts}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-12 py-6 text-sm uppercase tracking-wider font-medium"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-12 py-6 text-sm uppercase tracking-wider font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Our Collection</h2>
            <p className="text-gray-600 text-lg">Premium apparel for dedicated athletes</p>
            <div className="h-1 w-20 bg-black mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Our Philosophy</h2>
            <p className="text-gray-600 text-lg">The three pillars of success</p>
            <div className="h-1 w-20 bg-black mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 p-8 hover:bg-gray-50 transition-colors duration-500 rounded-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full">
                <Utensils className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">EAT</h3>
              <p className="text-gray-600 leading-relaxed">
                {brandInfo.philosophy[0].description}
              </p>
            </div>
            <div className="text-center space-y-6 p-8 hover:bg-gray-50 transition-colors duration-500 rounded-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full">
                <Moon className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">SLEEP</h3>
              <p className="text-gray-600 leading-relaxed">
                {brandInfo.philosophy[1].description}
              </p>
            </div>
            <div className="text-center space-y-6 p-8 hover:bg-gray-50 transition-colors duration-500 rounded-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full">
                <Dumbbell className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">TRAIN</h3>
              <p className="text-gray-600 leading-relaxed">
                {brandInfo.philosophy[2].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-light tracking-wide italic text-gray-300 mb-4">
            A lifestyle. A Journey. A Vision.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Join the EST Family?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Get your premium EST apparel and represent the lifestyle.
          </p>
          <Button 
            onClick={scrollToProducts}
            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-12 py-6 text-sm uppercase tracking-wider font-medium"
          >
            Shop Collection
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-6 w-6" />
                <span className="text-lg font-bold tracking-tight">EST BODYBUILDING</span>
              </div>
              <p className="text-gray-600 text-sm">
                Eat, Sleep, Train - The lifestyle of champions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#home" className="hover:text-black transition-colors duration-300">Home</a></li>
                <li><a href="#products" className="hover:text-black transition-colors duration-300">Shop</a></li>
                <li><a href="#about" className="hover:text-black transition-colors duration-300">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>info@estbodybuilding.com</li>
                <li>Follow us on social media</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} EST Bodybuilding. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;