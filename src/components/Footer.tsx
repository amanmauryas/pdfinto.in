import React from "react";
import {
  FileText,
  FilePlus2,
  SplitSquareVertical,
  RotateCcw,
  Trash2,
  FileOutput,
  Edit,
  FileText as FileAnnotation,
  BookOpen,
  Hash,
  Crop,
  FileWarning,
  Droplets,
  FileType as FileWord,
  FileSpreadsheet,
  PresentationIcon,
  Image,
  FileSearch,
  FileSignature,
  UserRoundCheck,
  Lock,
  Shield,
  Minimize,
  ScanLine,
} from "lucide-react";

interface Tool {
  name: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
}

interface ToolCategory {
  category: string;
  tools: Tool[];
}

const pdfTools: ToolCategory[] = [
  {
    category: "Compress",
    tools: [
      { 
        name: "Compress PDF", 
        icon: <FileText className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-red-500" 
      }
    ],
  },
  {
    category: "Convert",
    tools: [
      { 
        name: "PDF Converter", 
        icon: <FileOutput className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-red-500" 
      }
    ],
  },
  {
    category: "AI PDF",
    tools: [
      { 
        name: "Chat with PDF", 
        icon: <FileText className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-blue-600" 
      },
      { 
        name: "AI PDF Summarizer", 
        icon: <FileText className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-blue-600" 
      },
      { 
        name: "Translate PDF", 
        icon: <FileText className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-blue-600" 
      },
      { 
        name: "AI Question Generator", 
        icon: <FileText className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-blue-600" 
      },
    ],
  },
  {
    category: "Organize",
    tools: [
      { 
        name: "Merge PDF", 
        icon: <FilePlus2 className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-purple-500" 
      },
      { 
        name: "Split PDF", 
        icon: <SplitSquareVertical className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-purple-500" 
      },
      { 
        name: "Rotate PDF", 
        icon: <RotateCcw className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-purple-500" 
      },
      { 
        name: "Delete PDF Pages", 
        icon: <Trash2 className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-purple-500" 
      },
      { 
        name: "Extract PDF Pages", 
        icon: <FileOutput className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-purple-500" 
      },
    ],
  },
  {
    category: "View & Edit",
    tools: [
      { 
        name: "Edit PDF", 
        icon: <Edit className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-teal-500" 
      },
      { 
        name: "PDF Annotator", 
        icon: <FileAnnotation className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-teal-500" 
      },
      { 
        name: "PDF Reader", 
        icon: <BookOpen className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-teal-500" 
      },
      { 
        name: "Number Pages", 
        icon: <Hash className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-teal-500" 
      },
      { 
        name: "Crop PDF", 
        icon: <Crop className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-teal-500" 
      },
      { 
        name: "Redact PDF", 
        icon: <FileWarning className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-teal-500" 
      },
      { 
        name: "Watermark PDF", 
        icon: <Droplets className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-teal-500" 
      },
    ],
  },
  {
    category: "Convert from PDF",
    tools: [
      { 
        name: "PDF to Word", 
        icon: <FileWord className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-blue-500" 
      },
      { 
        name: "PDF to Excel", 
        icon: <FileSpreadsheet className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-green-500" 
      },
      { 
        name: "PDF to PPT", 
        icon: <PresentationIcon className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-orange-500" 
      },
      { 
        name: "PDF to JPG", 
        icon: <Image className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-yellow-500" 
      },
    ],
  },
  {
    category: "Convert to PDF",
    tools: [
      { 
        name: "Word to PDF", 
        icon: <FileWord className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-blue-500" 
      },
      { 
        name: "Excel to PDF", 
        icon: <FileSpreadsheet className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-green-500" 
      },
      { 
        name: "PPT to PDF", 
        icon: <PresentationIcon className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-orange-500" 
      },
      { 
        name: "JPG to PDF", 
        icon: <Image className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-yellow-500" 
      },
      { 
        name: "PDF OCR", 
        icon: <FileSearch className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-red-500" 
      },
    ],
  },
  {
    category: "Sign",
    tools: [
      { 
        name: "Sign PDF", 
        icon: <FileSignature className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-pink-500" 
      },
    ],
  },
  {
    category: "More",
    tools: [
      { 
        name: "Unlock PDF", 
        icon: <Lock className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-pink-500" 
      },
      { 
        name: "Protect PDF", 
        icon: <Shield className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-pink-500" 
      },
      { 
        name: "Flatten PDF", 
        icon: <Minimize className="w-5 h-5" />, 
        color: "text-white", 
        bgColor: "bg-pink-500" 
      },
    ],
  },
];

// Reorganize categories to stack columns with few items
const organizedCategories = () => {
  // First, create a copy of the categories to work with
  const categories = [...pdfTools];
  
  // Sort categories by number of tools (ascending)
  categories.sort((a, b) => a.tools.length - b.tools.length);
  
  // Create columns for the grid
  const columns: ToolCategory[][] = [[], [], [], [], [], []];
  
  // Track total height of each column (in number of tools)
  const columnHeights = [0, 0, 0, 0, 0, 0];
  
  // Distribute categories to columns, starting with the largest categories
  for (let i = categories.length - 1; i >= 0; i--) {
    // Find the column with the smallest height
    const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
    
    // Add category to that column
    columns[minHeightIndex].push(categories[i]);
    
    // Update the column height
    columnHeights[minHeightIndex] += categories[i].tools.length;
  }
  
  // Return the organized columns
  return columns.filter(column => column.length > 0);
};

const Footer: React.FC = () => {
  const columns = organizedCategories();
  
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-8">
              {column.map((category, catIndex) => (
                <div key={`${colIndex}-${catIndex}`} className="flex flex-col">
                  <h3 className="font-semibold text-gray-700 mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.tools.map((tool, i) => (
                      <li key={i}>
                        <a 
                          href="#" 
                          className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                        >
                          <div className={`p-1.5 rounded ${tool.bgColor} ${tool.color} flex items-center justify-center`}>
                            {tool.icon}
                          </div>
                          <span className="text-sm">{tool.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FileForge. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
