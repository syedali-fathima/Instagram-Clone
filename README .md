# 📸 Instagram Clone

A **React-based Instagram Clone** project that replicates core Instagram features like posts, stories, profiles, and comments.  
This project uses **React, Axios, JSON Server, and Bootstrap** to deliver a smooth and responsive UI.

---

## 🚀 Features
- 🔹 **User Stories** – View stories with profile picture & username  
- 🔹 **Posts Feed** – Display posts with captions, likes, and comments  
- 🔹 **Follow/Unfollow** – Suggestion system with toggle  
- 🔹 **Profile Management** – Edit username & profile picture dynamically  
- 🔹 **Responsive Design** – Mobile-friendly with Bootstrap utilities  

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Axios, Bootstrap  
- **Backend (Mock API):** JSON Server (`db.json`)  
- **Build Tool:** Vite  

---

## 📂 Project Structure

Instagram-Clone/
│── public/ # Static assets
│── src/
│ ├── assets/ # Images & icons
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
│── db.json # JSON Server mock database
│── package.json
│── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run JSON Server (Mock API)
bash
Copy code
npx json-server --watch db.json --port 3000
👉 Runs a fake REST API at http://localhost:3000/

4️⃣ Start React App
bash
Copy code
npm run dev
👉 Open http://localhost:5173 in your browser

📸 Screenshots
🏠 Home Feed


👤 Profile


📖 Story View


📌 Future Improvements
✅ Authentication with JWT

✅ Real backend integration (Node/Express + MongoDB)

✅ Image upload with Cloudinary

🙌 Contributing
Pull requests are welcome! If you find bugs or want new features, feel free to fork the repo and submit a PR.

📄 License
This project is licensed under the MIT License.

👩‍💻 Author
Syedali Fathima
Full-Stack Developer | AI Enthusiast
