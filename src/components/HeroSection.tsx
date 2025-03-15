import React, { useState, useEffect } from "react";
import { PlayCircle, Search, ArrowDown } from "lucide-react";
import { useToolSearch } from "./PowerTool";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  
  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    
    // Scroll to PowerTools section
    const powerToolsSection = document.getElementById('power-tools-section');
    if (powerToolsSection) {
      powerToolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent" />

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-24 flex flex-col items-center text-center">
        {/* Highlight Tag */}
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gray-900/5 text-gray-700">
          Powered by Advanced AI Technology
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
          Transform Your Files with AI Magic
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
          Experience the future of file conversion with our AI-powered tools.
          Convert, enhance, and transform your files with precision and intelligence.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search for conversion tools (e.g., 'PDF to Word', 'JPEG')..."
              className={`w-full px-5 py-4 pl-12 pr-16 border-2 rounded-xl shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all ${
                isSearchFocused ? 'border-orange-500' : 'border-gray-300'
              }`}
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Search className={`absolute left-4 top-4 w-5 h-5 transition-colors ${
              isSearchFocused ? 'text-orange-500' : 'text-gray-400'
            }`} />
            <button 
              type="submit"
              className="absolute right-3 top-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
          
          {searchQuery && (
            <div className="mt-2 text-sm text-gray-600 flex items-center justify-center">
              <span>Scroll down to see results</span>
              <ArrowDown className="w-4 h-4 ml-1 animate-bounce" />
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started Free
          </button>

          <button className="px-6 md:px-8 py-3 rounded-lg font-semibold border flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
            <PlayCircle className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
