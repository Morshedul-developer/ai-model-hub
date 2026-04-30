# 🤖 AI Model Hub

A modern web application for browsing and managing AI models — built with React 19, Vite, Tailwind CSS, and DaisyUI.

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-ai--model--hub-brightgreen?style=for-the-badge)](https://ai-model-hub-52.netlify.app/)
[![Portfolio](https://img.shields.io/badge/🧑‍💻_Portfolio-Morshedul_Khaer-blue?style=for-the-badge)](https://morshedul-khaer.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/📦_GitHub-Repo-black?style=for-the-badge&logo=github)](https://github.com/Morshedul-developer/ai-model-hub)

</div>

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.2.5 | UI library |
| [Vite](https://vitejs.dev/) | ^8.0.10 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.4 | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | ^5.5.19 | Component library |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | ^11.1.0 | Toast notifications |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | ^6.0.1 | React fast refresh via Babel/Oxc |

---

## ✨ Features

- 🔍 **Models Tab** — Browse available AI models with card-based layout
- 🛒 **Cart Tab** — Add models to cart and manage selections, with live count badge
- ⚡ **Suspense-based Lazy Loading** — Models load asynchronously with a spinner fallback
- 🎨 **Gradient Tab UI** — Active tab highlights with custom gradients (red-orange for Models, indigo-purple for Cart)
- 🔔 **Toast Notifications** — User-friendly feedback using React Toastify
- 🌗 **DaisyUI Light Theme** — Clean, accessible UI out of the box

---

## 🎨 UI Highlights

### 🗂️ Tab Navigation with Gradient Active States
The tab switcher uses DaisyUI's `tabs-box` with radio inputs. Instead of relying on DaisyUI's default checked styling (which doesn't support gradients), each tab uses inline `style` props to conditionally apply gradient backgrounds based on the active tab state — making it fully controlled by React.

```jsx
style={{
  background: activeTab === "Models"
    ? "linear-gradient(135deg, #ff416c, #ff4b2b)"
    : "transparent",
  color: activeTab === "Models" ? "white" : "inherit",
}}
```

- **Models tab** → Red-to-orange gradient (`#ff416c → #ff4b2b`)
- **Cart tab** → Indigo-to-purple gradient (`#6366f1 → #8b5cf6`)

---

### ⏳ Suspense with Async Data Loading
Models are fetched asynchronously and passed as a **Promise** to the `<Models />` component. React's `<Suspense>` wraps the tab content and shows a DaisyUI spinner while the data resolves — no manual loading state needed.

```jsx
<Suspense
  fallback={
    <div className="flex items-center justify-center h-64">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }
>
  {activeTab === "Models" && <Models modelPromise={modelPromise} />}
  {activeTab === "Cart" && <Cart />}
</Suspense>
```

---

### 🛒 Live Cart Badge
The Cart tab label dynamically shows the number of items currently in the cart, updating in real time as models are added or removed.

```jsx
aria-label={`Cart (${modelCards.length})`}
```

---

### 🔔 Toast Notification System
React Toastify is used for non-intrusive feedback messages — triggered when a user adds or removes a model from the cart, keeping the UI clean without any modal interruption.

---

### 📱 Fully Responsive Layout
Built mobile-first using Tailwind CSS utility classes. The card grid adapts gracefully across screen sizes, and the tab bar stays centered on all viewports.

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

# Install dependencies
npm install
```

---

## 📄 License

This project is private and not licensed for public distribution.

---

## 👨‍💻 Author

**Morshedul Khaer** — Frontend Developer focused on building clean, responsive, and modern web experiences.

- 🌐 Portfolio: [morshedul-khaer.netlify.app](https://morshedul-khaer.netlify.app/)
- 💻 GitHub: [@Morshedul-developer](https://github.com/Morshedul-developer)
- 📧 Email: nijhumkhandoker9@gmail.com
