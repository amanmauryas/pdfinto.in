import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FileText,
  FileType as FileWord,
  FileSpreadsheet,
  PresentationIcon,
  FileType,
  Image as ImageIcon,
  FileImage,
  Film,
  Printer,
  Globe,
  FileCode,
  Database,
  FileJson,
  FileSymlink,
  ArrowRight
} from "lucide-react";

interface ConversionItem {
  title: string;
  extension: string;
  description?: string;
  icon: JSX.Element;
  bgColor: string;
  link: string;
}

interface ConversionCategory {
  title: string;
  items: ConversionItem[];
  bgColor: string;
  icon: JSX.Element;
}

const conversionCategories: ConversionCategory[] = [
  {
    title: "Document Formats",
    icon: <FileText className="w-5 h-5" />,
    bgColor: "bg-blue-50 border-blue-200",
    items: [
      {
        title: "PDF to Word",
        extension: ".docx, .doc",
        icon: <FileWord className="w-5 h-5 text-blue-600" />,
        bgColor: "bg-blue-100",
        link: "/pdf_to_word"
      },
      {
        title: "PDF to Excel",
        extension: ".xlsx, .csv",
        icon: <FileSpreadsheet className="w-5 h-5 text-green-600" />,
        bgColor: "bg-green-100",
        link: "/pdf_to_excel"
      },
      {
        title: "PDF to PowerPoint",
        extension: ".pptx",
        icon: <PresentationIcon className="w-5 h-5 text-orange-600" />,
        bgColor: "bg-orange-100",
        link: "/pdf_to_powerpoint"
      },
      {
        title: "PDF to Text",
        extension: ".txt",
        icon: <FileType className="w-5 h-5 text-gray-600" />,
        bgColor: "bg-gray-100",
        link: "/pdf_to_text"
      }
    ]
  },
  {
    title: "Image Formats",
    icon: <ImageIcon className="w-5 h-5" />,
    bgColor: "bg-purple-50 border-purple-200",
    items: [
      {
        title: "PDF to JPEG",
        extension: ".jpg, .jpeg",
        description: "High-quality images",
        icon: <FileImage className="w-5 h-5 text-red-600" />,
        bgColor: "bg-red-100",
        link: "/pdf_to_jpeg"
      },
      {
        title: "PDF to PNG",
        extension: ".png",
        description: "Transparent format",
        icon: <FileImage className="w-5 h-5 text-purple-600" />,
        bgColor: "bg-purple-100",
        link: "/pdf_to_png"
      },
      {
        title: "PDF to GIF",
        extension: ".gif",
        description: "Animated images",
        icon: <Film className="w-5 h-5 text-pink-600" />,
        bgColor: "bg-pink-100",
        link: "/pdf_to_gif"
      },
      {
        title: "PDF to TIFF",
        extension: ".tiff",
        description: "High-resolution images",
        icon: <Printer className="w-5 h-5 text-indigo-600" />,
        bgColor: "bg-indigo-100",
        link: "/pdf_to_tiff"
      }
    ]
  },
  {
    title: "Web & Digital Formats",
    icon: <Globe className="w-5 h-5" />,
    bgColor: "bg-teal-50 border-teal-200",
    items: [
      {
        title: "PDF to HTML",
        extension: ".html",
        description: "Webpage format",
        icon: <FileCode className="w-5 h-5 text-teal-600" />,
        bgColor: "bg-teal-100",
        link: "/pdf_to_html"
      },
      {
        title: "PDF to XML",
        extension: ".xml",
        description: "Structured data format",
        icon: <Database className="w-5 h-5 text-blue-600" />,
        bgColor: "bg-blue-100",
        link: "/pdf_to_xml"
      },
      {
        title: "PDF to JSON",
        extension: ".json",
        description: "API & database use",
        icon: <FileJson className="w-5 h-5 text-yellow-600" />,
        bgColor: "bg-yellow-100",
        link: "/pdf_to_json"
      },
      {
        title: "PDF to Markdown",
        extension: ".md",
        description: "Documentation & blogs",
        icon: <FileSymlink className="w-5 h-5 text-gray-600" />,
        bgColor: "bg-gray-100",
        link: "/pdf_to_markdown"
      }
    ]
  }
];

// Export the categories and search function for use in HeroSection
export const useToolSearch = (query: string) => {
  const [filteredCategories, setFilteredCategories] = useState<ConversionCategory[]>(conversionCategories);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredCategories(conversionCategories);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const filtered = conversionCategories.map(category => {
      // Filter items within each category
      const filteredItems = category.items.filter(item =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.extension.toLowerCase().includes(lowerCaseQuery) ||
        (item.description && item.description.toLowerCase().includes(lowerCaseQuery))
      );

      // Return category with filtered items
      return {
        ...category,
        items: filteredItems
      };
    }).filter(category => category.items.length > 0); // Only keep categories with matching items

    setFilteredCategories(filtered);
  }, [query]);

  return filteredCategories;
};

interface PowerToolProps {
  searchQuery?: string;
}

const PowerTool: React.FC<PowerToolProps> = ({ searchQuery = "" }) => {
  const filteredCategories = useToolSearch(searchQuery);

  return (
    <section id="power-tools-section" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Power Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Convert your PDF documents to and from various formats with our powerful conversion tools.
          </p>
          {searchQuery && (
            <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg inline-block">
              <p className="text-orange-700">
                Showing results for: <span className="font-semibold">"{searchQuery}"</span>
              </p>
            </div>
          )}
        </div>

        {/* Conversion Categories */}
        {filteredCategories.length > 0 ? (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-5xl">
              {filteredCategories.map((category, index) => (
                <div
                  key={index}
                  className={`border rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg ${category.bgColor} w-full max-w-md mx-auto`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-white shadow-sm mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{index + 1}. {category.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="group">
                        <Link to={item.link}
                          className="flex items-start hover:bg-white p-2 rounded-lg transition-all duration-200">
                          <div className={`p-2 rounded-lg ${item.bgColor} mr-3 group-hover:shadow-sm`}>
                            {item.icon}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-800">{item.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 ml-1 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-sm text-gray-500 block">
                              {item.extension}
                              {item.description && ` – ${item.description}`}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No conversion tools found matching your search.</p>
            <p className="text-gray-400 mt-2">Try a different search term or browse all categories.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PowerTool;
