# 💱 Currency Converter (React)

A modern React-based web application that converts currencies in real-time using live exchange rates. Users can select currencies, input an amount, and instantly get the converted value.

---
<img width="647" height="458" alt="image" src="https://github.com/user-attachments/assets/a0f74c58-7ca9-4d1f-b6ef-2938f37641c7" />


## 🚀 Features

* Convert between multiple currencies
* Real-time exchange rates via API
* Swap currencies instantly
* Clean and responsive UI (Tailwind CSS)
* Reusable components (InputBox)
* Fast and optimized performance using React hooks

---

## ⚛️ React Hooks Used

### 1. `useState`

* Manages:

  * Input amount
  * Selected currencies (from/to)
  * Converted amount

---

### 2. `useEffect`

* Fetches updated currency data when the base currency changes

---

### 3. `useCallback`

* Optimizes functions like:

  * Currency conversion
  * Swap logic
* Prevents unnecessary re-renders

---

### 4. `useRef` *(used in components if applicable)*

* Handles direct DOM access (e.g., input focus or selection)

---

### 5. `useId`

* Generates unique IDs for accessibility (label ↔ input connection)

---

## 🌐 API Used

This project uses a currency exchange API to fetch real-time rates.

### Example API:

```bash id="r9g2h4"
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```

### How it works:

* Base currency (e.g., USD) is selected
* API returns exchange rates for multiple currencies
* Conversion is calculated using:

```js id="1yzgqk"
convertedAmount = amount * rate
```

---

## 🧠 Project Structure

```
src/
│
├── components/
│   ├── InputBox.jsx
│   └── index.js
│
├── hooks/
│   └── useCurrencyInfo.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Tech Stack

* React
* Tailwind CSS
* JavaScript (ES6+)
* Exchange Rate API

---

## 📦 Installation & Setup

```bash id="5p0o3g"
git clone https://github.com/the2rivage/CurrencyConvertorApp.git
cd CurrencyConvertorApp
npm install
npm run dev
```

---

## 🔄 How It Works

1. User enters an amount
2. Selects "From" and "To" currencies
3. App fetches exchange rates from API
4. Calculates converted value
5. Displays result instantly

---



## 🙌 Author

Sahil Bainya

---
