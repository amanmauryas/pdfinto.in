import React from "react";
import {
  FileText,
  Code,
  FileType as FileVector,
  Printer,
  Edit,
  Scissors,
  RotateCcw,
  FileSignature,
  Eraser,
  Droplets,
  FileWarning,
  BrainCircuit,
  MessageSquareText,
  FileQuestion,
  Languages,
  Bot,
  Sparkles,
  Crown,
  Zap,
  Star,
  Lock,
  BookOpen,
  Tablet
} from "lucide-react";

interface ToolItem {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
  isPremium?: boolean;
}

interface ToolSection {
  title: string;
  description: string;
  tools: ToolItem[];
  bgGradient: string;
  icon: JSX.Element;
}

const sections: ToolSection[] = [
  {
    title: "AI PDF Tools",
    description: "Leverage artificial intelligence to work with your PDF documents",
    bgGradient: "from-purple-500/5 to-pink-500/5",
    icon: <BrainCircuit className="w-6 h-6 text-purple-600" />,
    tools: [
      {
        title: "Chat with PDF",
        description: "Ask questions and get answers from your PDF content",
        icon: <MessageSquareText className="w-5 h-5" />,
        bgColor: "bg-purple-100",
        textColor: "text-purple-700",
        isPremium: true
      },
      {
        title: "AI PDF Summarizer",
        description: "Generate concise summaries of your PDF documents",
        icon: <BrainCircuit className="w-5 h-5" />,
        bgColor: "bg-pink-100",
        textColor: "text-pink-700",
        isPremium: true
      },
      {
        title: "AI Question Generator",
        description: "Create questions based on your PDF content",
        icon: <FileQuestion className="w-5 h-5" />,
        bgColor: "bg-violet-100",
        textColor: "text-violet-700",
        isPremium: true
      },
      {
        title: "Translate PDF",
        description: "Translate your PDF documents to different languages",
        icon: <Languages className="w-5 h-5" />,
        bgColor: "bg-blue-100",
        textColor: "text-blue-700",
        isPremium: true
      },
      {
        title: "AI Content Generator",
        description: "Create new content based on your PDF documents",
        icon: <Bot className="w-5 h-5" />,
        bgColor: "bg-amber-100",
        textColor: "text-amber-700",
        isPremium: true
      }
    ]
  },
  {
    title: "Edit PDF",
    description: "Powerful tools to modify and enhance your PDF documents",
    bgGradient: "from-teal-500/5 to-emerald-500/5",
    icon: <Edit className="w-6 h-6 text-teal-600" />,
    tools: [
      {
        title: "Split PDF",
        description: "Divide your PDF into multiple documents",
        icon: <Scissors className="w-5 h-5" />,
        bgColor: "bg-teal-100",
        textColor: "text-teal-700"
      },
      {
        title: "Rotate PDF",
        description: "Change the orientation of your PDF pages",
        icon: <RotateCcw className="w-5 h-5" />,
        bgColor: "bg-emerald-100",
        textColor: "text-emerald-700"
      },
      {
        title: "Add Signature",
        description: "Sign your PDF documents digitally",
        icon: <FileSignature className="w-5 h-5" />,
        bgColor: "bg-green-100",
        textColor: "text-green-700",
        isPremium: true
      },
      {
        title: "Redact PDF",
        description: "Permanently remove sensitive information",
        icon: <Eraser className="w-5 h-5" />,
        bgColor: "bg-red-100",
        textColor: "text-red-700",
        isPremium: true
      },
      {
        title: "Watermark PDF",
        description: "Add text or image watermarks to your PDFs",
        icon: <Droplets className="w-5 h-5" />,
        bgColor: "bg-cyan-100",
        textColor: "text-cyan-700",
        isPremium: true
      }
    ]
  },
  {
    title: "eBook Formats",
    description: "Convert your PDFs to premium eBook formats for various reading devices",
    bgGradient: "from-amber-500/5 to-orange-500/5",
    icon: <BookOpen className="w-6 h-6 text-amber-600" />,
    tools: [
      {
        title: "PDF to EPUB",
        description: "Convert PDFs to the popular eBook reader format",
        icon: <BookOpen className="w-5 h-5" />,
        bgColor: "bg-amber-100",
        textColor: "text-amber-700",
        isPremium: true
      },
      {
        title: "PDF to MOBI",
        description: "Transform PDFs to Amazon Kindle format",
        icon: <Tablet className="w-5 h-5" />,
        bgColor: "bg-orange-100",
        textColor: "text-orange-700",
        isPremium: true
      },
      {
        title: "PDF to AZW3",
        description: "Convert to enhanced Kindle format with advanced features",
        icon: <FileText className="w-5 h-5" />,
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-700",
        isPremium: true
      },
      {
        title: "PDF to FB2",
        description: "Transform to FictionBook format for e-readers",
        icon: <FileText className="w-5 h-5" />,
        bgColor: "bg-red-100",
        textColor: "text-red-700",
        isPremium: true
      }
    ]
  },
  {
    title: "Other Formats",
    description: "Convert your PDFs to specialized formats for specific needs",
    bgGradient: "from-blue-500/5 to-indigo-500/5",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    tools: [
      {
        title: "PDF to LaTeX",
        description: "Convert PDFs to LaTeX for scientific documents",
        icon: <Code className="w-5 h-5" />,
        bgColor: "bg-blue-100",
        textColor: "text-blue-700",
        isPremium: true
      },
      {
        title: "PDF to SVG",
        description: "Transform PDFs to scalable vector graphics",
        icon: <FileVector className="w-5 h-5" />,
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-700",
        isPremium: true
      },
      {
        title: "PDF to PostScript",
        description: "Convert to print-ready PostScript format",
        icon: <Printer className="w-5 h-5" />,
        bgColor: "bg-purple-100",
        textColor: "text-purple-700",
        isPremium: true
      }
    ]
  }
];

const PremiumAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-10 h-10 text-yellow-300 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Premium AI Features</h1>
          </div>
          <p className="text-xl max-w-2xl mx-auto text-purple-100 mb-8">
            Unlock the full potential of your PDF documents with our advanced AI-powered tools and premium features.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center mx-auto">
            <Zap className="w-5 h-5 mr-2" />
            Upgrade to Premium
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Benefits Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Premium Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced AI Features</h3>
              <p className="text-gray-600">Access our most powerful AI tools for document analysis, summarization, and content generation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Premium-grade encryption and security features to keep your sensitive documents protected.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
              <p className="text-gray-600">Get dedicated support and faster response times for all your PDF processing needs.</p>
            </div>
          </div>
        </div>

        {/* Tools Sections */}
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-full bg-white shadow-sm mr-4`}>
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                  <p className="text-gray-600 max-w-3xl">{section.description}</p>
                </div>
              </div>
              
              <div className={`bg-gradient-to-br ${section.bgGradient} p-8 rounded-2xl`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative overflow-hidden"
                    >
                      {tool.isPremium && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-xs font-bold px-3 py-1 rounded-bl-lg text-gray-900 flex items-center">
                            <Crown className="w-3 h-3 mr-1" />
                            PREMIUM
                          </div>
                        </div>
                      )}
                      <div className="flex items-start mb-4">
                        <div className={`p-3 rounded-lg ${tool.bgColor} ${tool.textColor} mr-4`}>
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{tool.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{tool.description}</p>
                        </div>
                      </div>
                      <div className="mt-auto pt-4">
                        <button className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors flex items-center">
                          Try it now
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade?</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Get access to all premium features and take your PDF workflow to the next level.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              View Pricing Plans
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumAI; 