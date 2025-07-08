# 🧪 CleanCity Selenium Test Report

## 🔍 Overview
Automated test suite for the CleanCity web app using **Selenium WebDriver (Python)**. Tests cover core features: login, admin updates, dashboard filters, feedback submission, and logout.

---

## ⚙️ Test Environment
- **WebDriver**: Chrome
- **Base URL**: `http://127.0.0.1:5500/index.html`
- **Language**: Python + Selenium
- **Waits**: Static (`time.sleep`) – needs improvement

---

## ✅ Test Cases

### 1. **Admin Status Update (`admin2.py`)**
- **Purpose**: Verify admin can update request status
- **Steps**:
  1. Login as admin (`admin@cleancity.com` / `admin123`)
  2. Go to Admin page
  3. Select a request → Change status to "Scheduled"
  4. Click **Update Status**
- **Validations**:
  - Request list populated
  - Button enabled and functional
  - Status updates correctly

---

### 2. **Dashboard Filter (`dash.py`)**
- **Purpose**: Check dashboard filtering (status + location)
- **Steps**:
  1. Login as user
  2. Go to Dashboard
  3. Filter by **Status: Pending** and **Location: Nairobi**
  4. Check filtered table data
  5. Logout
- **Validations**:
  - Filter functionality works
  - Correct data shown
  - Logout completes cleanly

---

### 3. **Feedback Submission (`feedback.py`)**
- **Purpose**: Test admin feedback form
- **Steps**:
  1. Login as admin
  2. Open Feedback page
  3. Fill form:
     - **Request ID**: `REQ001`
     - **Reason**: `Missed Pickup`
     - **Comments**: _Missed scheduled pickup_
  4. Submit
- **Validations**:
  - Admin verified
  - Form input accepted
  - Submission succeeds

---

### 4. **User Logout (`logout.py`)**
- **Purpose**: Verify login → logout cycle
- **Steps**:
  1. Login as user
  2. Click Logout
- **Validations**:
  - Login works
  - Logout button visible
  - Session ends properly

---

## 🔐 Test Credentials

| Role         | Email                  | Password     |
|--------------|------------------------|--------------|
| User         | user@cleancity.com     | password123  |
| Admin        | admin@cleancity.com    | admin123     |

---

## 📋 Test Data

- **Request ID**: `REQ001`
- **Status Options**: Pending, Scheduled
- **Location Filter**: Nairobi
- **Feedback Reason**: Missed Pickup

---

