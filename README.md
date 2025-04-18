# PatentPilot

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3.1-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0.0-blue" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0.0-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4.0.0-38B2AC" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Shadcn_UI-Latest-black" alt="Shadcn UI" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</div>

<p align="center">
  <strong>AI-powered platform for patent drafting, analysis, and consultation</strong>
</p>

## ✨ Live Demo

The application is deployed and accessible at:
https://patent-pilot-beta.vercel.app/

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production](#production)
- [Deployment](#deployment)
  - [Deploying to Vercel](#deploying-to-vercel)
  - [Deploying to Render](#deploying-to-render)
- [Project Structure](#project-structure)
- [Technical Implementation](#technical-implementation)
- [Current Limitations](#current-limitations)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

PatentPilot is an AI-powered platform designed to assist inventors and legal professionals in drafting and analyzing patent applications. It provides tools for generating patent drafts, searching prior art, predicting approval likelihood, and connecting with expert consultants.

## 🚀 Features

### AI Patent Draft
- **Invention Input Form**: Easy-to-use form for entering invention details
- **AI-Generated Content**: Creates comprehensive drafts including abstract, description, and claims
- **Download Option**: Save generated drafts as text files
- **Email Integration**: Send drafts directly to your email

### Prior Art Search
- **Invention Analysis**: Analyzes your invention description to find relevant prior art
- **Novelty Assessment**: Provides an assessment of your invention's novelty
- **Patentability Challenges**: Identifies potential challenges to patentability
- **Relevant Patents**: Lists similar patents with links to view them

### Approval Prediction
- **Likelihood Estimation**: Predicts the likelihood of patent application approval
- **Visual Representation**: Displays approval likelihood with an intuitive gauge
- **Improvement Suggestions**: Offers specific suggestions to improve approval chances

### Expert Consultation
- **Consultation Request**: Form to request expert guidance from patent attorneys
- **Expert Matching**: Connects you with specialists in your invention's field
- **Benefits Overview**: Explains the advantages of expert consultation

### Help & FAQ
- **Comprehensive Guidance**: Detailed information about using each feature
- **Common Questions**: Answers to frequently asked questions
- **General Information**: Details about data protection and international patents

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Page
The home page provides an overview of PatentPilot's features with easy navigation to all sections.

### AI Patent Draft
The draft page allows users to input invention details and receive AI-generated patent drafts.

### Prior Art Search
The search page analyzes existing patents to determine novelty and patentability.

### Approval Prediction
The prediction page estimates the likelihood of patent approval and offers improvement suggestions.

### Expert Consultation
The consultation page connects users with patent attorneys for expert guidance.

### Help & FAQ
The help page provides comprehensive information about using PatentPilot.

</details>

## 🏁 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/patentpilot.git
   cd patentpilot
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your API keys (if applicable):
     ```
     GOOGLE_GeminiAPIKey=YOUR_API_KEY
     ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

## 🚢 Deployment

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [Vercel](https://vercel.com) and sign up or log in
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy" to deploy your application

### Deploying to Render

1. Push your code to a Git repository
2. Visit [Render](https://render.com) and sign up or log in
3. Click "New" and select "Web Service"
4. Connect to your repository
5. Configure the service:
   - Name: `patentpilot`
   - Build Command: `npm run build`
   - Start Command: `npm start`
6. Click "Create Web Service" to deploy your application

## 📁 Project Structure

```
patentpilot/
├── .env                    # Environment variables
├── .eslintrc.js            # ESLint configuration
├── README.md               # Project documentation
├── components.json         # Shadcn UI configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── vercel.json             # Vercel deployment configuration
├── src/
│   ├── app/                # Next.js application routes
│   │   ├── consultation/   # Consultation page
│   │   ├── draft/          # AI patent draft page
│   │   ├── help/           # Help page
│   │   ├── layout.tsx      # Main layout component
│   │   ├── page.tsx        # Home page
│   │   ├── predict/        # Patent approval prediction page
│   │   ├── search/         # Prior art search page
│   │   └── globals.css     # Global CSS styles
│   ├── components/         # Reusable UI components
│   │   ├── icons.ts        # Icon definitions
│   │   ├── layout/         # Layout components
│   │   │   └── main-layout.tsx  # Main layout structure
│   │   └── ui/             # Shadcn UI components
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx  # Hook to detect mobile devices
│   │   └── use-toast.ts    # Hook to manage toast notifications
│   └── lib/                # Utility functions
│       └── utils.ts        # Utility functions (e.g., cn for classnames)
```

## 💻 Technical Implementation

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Reusable UI components built with Radix UI and Tailwind CSS
- **Lucide React**: Icon library for React applications
- **Sonner**: Toast notification library

### Current Limitations

- **Mock AI Implementation**: The application currently uses mock data to simulate AI functionality
- **No Backend Persistence**: Data is not stored between sessions
- **Limited Patent Database**: The search feature uses simulated patent data
- **No Authentication**: User accounts and authentication are not implemented

## 🔮 Future Enhancements

- **Real AI Integration**: Replace mock implementations with actual AI services
- **User Authentication**: Add user accounts and authentication
- **Data Persistence**: Implement database storage for user data
- **Enhanced Patent Search**: Connect to real patent databases
- **Collaboration Features**: Allow multiple users to collaborate on patent drafts
- **Document Versioning**: Track changes and maintain version history
- **Mobile Application**: Develop native mobile applications for iOS and Android

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Made with ❤️ by the Swetang Gajjar
</p>

<p align="center">
  <a href="#patentpilot">Back to top ↑</a>
</p>
