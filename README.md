## Setup Instructions

### Backend

#### Prerequisites:

- Node.js
- MongoDB

#### Steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/manmeetskalra/vending-backend.git
   cd vending-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   PORT=3000
   MONGO_URI="mongo_uri"
   JWT_SECRET="your_secret_key"
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. API will be available at `http://localhost:3000`
