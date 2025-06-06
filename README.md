# 🌐 Sunvoy User Fetcher – Full Stack Engineer Challenge

This Node.js script programmatically fetches:

- ✅ A list of users from the internal API of `challenge.sunvoy.com`
- ✅ The currently authenticated user's info

All results are saved into a formatted `users.json` file.

---

## 📦 Installation

```bash
npm install
```

---

## 🚀 Run the Script

```bash
npm run start
```

Make sure your `package.json` includes:

```json
"scripts": {
  "start": "node main.js"
}
```

---

## 🔐 Authentication & Session Handling

- Logs in using: `demo@example.org` / `test`
- Saves session cookies in `record.json`
- On re-run:
  - If cookie is valid, reuses it
  - If expired or invalid, auto-logs in again

---

## 📁 Output File

Generates a `users.json` file containing:

```json
{
  "users": [/* Array of 10 user objects */],
  "currentUser": {/* Authenticated user info */}
}
```

---

## 📹 Loom Demo

🎥 Watch the demo: [Paste your Loom video link here]

---

## ✅ Success Criteria Checklist

- [x] `npm run start` works as entry point  
- [x] Uses `fetch` for internal API calls  
- [x] `users.json` contains 10 users + 1 current user  
- [x] Uses current Node.js LTS version  
- [x] Minimal external dependencies  
- [x] No errors on execution  

---

## 📁 Project Structure

```
project-root/
├── main.js
├── utilities/
│   ├── auth.js
│   └── get_users.js
├── record.json       // Auto-generated cookie store
├── users.json        // Final output
└── README.md
```

---

## ⏱ Time Log

- ⏳ Estimated time: [6-7 hrs]  
- 🕒 Actual time taken: [10-12 hrs]

---

## 🛠 Dependencies Used

- `node-fetch`
- Core Node.js modules: `fs`, `path`, `crypto`
