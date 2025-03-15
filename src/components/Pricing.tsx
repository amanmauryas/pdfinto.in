import React, { useState } from "react";
import { Check, Crown, Zap, Star, BrainCircuit, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

type BillingCycle = "monthly" | "yearly";

interface PricingFeature {
  text: string;
  included: boolean;
  isHighlighted?: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  icon: JSX.Element;
  color: string;
  featureIds: string[];
}

// Create a unified feature list that all tiers will use
const allFeatures = [
  { id: "basic", text: "Basic PDF conversions" },
  { id: "daily", text: "File uploads per day", values: ["Up to 5 files", "Unlimited", "Unlimited"] },
  { id: "filesize", text: "Max file size", values: ["10MB", "50MB", "200MB"] },
  { id: "editing", text: "Editing tools", values: ["Basic", "Advanced", "Advanced"] },
  { id: "support", text: "Customer support", values: ["Standard", "Priority", "Priority"] },
  { id: "storage", text: "Cloud storage", values: ["None", "5GB", "20GB"] },
  { id: "premium", text: "Premium formats" },
  { id: "ebook", text: "eBook formats (EPUB, MOBI)", highlight: true },
  { id: "ai", text: "AI-powered features", highlight: true },
  { id: "chat", text: "Chat with PDF", highlight: true },
  { id: "summary", text: "AI summarization", highlight: true },
  { id: "translate", text: "PDF translation", highlight: true },
  { id: "security", text: "Advanced security" },
];

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  // Define which features are included in each tier
  const tierFeatures = {
    free: ["basic", "daily", "filesize", "editing", "support"],
    standard: ["basic", "daily", "filesize", "editing", "support", "storage", "premium"],
    premium: ["basic", "daily", "filesize", "editing", "support", "storage", "premium", "ebook", "ai", "chat", "summary", "translate", "security"]
  };

  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      description: "Basic tools for occasional use",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: <FileText className="w-6 h-6" />,
      color: "bg-gray-100 text-gray-700",
      features: [
        { text: "Basic PDF conversions", included: true },
        { text: "Up to 5 files per day", included: true },
        { text: "Max file size: 10MB", included: true },
        { text: "Basic editing tools", included: true },
        { text: "Standard support", included: true },
        { text: "AI-powered features", included: false },
        { text: "Premium formats", included: false },
        { text: "Advanced security", included: false },
      ],
      ctaText: "Get Started",
      ctaLink: "/",
      featureIds: tierFeatures.free
    },
    {
      name: "Standard",
      description: "For regular PDF processing needs",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      icon: <Star className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-700",
      features: [
        { text: "All free features", included: true },
        { text: "Unlimited conversions", included: true },
        { text: "Max file size: 50MB", included: true },
        { text: "Advanced editing tools", included: true },
        { text: "Priority support", included: true },
        { text: "Cloud storage (5GB)", included: true },
        { text: "AI-powered features", included: false },
        { text: "Premium formats", included: false },
      ],
      ctaText: "Subscribe Now",
      ctaLink: "/",
      featureIds: tierFeatures.standard
    },
    {
      name: "Premium AI",
      description: "Unlock the full power of AI",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-700",
      isPopular: true,
      features: [
        { text: "All standard features", included: true },
        { text: "Unlimited conversions", included: true },
        { text: "Max file size: 200MB", included: true },
        { text: "Premium formats", included: true },
        { text: "eBook formats (EPUB, MOBI)", included: true, isHighlighted: true },
        { text: "Cloud storage (20GB)", included: true },
        { text: "AI-powered features", included: true, isHighlighted: true },
        { text: "Chat with PDF", included: true, isHighlighted: true },
        { text: "AI summarization", included: true, isHighlighted: true },
        { text: "PDF translation", included: true, isHighlighted: true },
        { text: "Advanced security", included: true },
        { text: "Priority support", included: true },
      ],
      ctaText: "Upgrade to Premium",
      ctaLink: "/premium-ai",
      featureIds: tierFeatures.premium
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Choose the Perfect Plan
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Select the plan that best fits your needs. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <button
              className={`px-4 py-2 rounded-l-lg ${
                billingCycle === "monthly"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${
                billingCycle === "yearly"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly <span className="text-xs font-medium">Save 15%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-xl shadow-lg border bg-white border-gray-200 overflow-hidden ${
                tier.isPopular ? "md:scale-105 z-10" : ""
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center">
                  <Crown className="w-3 h-3 mr-1" />
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-2 ${tier.color}`}>
                <div className="flex items-center justify-center py-3">
                  {tier.icon}
                  <h3 className="text-xl font-bold ml-2">{tier.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-center mb-6 h-12">
                  {tier.description}
                </p>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingCycle === "monthly" ? tier.monthlyPrice : tier.yearlyPrice}
                  </span>
                  {tier.monthlyPrice > 0 && (
                    <span className="text-gray-500">
                      {" "}
                      / {billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 min-h-[320px]">
                  {allFeatures.map((feature, featureIndex) => {
                    const isIncluded = tier.featureIds.includes(feature.id);
                    const value = feature.values ? feature.values[index] : null;
                    
                    return (
                      <li
                        key={featureIndex}
                        className={`flex items-center gap-3 ${
                          !isIncluded ? "opacity-50" : ""
                        } ${feature.highlight && isIncluded ? "font-medium text-purple-700" : ""}`}
                      >
                        {isIncluded ? (
                          <Check className={`w-5 h-5 ${feature.highlight ? "text-purple-500" : "text-green-500"}`} />
                        ) : (
                          <div className="w-5 h-5 flex items-center justify-center">
                            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                          </div>
                        )}
                        <span>
                          {feature.text}
                          {value && <span className="ml-1 font-medium">({value})</span>}
                        </span>
                        {feature.highlight && isIncluded && <Zap className="w-4 h-4 text-yellow-500" />}
                      </li>
                    );
                  })}
                </ul>

                <div className="text-center">
                  <Link
                    to={tier.ctaLink}
                    className={`inline-block w-full py-3 rounded-lg font-semibold transition-all ${
                      tier.name === "Premium AI"
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
                        : tier.name === "Standard"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {tier.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-2">
                <Shield className="w-6 h-6 text-gray-700 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              </div>
              <p className="text-gray-600 max-w-xl">
                Need a custom solution for your organization? Contact us for enterprise-grade features, dedicated support, and volume discounts.
              </p>
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
