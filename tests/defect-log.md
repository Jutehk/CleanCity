# 🐞 Defect Log – CleanCity Scheduler

**Project**: CleanCity – Waste Pickup Scheduler  
**Group**: Espada  
**Testers**: Tidimalo Motsepe  
**Test Period**: 3 July 2025 – 9 July 2025  

This defect log records and tracks UI/UX and functional bugs discovered during testing of the CleanCity web application. Each entry includes severity, environment, and evidence to help with debugging and resolution.

---

## 🔧 Defect Entries

---

### 🔹 BUG001 – Broken Registration Link  
- **Date Logged**: 2025-07-09  
- **Feature**: Login/Register Navigation  
- **Steps**:  
  1. Open homepage  
  2. Click “Register”  
- **Expected**: Redirects to Registration page  
- **Actual**: Redirects to Login page  
- **Severity**: **Major**  
- **Priority**: High  
- **Environment**: Chrome v114, Windows 10  
- **Status**: Open  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/BUG001.png)

---

### 🔹 BUG002 – Welcome Message Hidden  
- **Date Logged**: 2025-07-09  
- **Feature**: Dashboard UI  
- **Expected**: Welcome message visible and centered  
- **Actual**: Hidden behind top banner  
- **Severity**: Minor  
- **Priority**: Medium  
- **Environment**: Microsoft Edge  
- **Status**: In Review  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG002.png)

---

### 🔹 BUG003 – Awareness Page Layout Overlap  
- **Date Logged**: 2025-07-09  
- **Feature**: Awareness Page  
- **Expected**: Proper spacing between content blocks  
- **Actual**: Content blocks overlap with no padding  
- **Severity**: Cosmetic  
- **Priority**: Low  
- **Environment**: Edge, Firefox, Chrome  
- **Status**: Open  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG003.png)

---

### 🔹 BUG004 – Missing Password Toggle  
- **Date Logged**: 2025-07-09  
- **Feature**: Registration  
- **Expected**: Show/hide password icon  
- **Actual**: Icon missing; password always hidden  
- **Severity**: **Major**  
- **Priority**: High  
- **Environment**: Chrome v114, Edge  
- **Status**: Open  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG004.png)

---

### 🔹 BUG005 – Admin Nav Stacked Vertically  
- **Date Logged**: 2025-07-09  
- **Feature**: Admin Navigation  
- **Expected**: Horizontal layout  
- **Actual**: Vertical stacking  
- **Severity**: Major  
- **Priority**: Medium  
- **Environment**: Edge v118, Windows 11  
- **Status**: Open  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG005.png)

---

### 🔹 BUG006 – Incorrect Filter Count  
- **Date Logged**: 2025-07-09  
- **Feature**: Dashboard Filters  
- **Expected**: Accurate filtered results and count  
- **Actual**: Results include unrelated entries; incorrect count  
- **Severity**: **Critical**  
- **Priority**: High  
- **Environment**: Chrome v114, Edge  
- **Status**: Open  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG006.png)

---

### 🔹 BUG007 – Weak Passwords Accepted *(Boundary validation)*  
- **Date Logged**: 2025-07-09  
- **Feature**: Registration Validation  
- **Expected**: Rejected weak passwords with message  
- **Actual**: All passwords accepted  
- **Severity**: **Critical**  
- **Priority**: High  
- **Environment**: Safari v16, Edge  
- **Status**: Open  
- **Evidence**:  
  [1](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG007%20(2).png),  
  [2](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG007%20(2).png)

---

### 🔹 BUG008 – Missing Email Prefix Validation *(Input validation)*  
- **Date Logged**: 2025-07-09  
- **Feature**: Email (Registration)  
- **Expected**: Rejects non-prefixed emails (`user_`, `admin_`)  
- **Actual**: Accepts them  
- **Severity**: Major  
- **Priority**: Medium  
- **Environment**: Chrome v114, Windows 10  
- **Status**: Open  
- **Evidence**:  
  [1](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG008%20(2).png),  
  [2](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG008.png)

---

### 🔹 BUG009 – Invalid Email Format Accepted *(Validation)*  
- **Date Logged**: 2025-07-09  
- **Feature**: Email (Registration)  
- **Expected**: Rejects email without format (`@`, domain)  
- **Actual**: Accepted without error  
- **Severity**: Major  
- **Priority**: Medium  
- **Environment**: Firefox v124, Edge  
- **Status**: Open  
- **Evidence**:  
  [1](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG008%20(2).png),  
  [2](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG008.png)

---

### 🔹 BUG010 – Filter Count Not Updating  
- **Date Logged**: 2025-07-09  
- **Feature**: Dashboard Filters  
- **Expected**: Live updates when filters are applied  
- **Actual**: Count stays same or disappears  
- **Severity**: Major  
- **Priority**: Medium  
- **Environment**: Chrome v114  
- **Status**: In Review  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG006.png)

---

### 🔹 BUG011 – Navigation Tabs Not Highlighting  
- **Date Logged**: 2025-07-10  
- **Feature**: Page Navigation  
- **Expected**: Current tab highlighted  
- **Actual**: Only "Home" stays highlighted  
- **Severity**: Minor  
- **Priority**: Medium  
- **Environment**: Chrome v115, Edge v114, Windows 11  
- **Status**: Open  
- **Evidence**: [Screenshot](https://github.com/Jutehk/CleanCity/blob/main/tests/screenshots/BUG011.png)
