# Task Manager App

Effortless task management with secure login, real-time editing, and beautiful UI.

---

## Features Implemented

### Task Management

* **Dashboard** with task list, edit, delete, and navigation.
* **Task Details Page** displaying full task information.
* **Task Creation + Edit Forms** using the same component, with validation.

### Authentication (Auth0)

* Login/Logout using Auth0
* Private routes using `<PrivateRoute>` wrapper
* Custom `Auth0ProviderWithNavigate` setup

### Global State & Context

* Tasks managed through `TaskContext` using React Context API.
* Includes create, update, delete functions with TypeScript typing.

### TypeScript + Typed Hooks

* Type-safe useState and useContext throughout.
* Central `Task` type used for validation, props, and state.

### Styling & UI Theme

* Custom theme using `index.css`
* Fonts: Playfair Display & Poppins
* Color palette with lavender and blush pink hues
* Styled dashboard, homepage hero, metrics layout, and responsive components

---

## Technologies Used

* React (Vite)
* TypeScript
* Auth0 for Authentication
* React Router
* Context API
* Git + GitHub

---

## Environment Variables

Make sure to add a `.env` file at the root of your project with the following:

VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id

---

## Future Improvements

* Add persistent storage (Firebase, Supabase, or LocalStorage fallback)
* Include task tags or categories
* Dark mode toggle
* Custom Auth0 login theme
* Search/filter functionality
