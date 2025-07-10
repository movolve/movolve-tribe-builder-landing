import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past hero section
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      setIsVisible(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-accent shadow-bold md:hidden">
        <div className="px-4 py-2 bg-red-50 border-b border-red-200 text-center">
          <p className="text-red-600 text-xs font-bold">
            🔥 153 early member spots left • 50% off first 3 months
          </p>
        </div>
        <div className="p-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={handleClick}
            className="w-full h-14 text-lg"
          >
            Claim Early Access
          </Button>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-4 right-4 z-50">
        <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-t-lg text-center">
          153 spots left
        </div>
        <Button 
          variant="sticky"
          onClick={handleClick}
          className="rounded-t-none"
        >
          Claim Early Access
        </Button>
      </div>
    </>
  );
};