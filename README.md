# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#  Expense Tracker App

A simple expense tracking application built with React. You can add, view, search, sort, and delete your expenses easily.

---

##  Features

-  Add new expenses
-  Search expenses by name or description
-  Clear and simple layout
-  Automatically sorts expenses alphabetically by name
-  Delete any expense

---

##  Tech Stack

- React (with functional components and Hooks)
- Vite (for fast development)
- CSS (for styling)

---

##  Project Structure

src/ │ ├── components/ │ ├── ExpenseForm.jsx # The form to add new expenses │ ├── ExpenseTable.jsx # Table to display all expenses │ ├── ExpensesData.js # Initial dummy data │ ├── App.jsx # Main application file ├── App.css # App styling └── main.jsx # React app entry point