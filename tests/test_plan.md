# 🧪 CleanCity - QA Testing Project Plan

## 📘 Project Overview

**Project Name:** CleanCity - Waste Pickup Scheduler  
**Team Leader:** Juliana  
**Team Size:** 3 Members  
**Testing Duration:** June 26 – July 16, 2025   
**Management Tool:** GitHub Projects Kanban

---

## 👥 Team Members & Roles

| Name              | Role                         | Responsibilities |
|-------------------|------------------------------|------------------|
| Juliana    | Team Lead, Coordinator       | GitHub setup, planning, reporting, review |
| Lester  | Functional & UI Tester       | Test cases, bug reporting, screenshots |
| Tidimalo   | Accessibility & UX Specialist | Accessibility testing, mobile/responsive checks, usability |

---

## 📆 Testing Timeline & Milestones

### **Week 1: Initial Setup & Planning**  
📅 **Due:** July 2, 2025  
- Create GitHub project and structure
- Create `tests/` folder
- Define team roles (`team-roles.md`)
- Prepare initial `test-plan.md`
- Set up GitHub Projects (Kanban Board)
- Define environment (`test-env.md`)

### **Week 2: Test Design & Early Execution**  
📅 **Due:** July 9, 2025  
- Draft test cases (`test-cases.md`)
- Log first bugs (`defect-log.md`)
- Begin exploratory/manual testing
- Document setup challenges

### **Week 3: Execution & Final Reporting**  
📅 **Due:** July 16, 2025  
- Complete testing on all features
- Expand defect log and add media
- Prepare final test report (`final-report.md`)
- Record & submit 5-minute presentation

---

## 🎯 Testing Goals

1. Detect functional and non-functional bugs
2. Ensure responsiveness and accessibility
3. Test across devices and browsers
4. Validate UX and gamification elements
5. Report all findings via GitHub Issues & Projects

---

## 🧪 Test Types Planned

| Test Type           | Description |
|---------------------|-------------|
| Functional Testing  | Core features like login, scheduling, dashboard |
| UI/UX Testing       | Navigation, layout consistency, user flow |
| Accessibility (WCAG)| Accessibility tools + keyboard & screen reader usage |
| Compatibility       | Chrome, Firefox, Edge; mobile + desktop |
| Performance         | Page load, responsiveness (Lighthouse) |

---

## 🛠️ Tools & Resources

| Tool                | Purpose |
|---------------------|---------|
| GitHub Projects     | Task & defect tracking |
| Chrome DevTools     | Debugging, mobile view |
| Lighthouse          | Performance & A11y testing |
| axe DevTools (later)| Accessibility validation |
| Screen Recorder     | Demo bugs in video |
| Google Docs/Drive   | Optional collab & backup |

---

## 🧪 Test Environment Summary

- **Platform:** Static React app (hosted on Netlify)
- **Storage:** localStorage (no backend)
- **Browsers:** Chrome, Firefox, Edge
- **Devices:** Laptop + Android (mobile view via DevTools)
- **Sample Users:** Admin + Regular user

For detailed setup: see `test-env.md`

---

## 🐛 Bug Reporting Workflow

Each bug will include:
- Summary
- Priority & severity
- Steps to reproduce
- Expected vs actual result
- Screenshot or screen recording
- Tags: `bug`, `critical`, `UI`, `accessibility`, etc.

---

## 📝 Deliverables by Week

### ✅ Week 1
- [x] `test-plan.md` (this file)
- [x] `team-roles.md`
- [x] `test-env.md`
- [x] GitHub Project board created
- [x] Repo initialized

### 🔄 Week 2 (In Progress)
- [ ] `test-cases.md`
- [ ] `defect-log.md`
- [ ] Manual testing begins

### 📤 Week 3
- [ ] Final test execution
- [ ] All issues documented
- [ ] `final-report.md` written
- [ ] Video presentation recorded

---

## 📊 Metrics We’ll Track

| Metric                 | Target |
|------------------------|--------|
| Bugs Logged            | ≥ 15   |
| Critical/Major Bugs    | ≥ 3    |
| Minor/Cosmetic Issues  | ≥ 7    |
| Test Case Coverage     | 100% of key features |
| Accessibility Score    | ≥ 90 (Lighthouse) |
| Presentation Duration  | 5 minutes |

---

## 🎓 Final Submission Summary

- ✅ PDF Report: `ESPADA_CleanCity_QA_Report_July16.pdf`
- ✅ Video File: `ESPADA_CleanCity_QA_Video_July16.mp4`
- ✅ All test docs under `/tests` folder
- ✅ GitHub Project Board fully used
- ✅ Defects categorized & well documented

---


