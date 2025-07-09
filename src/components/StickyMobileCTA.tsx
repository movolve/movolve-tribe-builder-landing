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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-accent p-4 shadow-bold md:hidden">
        <Button 
          variant="hero" 
          size="lg"
          onClick={handleClick}
          className="w-full h-14 text-lg"
        >
          Start Free Trial
        </Button>
      </div>

      {/* Desktop Floating Button */}
      <Button 
        variant="sticky"
        onClick={handleClick}
        className="hidden md:flex"
      >
        Start Free Trial
      </Button>
    </>
  );
};