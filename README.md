# LinkedIn Job Scraper

A web application that scrapes LinkedIn job listings, displays them in a frontend interface, and allows you to track your application status. All data is stored in Firebase.

## Features

- **LinkedIn Job Scraping**: Fetches job listings from LinkedIn based on your search criteria
- **Job Status Tracking**: Track each job's status with three possible states:
  - ✅ To Review (default)
  - ✅ Accepted
  - ✅ Rejected
- **Firebase Integration**: All job data is persisted in Firebase
- **User-Friendly Interface**: Clean UI to view and manage your job applications

## Technologies Used

- Frontend: React.js (or Vue.js/Angular - specify which)
- Backend: Node.js/Express (if applicable)
- Database: Firebase Firestore
- Web Scraping: Puppeteer/Cheerio (or whatever you're using)
- Other Libraries: (list any important ones)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fullsnacker/mvp-nova-front.git
   cd mvp-nova-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Get your Firebase configuration object
   - Create a `.env` file in the root directory and add your Firebase config
     
4. Run the application:
   ```bash
   npm start
   ```

## Usage

1. Run the scraper.
2. View jobs: The jobs will appear in the main interface
3. Update status: Click on a job to change its status between "To Review", "Accepted", or "Rejected"

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT
