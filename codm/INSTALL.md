# Installation Guide

## Quick Start

1. **Navigate to the codm directory:**
   ```bash
   cd codm
   ```

2. **Run the setup script:**
   ```bash
   ./setup.sh
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

## Manual Installation

If the setup script doesn't work, follow these steps manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Copy assets:**
   ```bash
   mkdir -p public
   cp -r ../assets ./public/
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Troubleshooting

### Common Issues

1. **Assets not loading:**
   - Make sure the `assets` folder exists in the parent directory
   - Check that the `public/assets` directory was created successfully

2. **TypeScript errors:**
   - Run `npm install` to ensure all dependencies are installed
   - Check that Node.js version is 18 or higher

3. **Port already in use:**
   - Kill the process using port 3000: `lsof -ti:3000 | xargs kill -9`
   - Or use a different port: `npm run dev -- -p 3001`

### Dependencies

Make sure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

### File Structure

After installation, your project should look like:
```
codm/
├── app/
├── components/
├── public/
│   └── assets/
├── node_modules/
├── package.json
└── README.md
```

## Next Steps

1. Customize the content in the component files
2. Update images in the `public/assets` directory
3. Modify colors and styles in `app/globals.css`
4. Deploy to your preferred hosting platform

For more information, see the main README.md file. 