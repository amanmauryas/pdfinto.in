import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FileType,
  Home,
  Minimize2,
  FileOutput,
  Edit,
  FileSignature,
  Wrench,
  LogIn,
  Crown,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { cn } from "../lib/utils"; // Fixed import path

interface NavItem {
  label: string;
  icon: JSX.Element;
  value: string;
  path: string;
  isPremium?: boolean;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(
    location.pathname === "/" ? "home" : 
    location.pathname === "/premium-ai" ? "premium" : "home"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "HOME", icon: <Home className="w-5 h-5" />, value: "home", path: "/" },
    { label: "COMPRESS", icon: <Minimize2 className="w-5 h-5" />, value: "compress", path: "/" },
    { label: "CONVERT", icon: <FileOutput className="w-5 h-5" />, value: "convert", path: "/" },
    { label: "EDIT", icon: <Edit className="w-5 h-5" />, value: "edit", path: "/" },
    { label: "SIGN", icon: <FileSignature className="w-5 h-5" />, value: "sign", path: "/" },
    { label: "OTHER TOOLS", icon: <Wrench className="w-5 h-5" />, value: "other-tools", path: "/" },
  ];

  const premiumItem: NavItem = { 
    label: "PREMIUM AI", 
    icon: <Crown className="w-5 h-5" />, 
    value: "premium", 
    path: "/premium-ai",
    isPremium: true
  };

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="relative z-20 border-b backdrop-blur-md bg-white/80 border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <FileType className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
              FileForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.value}
                to={item.path}
                className={cn(
                  "flex items-center gap-1 px-2 lg:px-3 py-2 rounded-md transition-all text-sm font-medium whitespace-nowrap",
                  activeTab === item.value
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                )}
                onClick={() => handleTabClick(item.value)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* Premium AI Button - Separate for special styling */}
            <Link
              to={premiumItem.path}
              className={cn(
                "flex items-center gap-1 px-3 lg:px-4 py-2 rounded-md transition-all text-sm font-medium whitespace-nowrap ml-1 border",
                activeTab === premiumItem.value
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                  : "border-purple-200 text-purple-700 hover:bg-purple-50"
              )}
              onClick={() => handleTabClick(premiumItem.value)}
            >
              <Crown className={cn(
                "w-5 h-5",
                activeTab === premiumItem.value ? "text-yellow-300" : "text-yellow-500"
              )} />
              <span>{premiumItem.label}</span>
              <Sparkles className={cn(
                "w-3 h-3 ml-1",
                activeTab === premiumItem.value ? "text-yellow-300" : "text-yellow-500"
              )} />
            </Link>
          </div>

          {/* Desktop Sign In Button */}
          <Link to="/signin" className="hidden md:flex bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity items-center gap-2 ml-2">
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link to="/signin" className="flex bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 rounded-lg hover:opacity-90 transition-opacity">
              <LogIn className="w-5 h-5" />
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-200 shadow-lg z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.value}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-all",
                    activeTab === item.value
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                  onClick={() => handleTabClick(item.value)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Premium AI Button in Mobile Menu */}
              <Link
                to={premiumItem.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md transition-all border mt-2",
                  activeTab === premiumItem.value
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                    : "border-purple-200 text-purple-700 hover:bg-purple-50"
                )}
                onClick={() => handleTabClick(premiumItem.value)}
              >
                <Crown className={cn(
                  "w-5 h-5",
                  activeTab === premiumItem.value ? "text-yellow-300" : "text-yellow-500"
                )} />
                <span className="font-medium">{premiumItem.label}</span>
                <Sparkles className={cn(
                  "w-3 h-3 ml-1",
                  activeTab === premiumItem.value ? "text-yellow-300" : "text-yellow-500"
                )} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
