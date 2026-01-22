// Mock data for EST Bodybuilding website

export const products = [
  {
    id: 1,
    name: "OG EST - White",
    color: "White",
    price: 38.00,
    description: "Premium cotton T-shirt with OG EST branding. Eat, Sleep, Train.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true
  },
  {
    id: 2,
    name: "OG EST - Black",
    color: "Black",
    price: 38.00,
    description: "Premium cotton T-shirt with OG EST branding. Eat, Sleep, Train.",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true
  }
];

export const brandInfo = {
  name: "EST Bodybuilding",
  tagline: "Eat, Sleep, Train",
  description: "A lifestyle. A Journey. A Vision. EST Bodybuilding embodies the raw essence of grit, relentless hard work, and the golden era bodybuilding mentality. This is for those who care about the grind, who respect the iron, and who understand that greatness is earned, not given. Our apparel represents a commitment to excellence and the dedication it takes to transform your body and mind.",
  philosophy: [
    {
      title: "EAT",
      description: "Fuel your body with purpose. Nutrition is the foundation of strength."
    },
    {
      title: "SLEEP",
      description: "Recovery is where growth happens. Rest with intention."
    },
    {
      title: "TRAIN",
      description: "Discipline over motivation. Show up when others quit, that's what defines you."
    }
  ]
};

export const mockCart = [];