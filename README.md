# 🔐 Hasira Project – Secret Reconstruction using Lagrange Interpolation

This project implements a simplified version of **Shamir's Secret Sharing** using **MERN stack (MongoDB, Express, Node.js)**.

> ✅ Built for Catalog Placements Assignment  
> ✅ Computes the constant term `c` of an unknown polynomial  
> ✅ Reads specially formatted JSON testcases  
> ✅ Supports very large numbers using JavaScript `BigInt`

---

## 📁 Project Structure

hasira-project/
├── server/
│ ├── controllers/ # Main logic
│ ├── routes/ # API endpoints
│ ├── utils/ # Custom utilities
│ ├── models/ # MongoDB schema
│ ├── data/ # JSON testcases
│ ├── .env # MongoDB URI (not committed)
│ ├── .gitignore
│ ├── app.js
│ ├── server.js
│ └── package.json


---

## ⚙️ Technologies Used

- Node.js + Express
- MongoDB + Mongoose
- JavaScript `BigInt` for large number support
- Custom base conversion logic (up to base 36)
- Lagrange Interpolation (no modulus, real coefficient support)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/hasira-project.git
cd hasira-project/server
