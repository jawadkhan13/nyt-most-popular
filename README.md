# 📰 NYT Most Popular Articles App

A **React** + **Vite** application that fetches and displays the New York Times “Most Viewed” articles via RTK Query, with routing via React Router and styling using Material UI. Fully tested with Jest & React Testing Library (unit) and Cypress (E2E).

---

## 🚀 Quick Start

### 1️⃣ Clone & Install Dependencies

```bash
git clone https://github.com/yourusername/nyt-popular-articles.git
cd nyt-popular-articles
npm install

### 2️⃣ Configure Your API Key
Create a file named .env in the project root:
VITE_NYT_KEY=your-nyt-api-key-here

🏃‍♂️ Development Server
npm run dev

📦 Production Build
npm run build

🧪 Testing
npm run test:unit

E2E Tests (Cypress)
npm run cy:open
npm run test:e2e

nyt-popular-articles/
├─ src/
│  ├─ api/           # RTK Query service definition
│  │   └─ NYTDB.js
│  ├─ app/
│  │   └─ store.js   # Redux store configuration
│  ├─ features/      # Redux slices
│  ├─ components/    # Presentational + container components
│  ├─ pages/         # Route-level components (list & detail)
│  ├─ ui/            # Shared UI primitives (e.g., Bounded)
│  └─ main.jsx       # Vite entry point
│
├─ cypress/          # E2E tests
│  ├─ e2e/           # Spec files (.cy.js)
│  └─ support/       # Cypress commands & hooks
│
├─ jest.config.cjs   # Jest configuration
├─ cypress.config.js # Cypress configuration
├─ vite.config.js    # Vite configuration
├─ .env              # Environment variables (ignored by Git)
├─ package.json
└─ README.md

🔑 Key Scripts
| Command             | Description                                          |
|:--------------------|:-----------------------------------------------------|
| `npm run dev`       | Start development server                             |
| `npm run build`     | Build for production                                 |
| `npm run preview`   | Preview production bundle                            |
| `npm run test:unit` | Run unit tests + generate coverage                   |
| `npm run test:watch`| Unit tests in watch mode                             |
| `npm run test:e2e`  | Run Cypress end-to-end tests headless (CI)            |
| `npm run cy:open`   | Open Cypress Test Runner GUI                         |
| `npm run lint`      | Run ESLint                                            |
| `npm run format`    | Run Prettier to format code                          |

