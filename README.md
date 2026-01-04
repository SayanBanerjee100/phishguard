# 🛡️ PhishGuard – Phishing Link & Email Detector

PhishGuard is a web-based cybersecurity application that helps users detect **phishing links and malicious email content** in real time.  
It analyzes URLs and email text using **rule-based heuristics, pattern matching, and security indicators** to determine whether the input is **Safe, Suspicious, or Phishing**.

The project is designed to be **lightweight, fast, explainable, and hackathon-ready**, focusing on awareness and prevention of cyber fraud.

---

## 📌 Problem Statement

Phishing is one of the most common cyber threats worldwide.  
Users often fall victim to fake emails and malicious links due to lack of awareness and technical knowledge.

Existing tools are either:
- Too complex for non-technical users
- Hidden behind browser extensions
- Not explainable

**PhishGuard** solves this by providing a **simple and transparent platform** where users can instantly verify links and email content.

---

## 💡 Solution

PhishGuard allows users to:
- Paste a **URL** or **email content**
- Get an instant analysis with:
  - Risk level
  - Risk score
  - Reason for detection
  - Safety recommendations

The system uses **cybersecurity heuristics** instead of heavy AI models, making it fast, reliable, and easy to understand.

---

## ✨ Key Features

- 🔍 URL phishing detection
- 📧 Email content analysis
- 📊 Risk scoring system (0–100)
- ⚠️ Suspicious keyword detection
- 🌐 Domain anomaly checks
- 🧠 Explainable security results
- 🎓 Cyber awareness tips
- 🖥️ Clean and responsive UI

---

## 🧰 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript / React

### Backend
- Spring Boot / Node.js
- RESTful APIs

### Security Logic
- Regex-based pattern matching
- Blacklisted domain checks
- Heuristic-based rules

### Database (Optional)
- MongoDB / PostgreSQL (for logs and analytics)

### DevOps
- Docker
- Git & GitHub

---

## 🏗️ System Architecture

User
↓
Web Interface (Frontend)
↓
Backend API
↓
Phishing Detection Engine
↓
Risk Evaluation & Response

yaml
Copy code

---

## ⚙️ How It Works

1. User submits a URL or email content
2. Backend performs checks:
   - Suspicious keywords
   - URL structure anomalies
   - Domain patterns
   - Known phishing indicators
3. Risk score is calculated
4. Result is returned with:
   - Classification (Safe / Suspicious / Phishing)
   - Explanation
   - Safety advice

---
