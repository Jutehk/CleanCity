# 🧪 CleanCity QA Testing Environment Setup

**Team:** Espada   
**Date:** July 16, 2025  

---

## 💻 Operating Systems

| OS            | Purpose                         |
|---------------|----------------------------------|
| Windows 10/11 | Primary development and testing  |
| Android 11+   | Mobile browser simulation via DevTools |

---

## 🌐 Browsers Used

| Browser              | Version         |
|----------------------|-----------------|
| Chrome (Stable)      | 125+            |
| Firefox Dev Edition  | 124+            |
| Microsoft Edge       | Latest (Chromium-based) |

---

## 📱 Device Viewports

| Device Type | Resolution              | Method                          |
|-------------|--------------------------|----------------------------------|
| Desktop     | 1366x768 / 1920x1080     | Real devices + browser windows  |
| Mobile      | Responsive (360x640)     | Chrome DevTools + Android test  |

---

## 🧰 Tools and Extensions

| Tool/Extension        | Purpose                                   |
|------------------------|-------------------------------------------|
| **Chrome DevTools**     | Debugging, responsive/mobile simulation  |
| **Firefox Inspector**   | CSS/DOM inspection, alt testing env      |
| **Lighthouse Extension**| Performance and accessibility audit      |
| **axe DevTools (manual)** | Manual accessibility spot checks      |
| **GitHub Projects**     | Task tracking, Kanban test management    |

---

## 🧪 Testing Frameworks and Languages

| Tool             | Purpose                              |
|------------------|--------------------------------------|
| **Jest**         | Unit tests on `dataService.js`       |
| **Selenium (Python)** | End-to-end UI automation        |
| **HTML/CSS/JS**  | Main technology of the CleanCity app |

---

## 🔐 Test Credentials

| Role   | Email Address           | Password     |
|--------|--------------------------|--------------|
| Admin  | `admin@cleancity.com`    | `admin123`   |
| User   | `user@cleancity.com`     | `password123`|

---

## 📂 Folder Structure

| Folder / File                          | Description                         |
|----------------------------------------|-------------------------------------|
| [`tests/test-plan.md`](./test-plan.md)             | Test strategy and planning          |
| [`tests/test-cases.md`](./test-cases.md)           | Manual and automation test cases    |
| [`tests/defect-log.md`](./defect-log.md)           | Logged bugs and defects             |
| [`tests/final-report.md`](./final-report.md)       | Final QA test summary               |
| [`tests/utils/dataService.test.js`](./utils/dataService.test.js) | Jest unit tests         |
| [`tests/selenium/`](./selenium/)                  | Selenium automation scripts         |
| [`tests/screenshots/`](./screenshots/)            | Screenshots for test evidence       |
| [`tests/lighthouse-report.html`](./lighthouse-report.html) | Lighthouse audit report  |

---

## ⚙️ Running the Tests

### ▶️ Run Jest Tests
npm install
npm test


### ▶️Run Selenium Tests (Python)
pip install selenium
python tests/selenium/admin2.py

---

## ✅ Notes
- No backend: Application data is stored in `localStorage`
- Testing will simulate data by using local forms and saved browser sessions
- No database or server interaction expected

