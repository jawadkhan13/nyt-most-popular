# 📰 NYT Most Viewed Articles App

A **React** + **Vite** application that fetches and displays the New York Times “Most Viewed” articles via RTK Query, with routing via React Router and styling using Material UI. Fully tested with Jest & React Testing Library (unit) and Cypress (E2E).

---


## <a name="tech-stack">⚙️ Tech Stack</a>

- Vite
- React.js
- Tailwind CSS

## <a name="quick-start">🤸 Quick Start</a>
Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/jawadkhan13/nyt-most-viewed.git
cd nyt-most-viewed
npm install
```

🏃‍♂️**Running the Project**

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.


**Configure API Key**

Create a file named .env in the project root:
VITE_NYT_KEY=your-nyt-api-key-here


🧪 **Testing**

npm run test:unit

**E2E Tests (Cypress)**
npm run cy:open
npm run test:e2e
