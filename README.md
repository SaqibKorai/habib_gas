Habib Gas Company Website
This project contains the complete code for the Habib Gas Company website, built with React and styled using Tailwind CSS. It features a modern design, responsive layout, and sections for Home, About Us, Services, and Contact.

Getting Started
Follow these steps to set up and run the project locally:

Create Project Folder:
Create a new folder for your project, for example, habib-gas-website.

Organize Files:
Inside habib-gas-website, create the following sub-folders and place the respective code files into them:

habib-gas-website/
├── public/
│   ├── index.html
│   └── image_aebb08.jpg  <-- Place your logo image file here
├── src/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md (this file)

Important: Make sure your logo image (image_aebb08.jpg) is placed directly inside the public folder.

Install Dependencies:
Open your terminal or command prompt, navigate to the habib-gas-website directory, and run:

npm install
# or if you use yarn
yarn install

This command will read the package.json file and install all the necessary React and Lucide React dependencies.

Run the Application:
After installation, you can start the development server:

npm start
# or
yarn start

This will open the website in your browser (usually at http://localhost:3000). The page will automatically reload if you make edits.

Deployment
This project is ready for deployment to platforms like Netlify or Vercel.

Initialize Git:
If you haven't already, initialize a Git repository in your project folder:

git init
git add .
git commit -m "Initial commit of Habib Gas website"

Create a Remote Repository:
Create a new, empty repository on GitHub, GitLab, or Bitbucket, and push your local code to it.

Deploy to Hosting Platform:

Netlify:

Log in to Netlify.

Click "Add new site" -> "Import an existing project".

Connect your Git provider and select your repository.

Netlify will usually auto-detect the settings:

Build command: npm run build

Publish directory: build

Click "Deploy site".

Vercel:

Log in to Vercel.

Click "New Project".

Connect your Git provider and import your repository.

Vercel will usually auto-detect the settings:

Framework Preset: Create React App

Build Command: npm run build

Output Directory: build

Click "Deploy".

Your website will be live shortly after deployment!