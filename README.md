# Prince Token Portal

Simple website for Prince Token


## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Rin-0xTohsaka/prince-token-website.git
cd prince-token-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
project-root/
├── public/
│   ├── index.html
│   └── assets/
│       ├── icons/
│       └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx        # Main header with search and user controls
│   │   │   ├── Footer.jsx        # Site footer with links and social media
│   │   │   └── Navigation.jsx    # Main navigation component
│   │   ├── common/
│   │   │   ├── ServiceCard.jsx   # Reusable service card component
│   │   │   ├── StatisticBox.jsx  # Statistics display component
│   │   │   └── Button.jsx        # Reusable button component
│   │   └── sections/
│   │       ├── Hero.jsx          # Homepage hero section
│   │       ├── PopularServices.jsx # Popular services section
│   │       ├── ServicesGrid.jsx   # Grid display of all services
│   │       └── Statistics.jsx     # Statistics section
│   ├── styles/
│   │   └── globals.css           # Global styles and Tailwind configuration
│   ├── utils/
│   │   └── constants.js          # Shared constants and configurations
│   ├── App.jsx                   # Main application component
│   └── index.js                  # Application entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Component Overview

### Layout Components

- **Header**: Main application header with search functionality and user controls
- **Navigation**: Primary navigation with responsive mobile menu
- **Footer**: Site footer with links and social media integration

### Section Components

- **Hero**: Homepage hero section with key messages and featured services
- **PopularServices**: Displays frequently accessed services
- **ServicesGrid**: Grid layout of all available services
- **Statistics**: Displays key statistics and metrics

### Common Components

- **ServiceCard**: Reusable card component for displaying service information
- **StatisticBox**: Component for displaying statistical information
- **Button**: Reusable button component with various styles

## 🔧 Development

### Available Scripts

- `npm start`: Runs the development server
- `npm test`: Runs the test suite
- `npm run build`: Creates a production build
- `npm run lint`: Runs ESLint to check code quality
- `npm run format`: Formats code using Prettier

### Style Guide

This project uses:
- Tailwind CSS for styling
- ESLint for code quality
- Prettier for code formatting

#### Styling Conventions

- Use Tailwind's utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing using Tailwind's spacing scale
- Use semantic HTML elements
- Ensure color contrast meets WCAG guidelines

### Best Practices

1. **Component Structure**:
   - Keep components focused and single-responsibility
   - Use functional components with hooks
   - Maintain proper prop-types documentation

2. **Performance**:
   - Optimize images and assets
   - Use lazy loading where appropriate
   - Minimize bundle size
   - Implement proper memoization

3. **Accessibility**:
   - Use semantic HTML
   - Provide proper ARIA labels
   - Ensure keyboard navigation
   - Maintain sufficient color contrast

## 🚀 Deployment

To deploy the application:

1. Create a production build:
```bash
npm run build
```

2. The `build` folder will contain the production-ready files

3. Deploy the contents of the `build` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes:
```bash
git commit -m 'Add amazing feature'
```
4. Push to the branch:
```bash
git push origin feature/amazing-feature
```
5. Open a pull request

### Pull Request Guidelines

- Ensure code passes all tests
- Update documentation as needed
- Follow the existing code style
- Include relevant test cases
- Keep changes focused and atomic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Design inspiration from modern government portals
- Icons from Heroicons
- Base styling framework from Tailwind CSS

## 📞 Support

For support, please submit an issue on GitHub

---

Made with ❤️