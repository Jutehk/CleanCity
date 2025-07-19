# ✅ CleanCity: Waste Pickup Scheduler – Test Cases

**Group:** Espada  
**Testers:** Lester Odhiambo, Tidimalo Motsepe  
**Test Duration:** July 3 – July 9, 2025

---

## 📋 Introduction

CleanCity is a waste management application that automates garbage collection scheduling for residential and commercial areas. The system optimizes pickup routes, manages different waste types, and provides real-time updates to both residents and collection crews.

---

## 🎯 Objective

To validate that the system correctly:
- Assigns collection dates
- Optimizes pickup routes
- Handles different waste categories
- Notifies users accurately

---

## 🧪 Test Case Summary Table

| **Test Case ID** | **Title**                         | **Challenge Encountered**                                   | **Tools Used**                     |
|------------------|-----------------------------------|-------------------------------------------------------------|-------------------------------------|
| TC001            | Login and Registration Redirect   | Registration link shows 404 error                           | Browser DevTools                    |
| TC002            | Welcome Message Visibility        | Message is hidden by top banner                             | Chrome DevTools                     |
| TC003            | Awareness Page Layout             | No padding between content blocks                           | Chrome DevTools, CSS Grid           |
| TC004            | Password Visibility Toggle        | Toggle icon missing                                         | Manual UI Testing                   |
| TC005            | Admin Navigation Bar Layout       | Items stacked vertically                                    | Responsive View Tools               |
| TC006            | Registration Form Submission      | Successful outcome                                          | Manual Test                         |
| TC007            | Registration Form Validation      | Validation works as expected                                | Manual Test                         |
| TC008            | Combined Filters                  | Incorrect data shown, count wrong or missing                | DevTools, Manual Filter Testing     |
| TC009            | Filter Count Accuracy             | Count doesn't update correctly                              | Manual Test                         |
| TC010            | Login Authentication              | Works correctly                                              | Manual Test                         |
| TC011            | General Form Validation           | Blocks form with proper error messages                      | Manual Test                         |
| TC012            | Password Complexity Enforcement   | Weak passwords are accepted                                 | Manual Test                         |
| TC013            | Password Confirmation Match       | Works as expected                                           | Manual Test                         |
| TC014            | Unrestricted Email Acceptance     | Accepts all formats, even invalid                           | Manual Test                         |
| TC015            | Prefix Requirement                | Accepts non-prefixed emails                                 | Manual Test                         |
| TC016            | Role-Based Dashboard Routing      | Correct routing per role                                    | Manual Test                         |
| TC017            | Login – SQL Injection Attempt     | Attempt injection in email/password fields                  | Manual Test                         |

---

## 📘 Detailed Test Cases

### ✅ TC001: Login and Registration Link Redirect
- **Steps:**
  1. Open homepage  
  2. Click Login → redirects correctly  
  3. Click Register → shows 404 error
- **Expected:** Both links should work
- **Actual:** Registration link broken
- **Status:** ❌

---

### ✅ TC002: Welcome Message Visibility
- **Steps:** Log in and observe placement
- **Expected:** Fully visible
- **Actual:** Partially hidden
- **Status:** ❌

---

### ✅ TC003: Awareness Page Layout
- **Steps:** Navigate to Awareness page
- **Expected:** Proper spacing
- **Actual:** Tightly packed, no padding
- **Status:** ❌

---

### ✅ TC004: Password Visibility Toggle
- **Steps:** Open Registration page
- **Expected:** Toggle to show/hide password
- **Actual:** No toggle icon
- **Status:** ❌

---

### ✅ TC005: Admin Navigation Bar Layout
- **Steps:** Login as admin, check nav bar
- **Expected:** Horizontal alignment
- **Actual:** Stacked vertically
- **Status:** ❌

---

### ✅ TC006: Registration Form Submission
- **Steps:** Fill valid form → Submit
- **Expected:** Success, redirect to login
- **Actual:** As expected
- **Status:** ✅

---

### ✅ TC007: Registration Form Validation
- **Steps:** Submit empty form, invalid email, mismatched passwords
- **Expected:** All relevant validation errors
- **Actual:** All appear as expected
- **Status:** ✅

---

### ✅ TC008: Combined Filters
- **Steps:** Apply "Scheduled" + "Nairobi"
- **Expected:** Only matching records shown
- **Actual:** Mixed records and inaccurate count
- **Status:** ❌

---

### ✅ TC009: Filter Count Accuracy
- **Steps:** Apply filters and verify count
- **Expected:** Count updates with filters
- **Actual:** Wrong or no count
- **Status:** ❌

---

### ✅ TC010: Login Authentication
- **Steps:** Login with valid credentials
- **Expected:** Redirects to dashboard
- **Actual:** Works as expected
- **Status:** ✅

---

### ✅ TC011: Form Validation (General)
- **Steps:** Invalid name/date inputs
- **Expected:** Error messages appear, form blocked
- **Actual:** As expected
- **Status:** ✅

---

### ✅ TC012: Password Complexity
- **Steps:** Try weak and valid passwords
- **Expected:** Weak ones blocked, valid accepted
- **Actual:** All passwords accepted
- **Status:** ❌

---

### ✅ TC013: Password Confirmation Match
- **Steps:** Enter mismatched passwords
- **Expected:** Error shown, form blocked
- **Actual:** Works as expected
- **Status:** ✅

---

### ✅ TC014: Unrestricted Email Acceptance
- **Steps:** Try invalid email formats
- **Expected:** Should reject
- **Actual:** Accepts all
- **Status:** ❌

---

### ✅ TC015: Email Prefix Rule
- **Steps:** Use email without `user_` or `admin_`
- **Expected:** Rejected with message
- **Actual:** Accepted
- **Status:** ❌

---

### ✅ TC016: Role-Based Dashboard Routing
- **Steps:** Login with admin and user emails
- **Expected:** Routes to correct dashboards
- **Actual:** Works as expected
- **Status:** ✅

---


### ✅ TC017: Login – SQL Injection Attempt
- **Steps:** Input `' OR 1=1--` in email/password
- **Expected:** Input rejected or sanitized
- **Actual:** Login fails as expected, input not executed
- **Status:** ✅


