# 📊 CleanCity – Requirements Traceability Matrix

**Project**: CleanCity – Waste Pickup Scheduler
**Team**: Espada
**Testing Scope**: Functional, UI/UX, Role-based Access, Validation, Data Handling
**Created On**: July 19, 2025

---

## 📌 Purpose

This Traceability Matrix ensures all specified functional requirements are mapped to corresponding test cases. It helps verify complete coverage, supports defect tracking, and ensures the testing is aligned with stakeholder expectations.

---

## ✅ Matrix Summary Table

| Req. ID | Requirement Description                                  | Related Test Case ID(s) | Status            |
| ------- | -------------------------------------------------------- | ----------------------- | ----------------- |
| FR-001  | User registration with full name, email, password, phone | TC-01, TC-02            | Covered           |
| FR-002  | Registration form validation                             | TC-02, TC-07            | Covered           |
| FR-003  | Account creation with "User" role                        | TC-01                   | Covered           |
| FR-004  | Login with email and password                            | TC-03                   | Covered           |
| FR-005  | Invalid login feedback                                   | TC-04                   | Covered           |
| FR-006  | User session stored in localStorage                      | TC-15                   | Covered           |
| FR-007  | Redirect after login                                     | TC-06                   | Covered           |
| FR-008  | Logout clears session                                    | TC-14                   | Covered           |
| FR-009  | Redirect to login after logout                           | TC-14                   | Covered           |
| FR-010  | Support for Admin and User roles                         | TC-05, TC-12            | Covered           |
| FR-011  | Admin-only functions restricted                          | TC-12, TC-13            | Covered           |
| FR-012  | Schedule pickups with all required fields                | TC-09                   | Covered           |
| FR-013  | Validate pickup date 24hr+ in advance                    | TC-09                   | Covered           |
| FR-014  | Show time slots for pickups                              | TC-10                   | Covered           |
| FR-015  | Prevent duplicate pickups on same date                   | TC-10                   | Covered           |
| FR-016  | View pickup history                                      | TC-06                   | Covered           |
| FR-017  | Cancel pending requests                                  | TC-06                   | Covered           |
| FR-018  | Modify before 24hrs                                      | TC-06                   | Covered           |
| FR-019  | Status display: Pending, Confirmed, etc.                 | TC-06                   | Covered           |
| FR-020  | Real-time pickup updates                                 | -                       | Not Covered       |
| FR-021  | Notifications on status change                           | -                       | Not Covered       |
| FR-022  | Add feedback after pickup                                | TC-11                   | Covered           |
| FR-023  | User dashboard with metrics and recent activity          | TC-06                   | Covered           |
| FR-024  | Calculate & show environmental impact                    | -                       | Not Covered       |
| FR-025  | Visual reports/charts                                    | -                       | Not Covered       |
| FR-026  | Community leaderboard                                    | -                       | Not Covered       |
| FR-027  | Trends by month/year                                     | -                       | Not Covered       |
| FR-028  | Export to CSV                                            | -                       | Not Covered       |
| FR-029  | Award badges for actions                                 | -                       | Not Covered       |
| FR-030  | Points & levels                                          | -                       | Not Covered       |
| FR-036  | Display rotating eco tips                                | -                       | Not Covered       |
| FR-037  | Environmental quizzes                                    | -                       | Not Covered       |
| FR-038  | Track quiz scores and explanations                       | -                       | Not Covered       |
| FR-041  | Post community tips                                      | -                       | Not Covered       |
| FR-042  | Like and comment on posts                                | -                       | Not Covered       |
| FR-045  | View/edit profile                                        | TC-06                   | Covered           |
| FR-047  | Upload profile picture                                   | -                       | Not Covered       |
| FR-049  | Follow other users                                       | -                       | Not Covered       |
| FR-053  | Admin views all requests                                 | TC-12                   | Covered           |
| FR-054  | Admin approves/rejects requests                          | TC-12                   | Covered           |
| FR-058  | Admin changes user roles                                 | TC-12                   | Covered           |
| FR-065  | Show notification bell                                   | -                       | Not Covered       |
| FR-069  | Responsive UI for mobile/tablet/desktop                  | TC-16                   | Covered           |
| FR-071  | WCAG compliance                                          | SonarQube               | Partially Covered |
| FR-073  | Image alt tags                                           | SonarQube               | Partially Covered |
| FR-078  | Use localStorage for persistence                         | TC-15                   | Covered           |
| FR-081  | Input validation                                         | TC-07, TC-13            | Covered           |
| FR-087  | Clear error messages                                     | TC-04, TC-07            | Covered           |

---

## 🧠 Notes

- Test cases are documented in [`test-cases.md`](./test-cases.md)
- SonarQube/SonarLint issues: missing image alt tags (`Web:ImgWithoutAltCheck`), contrast/accessibility flags, and unlabelled form controls (`Web:S6853`).
- Additional non-functional and UI requirements are referenced in GitHub issues.

---

## 📎 Reference

- [Test Plan](./test-plan.md)
- [Defect Log](./defect-log.md)
- [Final QA Report](./final-report.md)

---

✅ _Maintained by Team Espada – July 2025_
