# Dashboard

This is a simple and responsive dashboard built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It includes:

- A sidebar menu to switch between pages (Dashboard / Chart / Table)
- A product line chart (using Recharts)
- A modern table for products with sorting, filtering, and pagination
- Mobile responsive layout
- A logout button (clears user info)


## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Recharts**
- **Lucide Icons**


## Features

- Sidebar menu with navigation
- Mobile-friendly responsive design
- Line chart for product prices
- Dynamic table with:
  - Search by product name
  - Sort by ID, Name, or Price
  - Pagination
- Logout functionality


## Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/react-product-dashboard.git
cd react-product-dashboard
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.



## Notes

 Product data is currently hardcoded in the table and chart
 You can replace it with API calls in the future
 The logout removes `userInfo` from `localStorage` and redirects to `/login`



## Author

Made by \[patricia manasa]

