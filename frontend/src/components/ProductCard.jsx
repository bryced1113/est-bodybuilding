import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ProductCard = ({ product }) => {
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState('M');
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} - Size ${selectedSize}`,
      duration: 2000,
    });
  };

  return (
    <Card 
      className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-96 object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {product.inStock && (
          <Badge className="absolute top-4 right-4 bg-black text-white">
            IN STOCK
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 tracking-tight">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="text-sm text-gray-500 uppercase tracking-wider">{product.color}</span>
        </div>
        <div className="mb-4">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-2 block">
            Select Size
          </label>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border-2 transition-all duration-300 ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 bg-white text-black hover:border-black'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 py-6 text-sm uppercase tracking-wider font-medium"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;