# Introduction 

This Full-Stack App is built using React.js as frontend and Node.js as server backend. It also uses OpenAI API to translate user entered queries into SQL queries to the SQLite Database (Chinook Database which is a data model representing a digital media store, including tables for artists, albums, media tracks, invoices and customers). This query then goes through the server which interacts with the database and responds back with an answer which is again translated into a readable format using OpenAI API. The project also uses LangSmith which monitors, tests and deploy this LLM Application.

# Technologies used

- Client : React
- Server : Node.js, Express
- Database : SQLite
- API : OpenAI, LangChain

# Getting Started 

### Prerequisites
- Node.js (v14+)
- npm or yarn
- OpenAI API key

### Setup Instructions

1. **Clone the Repo**
   ```bash
   git clone https://github.com/ruchadaware18/Full-Stack-LLM-App.git
   cd Full-Stack-LLM-App

2. **Install Dependencies**
   - client:
     ```bash
     cd client && npm install
     ```
   - server:
     ```bash
     cd server && npm install
     ```
3. **Set Up Environment**
   - Create a `.env` in `server` with `OPENAI_API_KEY=your_key_here`.

4. **Run the server**
   ```bash
   cd server && npm start
   ```

5. **Run the client**
   ```bash
   cd client && npm start
   ```
Visit client at [http://localhost:3000](http://localhost:3000).

## Usage
Type a natural language query in the input field, e.g., "Show me all albums by AC/DC". The app translates it into SQL, executes it, and displays results.
