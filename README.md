# PDF Tool Application

A modern web application for converting and managing PDF files, built with React, TypeScript, and Tailwind CSS.

## Features

- PDF to various format conversion (Word, Excel, PowerPoint, etc.)
- File upload via drag & drop or URL
- Modern, responsive UI with Tailwind CSS
- Premium AI features (coming soon)
- Resume builder integration
- User authentication

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase CLI (for deployment)
- iLovePDF API key (for production implementation)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd pdf-tool
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the project root:
```env
VITE_ILOVEPDF_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Firebase Deployment

1. Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init
```
- Select "Hosting"
- Select your Firebase project or create a new one
- Use "dist" as your public directory
- Configure as a single-page app: Yes
- Don't overwrite index.html: No

4. Build your project:
```bash
npm run build
# or
yarn build
```

5. Deploy to Firebase:
```bash
firebase deploy
```

## Implementation Note

The application currently uses a mock implementation of the iLovePDF API for demonstration purposes. The error "Cannot destructure property 'task' of 'taskData' as it is null" indicates that the API integration needs to be properly configured with a valid API key.

To implement the real iLovePDF API integration:
1. Sign up for an iLovePDF developer account
2. Get your API key and add it to the `.env` file
3. Update the error handling in `src/hooks/useFileConversion.ts`

## Project Structure

```
project/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
├── index.html         # HTML template
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts     # Vite configuration
└── README.md         # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 