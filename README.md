# Netflix Clone

This is a Netflix clone project built with React.js and Firebase. It uses the TMDB API to display movie details and trailers, allowing users to explore their favorite movies and trailers. Firebase Authentication is used to securely log in users, and the UI is built using HTML, CSS, and JavaScript, making it interactive and responsive across all devices.

## Features

- **Movie Listings:** Displays popular movies fetched from the TMDB API.
- **Trailer Viewing:** Users can watch movie trailers directly from YouTube.
- **User Authentication:** Secure login and account management with Firebase Authentication.
- **Responsive Design:** Optimized for all screen sizes, including mobile devices.

## Tech Stack

- **Frontend:** React.js, HTML5, CSS3, JavaScript
- **Backend:** Firebase Authentication for secure user management
- **API:** TMDB API to fetch movie data
- **Build Tool:** Vite
- **State Management:** React Hooks
- **Styling:** Custom CSS for responsive UI

## How to Run the Project Locally

Follow the steps below to get this project up and running on your local machine.

### Prerequisites

- Install [Node.js](https://nodejs.org/) (version 14 or higher).
- Install [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (npm comes bundled with Node.js).

### 1. Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
2. Install Dependencies
Run the following command to install the necessary dependencies:

bash
Copy
Edit
npm install
# or if you're using Yarn
yarn install
3. Configure Firebase
Go to the Firebase Console and create a new Firebase project.
Set up Firebase Authentication in the Firebase console and enable Email/Password authentication.
Copy your Firebase project configuration from the Firebase console.
Create a .env file in the root directory of the project and paste your Firebase config details in it like this:
bash
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Replace the placeholder values with your actual Firebase project configuration.

4. Run the Project Locally
After setting up Firebase and installing dependencies, you can start the development server:

bash
Copy
Edit
npm run dev
# or if you're using Yarn
yarn dev
The application will be running at http://localhost:3000.

5. Build for Production
To build the project for production:

bash
Copy
Edit
npm run build
# or if you're using Yarn
yarn build
This will create an optimized production build in the dist/ folder.

6. Preview the Production Build
To preview the production build locally:

bash
Copy
Edit
npm run preview
# or if you're using Yarn
yarn preview
The app will be available at http://localhost:5000.

Project Structure
Here's a basic overview of the project structure:

markdown
Copy
Edit
/public
  - index.html
  - favicon.ico

/src
  - /components
    - Navbar.js
    - MovieCard.js
    - MovieList.js
  - /firebase
    - firebase.js
  - App.js
  - index.js
  - App.css
  - index.css

.env
.gitignore
package.json
README.md
/public: Contains static assets like index.html and the app's favicon.
/src: Contains all the React components and JavaScript files. The firebase.js file manages Firebase authentication.
.gitignore: Specifies which files and directories to ignore in the git version control.
package.json: Contains metadata about the project and its dependencies.
```
###SCREENSHOTS:
<img width="1440" alt="Screenshot 2025-03-15 at 7 15 18 PM" src="https://github.com/user-attachments/assets/c5837cb2-1603-49db-991d-1e18b3f71129" />


<img width="1440" alt="Screenshot 2025-03-15 at 7 15 14 PM" src="https://github.com/user-attachments/assets/8ec489ef-f038-4c28-a6c3-131a85728585" />

<img width="1440" alt="Screenshot 2025-03-15 at 7 12 08 PM" src="https://github.com/user-attachments/assets/6fae67fd-e068-4a4d-bc84-9c6d03dc3e51" />

<img width="1440" alt="Screenshot 2025-03-15 at 7 13 09 PM" src="https://github.com/user-attachments/assets/3c8ca6d3-26ba-40c7-9909-9598854844bb" />

<img width="1440" alt="Screenshot 2025-03-15 at 7 12 33 PM" src="https://github.com/user-attachments/assets/f095a4ca-4769-4b6d-8877-ed0bbf0d5b40" />

