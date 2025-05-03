# 📊 PreçoRadar

**PreçoRadar** is a personal portfolio project that tracks and displays the prices of essential goods from various supermarkets in Belo Horizonte, Brazil. It provides historical pricing data in a clean and minimal interface.

This project is split into two parts:

- **Backend**: Scrapes and stores product prices, and serves a REST API.
- **Frontend**: Presents this data through a modern, minimal UI.

---

## 🧠 Motivation

PreçoRadar was inspired by the need for reliable data on the cost of living in Brazil. In response to misinformation and political discourse, it aims to deliver clear, verifiable price history — straight from the source.

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

---

## 🖼️ Features

### ✅ Frontend

- View **latest prices**
- View **daily average prices**
- Filter by **market**, **brand**, or **product**
- Clean and responsive layout

### ✅ Backend

- Automated scraping of multiple real supermarkets
- Stores full price history
- Clean and modular architecture
- REST API to access data

---

## 🌐 Sample API Endpoints

- `GET /api/prices/latest`
- `GET /api/prices/averages`
- `GET /api/prices?market=supernosso&type=feijao`

---

## 📈 Roadmap Ideas

- Charts to visualize trends over time
- User subscriptions and notifications
- Expand coverage to more Brazilian regions
- Public documentation for external API access

---

## 🙋 About the Developer

Hi! I'm a self-taught web developer and this is intended to be a full-stack portfolio project. I'm passionate about using technology to bring transparency to important topics, and to solve real world problems.

Feel free to check out more of my work or connect:

- [GitHub](https://github.com/ToastedGMS)
- [LinkedIn](https://www.linkedin.com/in/gabriel-siqueira-5256111ab/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
