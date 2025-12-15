**SkillStack – Frontend**

SkillStack is a personal skill-tracking application that helps users organize courses, tutorials, and certifications. The frontend is built with React, TailwindCSS, Vite, and connects to a backend API to manage skill data.

**Features**

- Add, edit, and delete learning goals (skills)
- Dashboard with skill statistics:
  - Total skills
  - Status breakdown (Started, In Progress, Completed)
  - Resource type breakdown (Video, Course, Article)
  - Platform breakdown (YouTube, Udemy, Coursera, Other)
  - Total hours spent and completion rate
  - Personalized insights
- Responsive navigation bar with mobile-friendly toggle
- 404 page with animated feedback
- Form validation, toast notifications, and modal-based skill editing
- SPA routing with React Router DOM

**Setup Instructions**

Prerequisites

- Node.js ≥ 18.x
- npm or yarn

Steps:-

1. Clone the repository

```bash
git clone your-frontend-repo-url //
cd skill-stack-frontend
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Run in development mode

```bash
npm run dev
# or
yarn dev
```

This will start the frontend at http://localhost:5173/ (default Vite port).

4. Build for production

```bash
npm run build
# or
yarn build
```

5. Preview production build

```bash
npm run preview
# or
yarn preview
```

**Backend Connection**

API is configured in src/api.js:

```javascript
import axios from "axios";
const API = axios.create({
  baseURL: "https://skill-stack-backend-production.up.railway.app",
});
export default API;
```

Make sure your backend is running and accessible to fetch and modify skill data.

**Tech Stack**
- Frontend Framework: React 19
- Bundler: Vite
- Styling: TailwindCSS 4
- UI Components: Material-UI
- Routing: React Router DOM
- HTTP Client: Axios
- Notifications: React Toastify, SweetAlert2
- Icons: React Icons

**Notes**

SPA rewrite is configured via vercel.json:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```


Ensure backend API URL is correct for deployment.

License:

MIT License
