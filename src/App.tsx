import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PowerTool from "./components/PowerTool";
import ResumeBuilder from "./components/resume";
import PricingSection from "./components/Pricing";
import Footer from "./components/Footer";
import PremiumAI from "./components/PremiumAI";
import PdfToWord from "./pages/pdf_to_word";
import { Crown, Sparkles, ArrowRight, BookOpen, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

// Declare global variable for API key
declare global {
  interface Window {
    __ILOVEPDF_API_KEY__?: string;
  }
}

// Load API key from environment variable
const ILOVEPDF_API_KEY = import.meta.env.VITE_ILOVEPDF_API_KEY;

// iLovePDF API Configuration
const ILOVEPDF_CONFIG = {
  apiKey: ILOVEPDF_API_KEY, // Use only the environment variable
  apiEndpoint: "https://api.ilovepdf.com/v1",
  maxRetries: 3,
  timeout: 60000, // 60 seconds
};

// Premium AI Promo Banner Component
const PremiumAIPromo: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 shadow-lg relative overflow-hidden">
          {/* Background sparkles */}
          <div className="absolute top-0 right-0 opacity-10">
            <Sparkles className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Crown className="w-6 h-6 text-yellow-300 mr-2" />
                <h3 className="text-2xl font-bold text-white">Premium AI Features</h3>
              </div>
              <p className="text-purple-100 max-w-xl mb-4">
                Unlock advanced AI tools, eBook formats (EPUB, MOBI), and premium conversion options with our Premium AI plan.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-white/10 text-white text-sm px-3 py-1 rounded-full flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-yellow-300" />
                  Chat with PDF
                </span>
                <span className="bg-white/10 text-white text-sm px-3 py-1 rounded-full flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-yellow-300" />
                  AI Summarization
                </span>
                <span className="bg-white/10 text-white text-sm px-3 py-1 rounded-full flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5 text-yellow-300" />
                  eBook Formats
                </span>
              </div>
            </div>
            <Link to="/premium-ai" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore Premium AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sign In Page Component
const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {isSignUp ? "Create an Account" : "Welcome Back"}
              </h1>
              <p className="text-gray-600">
                {isSignUp
                  ? "Sign up to access all our PDF tools"
                  : "Sign in to your account to continue"
                }
              </p>
            </div>

            <form className="space-y-5">
              {isSignUp && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 px-4 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <button
                  onClick={toggleAuthMode}
                  className="ml-1 font-medium text-orange-600 hover:text-orange-500"
                >
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
              </p>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.198-2.701-6.735-2.701-5.539 0-10.032 4.493-10.032 10.032s4.493 10.032 10.032 10.032c8.445 0 10.452-7.888 9.629-11.732h-9.629z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home page component that contains all the main sections
const HomePage: React.FC<{ searchQuery: string; onSearch: (query: string) => void }> = ({
  searchQuery,
  onSearch
}) => {
  return (
    <>
      <Routes>
        <Route path="/premium-ai" element={<PremiumAI />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <HeroSection onSearch={onSearch} />
      <PowerTool searchQuery={searchQuery} />
      <PremiumAIPromo />
      <ResumeBuilder />
      <PricingSection />
    </>
  );
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} onSearch={handleSearch} />} />
          <Route path="/premium-ai" element={<PremiumAI />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/pdf_to_word" element={<PdfToWord />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
