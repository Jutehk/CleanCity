# 🧪 CleanCity - QA Testing Artifacts

Welcome to the `tests/` folder for **CleanCity – Waste Pickup Scheduler**, a QA testing project by **Team Espada**. This folder documents our structured testing approach across the Software Testing Life Cycle (STLC), covering planning, execution, defect reporting, and collaboration.

---

## 📁 Folder Structure

| File/Folder Name             | Description |
|-----------------------------|-------------|
| `test-plan.md`              | Comprehensive testing strategy including scope, objectives, tools, and timeline |
| `test-cases.md`             | Detailed functional and non-functional test cases with expected vs actual outcomes |
| `defect-log.md`             | Logged bugs with severity, status, environments, and SonarLint code analysis issues |
| `traceability-matrix.md`    | Mapping between test cases and project requirements for full coverage verification |
| `team-collaboration/`       | Folder with communication logs and team meeting notes |
| `final-report.md`           | Summary of QA findings, testing metrics, and recommendations |
| `screenshots/` *(optional)* | Evidence for test case execution and failed scenarios |

---

## 🛠️ Tools & Frameworks Used

| Tool            | Purpose                            |
|------------------|------------------------------------|
| **Jest**         | Unit and integration testing for `dataService.js` and core logic |
| **Selenium**     | End-to-end UI testing across forms, routing, and role-based access |
| **Lighthouse**   | Auditing for accessibility, SEO, and performance |
| **SonarLint**    | Static code analysis and code smell detection |
| **GitHub Projects** | Task tracking, issue management, and team workflow |

---

## 👥 Team Espada

| Member Name      | Role                               |
|------------------|------------------------------------|
| Juliana Ndunge   | Team Leader & Test Strategist      |
| Lester Odhiambo  | Functional Tester & UI Validator   |
| Tidimalo Motsepe | Defect Analyst & Documentation Lead|

> See full breakdown in `team-collaboration/team-roles.md`.

---

## 🔁 Testing Timeline

| Phase        | Focus Area                                  | Due Date     |
|--------------|---------------------------------------------|--------------|
| Week 1       | Setup, planning, test environments          | July 2, 2025 |
| Week 2       | Test case creation, early execution         | July 9, 2025 |
| Week 3       | Final execution, defect logging, reporting  | July 16, 2025 |

---

## ✅ Test Coverage Summary

- **Registration & Login (User/Admin)**
- **Pickup Request & Feedback Forms**
- **Role-based Dashboard & Navigation**
- **Form Validations & Input Boundaries**
- **LocalStorage handling & data flow**
- **Accessibility Compliance (Lighthouse 90+)**

---

## 🧠 Team Collaboration

Meetings were held during each phase via **Zoom**, with asynchronous communication on **WhatsApp**. GitHub was used for:
- Task assignment and tracking via the Kanban board
- Code collaboration and issue management
- Sharing progress through commit messages and pull requests

Timezone coordination was a challenge (South Africa & Kenya), but effectively managed with flexible scheduling.

📁 Logs:
- [`team-collaboration/whatsapp screenshots`](./team-collaboration/whatsapp-screenshots/01.md)
- [`team-collaboration/team-meetings.md`](./team-collaboration/team-meetings.md)

---

## 📌 Notes

- No fixes were applied — this was a **testing-only** project.
- All issues identified are listed for future developer resolution.
- Testing was performed across multiple browsers and devices.

---

> 🎓 This folder supports our final QA report submission for the **CleanCity Project** (June 26 – July 16, 2025).
