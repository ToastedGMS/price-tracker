# 📊 PreçoRadar

**PreçoRadar** is a personal portfolio project that tracks and displays the prices of essential goods from various supermarkets in Belo Horizonte, Brazil. It provides historical pricing data in a clean and minimal interface.

This project is split into two parts:

- **Backend**: Scrapes and stores product prices, and serves a REST API.
- **Frontend**: Presents this data through a modern, minimal UI.

---

## 🧠 Motivation

PreçoRadar was inspired by the need for reliable data on the cost of living in Brazil. In response to misinformation and political discourse, it aims to deliver clear, verifiable price history — straight from the source. By tracking essential goods like coffee, rice, and beans, PreçoRadar provides transparency in pricing, empowering consumers, journalists, and analysts to make informed decisions.

---

## 🏗️ Tech Stack

### Frontend

- **React** (Vite)
- **CSS Modules**
- **TanStack Query**
- **Date-fns**

### Backend

- **Node.js**
- **Express**
- **Puppeteer** (scraping)
- **PostgreSQL**
- **Prisma ORM**

### Deployment

- **Railway** (for hosting and quick interactions between front-end, back-end, and database)

---

## 🖼️ Features

### ✅ Frontend

- View **latest prices** for essential goods
- View **daily average prices**
- Filter by **market**, **brand**, or **product**
- Clean and responsive layout optimized for mobile devices
- Interactive **charts** to visualize price trends over time

### ✅ Backend

- **Automated scraping** of real supermarket data (e.g., Supernosso, Apoio Mineiro, Carrefour)
- **Stores full price history** for comparison and analysis
- **Clean and modular architecture** for easy updates and scalability
- REST API for data access, including endpoints for price tracking and analysis

---

## 🌐 Sample API Endpoints

- `GET /api/prices/latest` — Fetch the latest prices of all tracked products.
- `GET /api/prices/averages` — Retrieve average prices for products across different supermarkets.
- `GET /api/prices?market=carrefour&type=feijao` — Get prices of a specific product (e.g., beans) at a specific supermarket (e.g., Supernosso).

---

## 📈 Roadmap Ideas

- Expand coverage to include more Brazilian regions
- User **subscriptions** for price change notifications
- Add more product categories (e.g., dairy, beverages)
- Enhance public documentation for external API access

---

## 🏆 Developer's Note

Hi! I'm a self-taught web developer and this project showcases my full-stack capabilities. PreçoRadar was created not only to demonstrate technical proficiency, but also to promote transparency and tackle misinformation around the cost of living in Brazil.

The project utilizes modern technologies like **React**, **TanStack Query**, **Express**, and **PostgreSQL**. I also tackled real-world challenges like scraping unreliable APIs, handling data for multiple markets, and automating daily price collection.

Feel free to check out more of my work or connect:

- [GitHub](https://github.com/ToastedGMS)
- [LinkedIn](https://www.linkedin.com/in/gabriel-siqueira-5256111ab/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
