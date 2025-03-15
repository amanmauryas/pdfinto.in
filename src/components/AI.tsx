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
  Sparkles
} from "lucide-react";

interface ToolItem {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
}

interface ToolSection {
  title: string;
  description: string;
  tools: ToolItem[];
  bgGradient: string;
}

const sections: ToolSection[] = [
  {
    title: "Other Formats",
    description: "Convert your PDFs to specialized formats for specific needs",
    bgGradient: "from-blue-500/5 to-indigo-500/5",
    tools: [
      {
        title: "PDF to LaTeX",
        description: "Convert PDFs to LaTeX for scientific documents",
        icon: <Code className="w-5 h-5" />,
        bgColor: "bg-blue-100",
        textColor: "text-blue-700"
      },
      {
        title: "PDF to SVG",
        description: "Transform PDFs to scalable vector graphics",
        icon: <FileVector className="w-5 h-5" />,
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-700"
      },
      {
        title: "PDF to PostScript",
        description: "Convert to print-ready PostScript format",
        icon: <Printer className="w-5 h-5" />,
        bgColor: "bg-purple-100",
        textColor: "text-purple-700"
      }
    ]
  },
  {
    title: "Edit PDF",
    description: "Powerful tools to modify and enhance your PDF documents",
    bgGradient: "from-teal-500/5 to-emerald-500/5",
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
        textColor: "text-green-700"
      },
      {
        title: "Redact PDF",
        description: "Permanently remove sensitive information",
        icon: <Eraser className="w-5 h-5" />,
        bgColor: "bg-red-100",
        textColor: "text-red-700"
      },
      {
        title: "Watermark PDF",
        description: "Add text or image watermarks to your PDFs",
        icon: <Droplets className="w-5 h-5" />,
        bgColor: "bg-cyan-100",
        textColor: "text-cyan-700"
      }
    ]
  },
  {
    title: "AI PDF Tools",
    description: "Leverage artificial intelligence to work with your PDF documents",
    bgGradient: "from-purple-500/5 to-pink-500/5",
    tools: [
      {
        title: "Chat with PDF",
        description: "Ask questions and get answers from your PDF content",
        icon: <MessageSquareText className="w-5 h-5" />,
        bgColor: "bg-purple-100",
        textColor: "text-purple-700"
      },
      {
        title: "AI PDF Summarizer",
        description: "Generate concise summaries of your PDF documents",
        icon: <BrainCircuit className="w-5 h-5" />,
        bgColor: "bg-pink-100",
        textColor: "text-pink-700"
      },
      {
        title: "AI Question Generator",
        description: "Create questions based on your PDF content",
        icon: <FileQuestion className="w-5 h-5" />,
        bgColor: "bg-violet-100",
        textColor: "text-violet-700"
      },
      {
        title: "Translate PDF",
        description: "Translate your PDF documents to different languages",
        icon: <Languages className="w-5 h-5" />,
        bgColor: "bg-blue-100",
        textColor: "text-blue-700"
      },
      {
        title: "AI Content Generator",
        description: "Create new content based on your PDF documents",
        icon: <Bot className="w-5 h-5" />,
        bgColor: "bg-amber-100",
        textColor: "text-amber-700"
      }
    ]
  }
];

const OtherFormatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Advanced Tools & AI Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our specialized formats, editing tools, and AI-powered features to get the most out of your PDF documents.
          </p>
        </div>
        
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`bg-gradient-to-br ${section.bgGradient} p-8 rounded-2xl`}>
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-gray-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">{section.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                  >
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
                      <button className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors flex items-center">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherFormatsSection;
