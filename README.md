# 🛍️ Mercado Libre Challenge - Product Search & Detail Frontend

Welcome to the **Mercado Libre Product Search & Detail Frontend**! This project is a clean, responsive, and user-friendly React application built to simulate a product search and detail experience for the Mercado Libre platform. This frontend app provides seamless product browsing, featuring both a search results page and a detailed view of individual products. 🛒

---

## 📋 Features

- **🔍 Product Search**: Users can search for products using a search bar, displaying results with product images, and prices.
- **🗂️ Breadcrumb Navigation**: A breadcrumb component guides users through the category hierarchy, enhancing navigation.
- **📜 Product Detail Page**: Detailed information about selected products, including description, price, and shipping details.
- **💲 Currency Formatting**: Custom utility to format prices in a user-friendly manner.
- **📦 Component-based Architecture**: Modular components like `BreadCrumb`, `Header`, and `ItemProduct` for easy maintenance and scalability.

---

## 🛠️ Project Structure

This project is organized to make development, testing, and maintenance straightforward. Here’s an overview:

```plaintext
src/
├── clients/            # API clients for fetching data
│   ├── getProductDetails.ts
│   └── getSearchProducts.ts
├── components/         # Reusable components
│   ├── BreadCrumb/
│   │   ├── BreadCrumb.scss
│   │   └── index.tsx
│   ├── Detail/
│   │   ├── Detail.scss
│   │   └── index.tsx
│   ├── Header/
│   │   ├── Header.scss
│   │   └── index.tsx
│   └── ItemProduct/
│       ├── ItemProduct.scss
│       └── index.tsx
├── Pages/              # Page components
│   ├── ProductDetail/
│   │   └── index.tsx
│   └── ResultSearch/
│       ├── ResultSearch.scss
│       └── ResultSearch.tsx
├── test/               # Test cases
│   └── src/
│       └── components/
│           ├── BreadCrumb.test.tsx
│           ├── Detail.test.tsx
│           └── ItemProduct.test.tsx
├── utils/              # Utility functions
│   ├── formatCurrency.ts
│   └── index.ts
└── App.tsx             # Main app component
└── index.css           # Global styles
└── main.tsx            # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** and **Yarn** installed. This project also requires API keys or specific environment variables to access Mercado Libre's API.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/davidgonzalezt/meli-front.git
   cd meli-front
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run the app**:

   ```bash
   yarn dev
   ```

   The app should now be running at `http://localhost:5173`.

---

## 🧪 Testing

This project includes unit tests for components. Tests are located in the `src/test/` directory.

To run tests:

```bash
yarn test
```

---

## 📚 Tech Stack

- **React** - Core library for building the UI.
- **Vite** - Fast build tool for frontend development.
- **TypeScript** - For static type-checking.
- **SCSS** - Styling framework for component-specific styles.
- **Jest** - Testing framework for unit and integration tests.

---

## 📬 Contact

For any inquiries, please reach out at [josedavidgonzalezt@gmail.com](mailto:josedavidgonzalezt@gmail.com).

---