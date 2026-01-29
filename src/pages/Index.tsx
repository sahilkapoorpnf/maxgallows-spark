import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { FeaturedProduct } from '@/components/FeaturedProduct';
import { ProductGrid } from '@/components/ProductGrid';
import { About } from '@/components/About';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProduct />
      <ProductGrid />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
