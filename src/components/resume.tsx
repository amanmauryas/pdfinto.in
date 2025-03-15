import React from "react";
import { Brain } from "lucide-react";

const AIResumeBuilder = () => {
  return (
    <section className="relative py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 backdrop-blur-sm border bg-white border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-orange-500/10">
                  <Brain className="w-5 h-5 text-orange-500" />
                  <span className="font-medium text-orange-600">
                    AI-Powered Resume Builder
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Create Professional Resumes with AI
                </h2>
                <p className="text-lg mb-8 text-gray-600">
                  Let our AI analyze your experience and automatically generate a professional resume. 
                  Get personalized suggestions and formatting that stands out to employers.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Build Your Resume
                </button>
              </div>

              {/* Right Content - Features */}
              <div className="grid grid-cols-2 gap-4 p-6 rounded-xl bg-gray-50">
                {[
                  "Smart Content Analysis",
                  "ATS-Friendly Templates",
                  "Keyword Optimization",
                  "Real-time Suggestions",
                  "Multiple Format Export",
                  "Industry-Specific Tips",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-md">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIResumeBuilder;
