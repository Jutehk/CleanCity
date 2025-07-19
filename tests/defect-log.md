# 🐞 Defect Log – CleanCity Scheduler

**Project**: CleanCity – Waste Pickup Scheduler  
**Group**: Espada  
**Testers**: Tidimalo Motsepe  
**Test Period**: 3 July 2025 – 9 July 2025  

---

## 📊 Defect Summary Table

| Bug ID   | Summary                           | Severity   | Priority | Status     |
|----------|-----------------------------------|------------|----------|------------|
| BUG001   | Broken Registration Link          | Major      | High     | Open       |
| BUG002   | Welcome Message Hidden            | Minor      | Medium   | Open       |
| BUG003   | Awareness Page Layout Overlap     | Cosmetic   | Low      | Open       |
| BUG004   | Password Toggle Missing           | Major      | High     | Open       |
| BUG005   | Vertical Admin Nav on Desktop     | Major      | Medium   | Open       |
| BUG006   | Filter Count Inaccuracy           | Critical   | High     | Open       |
| BUG007   | Accepts Weak Passwords            | Major      | High     | Open       |
| BUG008   | Email Prefix Not Enforced         | Major      | Medium   | Open       |
| BUG009   | Invalid Email Format Accepted     | Major      | Medium   | Open       |
| BUG010   | Filter Count Not Updating         | Major      | Medium   | Open       |
| BUG011   | Navigation Tabs Not Highlighting  | Minor      | Medium   | Open       |
| BUG012   | Missing Alt Attributes (SonarQube)| Minor      | Medium   | Open       |
| BUG013   | Inline Styles Detected (SonarQube)| Minor      | Low      | Open       |
| BUG014   | Missing Input Labels (SonarQube)  | Major      | Medium   | Open       |

---

## 🔧 Defect Entries

### 🔹 Bug ID: BUG001
- Summary: Broken Registration Link  
- Date Logged: 2025-07-09  
- Affected Feature: Login/Register Navigation  
- Steps to Reproduce:  
  1. Open the homepage  
  2. Click on the "Register" link  
- Expected vs Actual Result:  
  Expected: Redirects to the Registration page  
  Actual: Redirects to login page  
- Severity: Major  
- Priority: High  
- Environment: Chrome v114, Windows 10  
- Status: Open  
- Evidence: [BUG001 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/BUG001.png)  

---

### 🔹 Bug ID: BUG002
- Summary: Welcome Message Hidden  
- Date Logged: 2025-07-09  
- Affected Feature: Dashboard UI  
- Steps to Reproduce:  
  1. Log in using valid credentials  
  2. Observe welcome banner location  
- Expected vs Actual Result:  
  Expected: Welcome message fully visible and centered  
  Actual: Hidden behind top banner  
- Severity: Minor  
- Priority: Medium  
- Environment: Microsoft Edge  
- Status: In Review  
- Evidence: [BUG002 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG002.png)  

---

### 🔹 Bug ID: BUG003
- Summary: Awareness Page Layout Overlap  
- Date Logged: 2025-07-09  
- Affected Feature: Awareness Page  
- Steps to Reproduce:  
  1. Navigate to the Awareness page  
- Expected vs Actual Result:  
  Expected: Spacing between content blocks  
  Actual: Tightly packed elements with no padding  
- Severity: Cosmetic  
- Priority: Low  
- Environment: Edge, Firefox, Chrome  
- Status: Open  
- Evidence: [BUG003 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG003.png)  

---

### 🔹 Bug ID: BUG004
- Summary: Password Toggle Missing  
- Date Logged: 2025-07-09  
- Affected Feature: Registration Page  
- Steps to Reproduce:  
  1. Navigate to Registration  
  2. Check password input field  
- Expected vs Actual Result:  
  Expected: Show/Hide password icon present  
  Actual: Toggle icon is missing; password always hidden  
- Severity: Major  
- Priority: High  
- Environment: Chrome v114, Edge  
- Status: Open  
- Evidence: [BUG004 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG004.png)  

---

### 🔹 Bug ID: BUG005
- Summary: Vertical Admin Nav on Desktop  
- Date Logged: 2025-07-09  
- Affected Feature: Admin Navigation Bar  
- Steps to Reproduce:  
  1. Log in as admin  
  2. Inspect navbar layout  
- Expected vs Actual Result:  
  Expected: Items displayed horizontally and logically grouped  
  Actual: Items stacked vertically  
- Severity: Major  
- Priority: Medium  
- Environment: Edge v118, Windows 11  
- Status: Open  
- Evidence: [BUG005 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG005.png)  

---

### 🔹 Bug ID: BUG006
- Summary: Filter Count Inaccuracy  
- Date Logged: 2025-07-09  
- Affected Feature: Status + City Filters  
- Steps to Reproduce:  
  1. Apply "Scheduled" and "Nairobi" filters  
- Expected vs Actual Result:  
  Expected: Shows only exact matches; correct count  
  Actual: Mix of unrelated results; count incorrect or missing  
- Severity: Critical  
- Priority: High  
- Environment: Chrome v114, Edge  
- Status: Open  
- Evidence: [BUG006 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG006.png)  

---

### 🔹 Bug ID: BUG007
- Summary: Accepts Weak Passwords  
- Date Logged: 2025-07-09  
- Affected Feature: Registration Validation  
- Steps to Reproduce:  
  1. Enter weak password  
  2. Click submit  
- Expected vs Actual Result:  
  Expected: Rejected with specific error messages  
  Actual: All passwords accepted  
- Severity: Major  
- Priority: High  
- Environment: Safari v16, Edge  
- Status: Open  
- Evidence:  
  [BUG007 Evidence 1](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG007%20(2).png)

---

### 🔹 Bug ID: BUG008
- Summary: Email Prefix Not Enforced  
- Date Logged: 2025-07-09  
- Affected Feature: Email Field (Registration)  
- Steps to Reproduce:  
  1. Enter email without user_ or admin_ prefix  
- Expected vs Actual Result:  
  Expected: Error message appears  
  Actual: Accepts non-prefixed emails  
- Severity: Major  
- Priority: Medium  
- Environment: Chrome v114, Windows 10  
- Status: Open  
- Evidence:  
  [BUG008 Screenshot 1](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG008%20(2).png)  
  [BUG008 Screenshot 2](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG008.png)  

---

### 🔹 Bug ID: BUG009
- Summary: Invalid Email Format Accepted  
- Date Logged: 2025-07-09  
- Affected Feature: Registration Email Field  
- Steps to Reproduce:  
  1. Enter email tidimalomadikana@gmail.com  
- Expected vs Actual Result:  
  Expected: Rejected as invalid  
  Actual: Accepted without error  
- Severity: Major  
- Priority: Medium  
- Environment: Firefox v124, Edge  
- Status: Open  
- Evidence: [BUG009 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG008.png)  

---

### 🔹 Bug ID: BUG010
- Summary: Filter Count Not Updating  
- Date Logged: 2025-07-09  
- Affected Feature: Dashboard Filters  
- Steps to Reproduce:  
  1. Apply status and city filters  
  2. Observe count updates  
- Expected vs Actual Result:  
  Expected: Filter count adjusts instantly  
  Actual: Count doesn't change or disappears  
- Severity: Major  
- Priority: Medium  
- Environment: Chrome v114  
- Status: In Review  
- Evidence: [BUG010 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG006.png)  

---

### 🔹 Bug ID: BUG011
- Summary: Navigation Tabs Not Highlighting  
- Date Logged: 2025-07-10  
- Affected Feature: Main Page Navigation  
- Steps to Reproduce:  
  1. Log into the application  
  2. Click any navigation tab  
  3. Observe tab highlighting behavior  
- Expected vs Actual Result:  
  Expected: Current tab should be visually highlighted  
  Actual: "Home" remains highlighted regardless of active page  
- Severity: Minor  
- Priority: Medium  
- Environment: Chrome v115, Edge v114, Windows 11  
- Status: Open  
- Evidence: [BUG011 Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG011.png)  

---

### 🔹 Bug ID: BUG012 (SonarQube)
- Summary: Missing Alt Attributes in <img>
- Description: At least three images are missing the alt attribute, impacting screen reader accessibility.
- Location: index.html, Lines 351, 369, 388 (Column 25)
- Affected Feature: Awareness, Dashboard  
- Expected vs Actual Result:  
  Expected: All images have alt attributes  
  Actual: Several images missing alt text  
- Severity: Minor  
- Priority: Medium  
- Source: SonarQube  
- Status: Open  

---

### 🔹 Bug ID: BUG013 (SonarQube)
- Summary: Inline CSS Detected  
- Affected Feature: Login & Register  
- Expected vs Actual Result:  
  Expected: Styles handled through CSS files  
  Actual: Several inline styles detected  
- Severity: Minor  
- Priority: Low  
- Source: SonarQube  
- Status: Open  

---

### 🔹 Bug ID: BUG014 (SonarQube)
- Summary: Missing <label> for Form Inputs  
- Affected Feature: Register Form  
- Expected vs Actual Result:  
  Expected: Every input has an associated label  
  Actual: Multiple inputs without labels  
- Severity: Major  
- Priority: Medium  
- Source: SonarQube  
- Status: Open  

---
