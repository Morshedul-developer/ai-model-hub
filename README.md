# 🤖 AI Model Hub

A modern web application for browsing and managing AI models — built with React 19, Vite, Tailwind CSS, and DaisyUI.

---

## 🚀 Tech Stack

| Technology                                                          | Version | Purpose                          |
| ------------------------------------------------------------------- | ------- | -------------------------------- |
| [React](https://react.dev/)                                         | ^19.2.5 | UI library                       |
| [Vite](https://vitejs.dev/)                                         | ^8.0.10 | Build tool & dev server          |
| [Tailwind CSS](https://tailwindcss.com/)                            | ^4.2.4  | Utility-first styling            |
| [DaisyUI](https://daisyui.com/)                                     | ^5.5.19 | Component library                |
| [React Toastify](https://fkhadra.github.io/react-toastify/)         | ^11.1.0 | Toast notifications              |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | ^6.0.1  | React fast refresh via Babel/Oxc |

---

## ✨ Features

- 🔍 **Models Tab** — Browse available AI models with card-based layout
- 🛒 **Cart Tab** — Add models to cart and manage selections, with live count badge
- ⚡ **Suspense-based Lazy Loading** — Models load asynchronously with a spinner fallback
- 🎨 **Gradient Tab UI** — Active tab highlights with custom gradients (red-orange for Models, indigo-purple for Cart)
- 🔔 **Toast Notifications** — User-friendly feedback using React Toastify
- 🌗 **DaisyUI Light Theme** — Clean, accessible UI out of the box

---

## 📁 Project Structure

```
ai-model-hub/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx          # App entry point
│   ├── App.jsx           # Root component with tab logic & Suspense
│   ├── components/
│   │   ├── Models.jsx    # AI model card listing
│   │   └── Cart.jsx      # Cart view
│   └── index.css         # Global styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Morshedul-developer/ai-model-hub.git

# Navigate into the project
cd ai-model-hub


---

## 🎨 UI Highlights

- **Tab Navigation** — Uses DaisyUI radio-based `tabs-box` with custom inline gradient styles per active tab
- **Suspense Fallback** — Centered spinner while model data loads
- **Conditional Rendering** — Active tab content switches between `<Models />` and `<Cart />` components

---

## 👨‍💻 Author

**Morshedul** — [@Morshedul-developer](https://github.com/Morshedul-developer)
```
