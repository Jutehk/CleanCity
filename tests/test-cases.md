
## CleanCity: Waste Pickup Scheduler

**Group**: [Espada]
**Tester**: [Lester Odhiambo],[Tidimalo Motsepe]
**Test Date**: [3 July 2025 to 9 July 2025] 

## 📋 Introduction
CleanCity is a waste management application that automates garbage collection scheduling for residential and commercial areas. The system optimizes pickup routes, manages different waste types, and provides real-time updates to both residents and collection crews.

## Objective
To validate that the waste pickup scheduling system correctly assigns collection dates, optimizes routes, handles different waste categories, and provides accurate notifications to users.

## Purpose
Ensure the application reliably schedules waste pickups, minimizes collection inefficiencies, and delivers timely service updates to maintain clean neighborhoods and satisfied customers.

```
| **Test Case

| **Test Case ID** | **Title**                             | **Challenge Encountered**                                          | **Tools/Tech Used*         |
|------------------|---------------------------------------|-----------------------------------------------------------------   |-----------------------------
| TC001            | Login and Registration Redirect       | Registration link is broken; shows 404 error                       | Browser Dev Tools, Click Tracking
| TC002            | Welcome Message Visibility            | Welcome message partially hidden by top banner                     | Browser Inspector           
| TC003            | Awareness Page Layout                 | Sections are tightly packed; no padding between content blocks     | Chrome DevTools, CSS Grid 
| TC004            | Password Visibility Toggle            | No toggle icon; password always hidden                             | Manual UI Interaction, HTML 
| TC005            | Admin Navigation Bar Layout           | Items stacked vertically instead of horizontally                   | Browser Dev Tools, Responsi
| TC006            | Registration Form Submission          | All expected outcomes occurred; registration successful            | Manual Test                 
| TC007            | Registration Form Validation          | All validation messages appear correctly                           | Manual Test                 
| TC008            | Combined Filters                      | Filters show incorrect data; filter count is wrong or missing      | Manual Test, Dev Tools      
| TC009            | Filter Count Accuracy                 | Filter count doesn't update or shows wrong numbers                 | Manual Testing              
| TC010            | Login Authentication                  | Login works as expected                                            | Manual Test                
| TC011            | Form Validation (General)             | Error messages shown; form blocked as expected                     | Manual Test                 
| TC012            | Password Complexity Enforcement       | Accepts weak passwords without any validation                      | Manual Test                 
| TC013            | Password Confirmation Matching        | Rejects mismatched passwords with proper error                     | Manual Test                
| TC014            | Unrestricted Email Acceptance         | Accepts all email formats including invalid ones                   | Manual Test                 
| TC015            | Prefix Requirement                    | Accepts emails without required 'user_' or 'admin_' prefix         | Manual Test                
| TC016            | Role-Based Dashboard Routing          | Routes admin/user to correct dashboards with respective UI element | Manual Test                           |                                                                                                                                  

## ✅ Title: UI/UX and Functional Testing – Web Application
## Test Case 1: Login and Registration Link Redirect
Test Case ID: TC001

Description: Verify login and registration links redirect to their respective pages

Steps:
1. Open the homepage
2. Click on the Login link
3. Click on the Registration link

Expected Result:
- Login link should navigate to the Login page
- Registration link should navigate to the Registration page

Actual Result:
Login link redirects correctly
Registration link is broken; shows 404 error

Status: ❌ 



---

## Test Case 2: Welcome Message Visibility
Test Case ID: TC002

Description: Verify visibility of the welcome user message

Steps:
1. Log in using valid credentials
2. Observe the placement and visibility of the welcome message

Expected Result:
- The welcome message should be fully visible and properly aligned

Actual Result:
Message is partially hidden by the top banner

Status: ❌ 

---

## Test Case 3: Awareness Page Layout
Test Case ID: TC003

Description: Verify spacing and layout on the Awareness page

Steps:
1. Navigate to the Awareness page
2. Observe the spacing between different elements

Expected Result:
- Proper spacing and visual hierarchy should be present

Actual Result:
Sections are tightly packed with no padding between content blocks

Status: ❌ 

---

## Test Case 4: Password Field Visibility Toggle (Registration Page)
Test Case ID: TC004

Description: Verify "show/hide password" toggle functionality

Steps:
1. Go to the Registration page
2. Locate the password input field
3. Check for a show/hide toggle
4. Click on the toggle

Expected Result:
- Password input should toggle between visible and hidden states

Actual Result:
-No toggle icon present; password always hidden

Status: ❌ 

---

## Test Case 5: Admin Navigation Bar Layout
Test Case ID: TC005

Description: Verify layout and organization of navigation bar for admin user

Steps:
1. Log in as an admin
2. Inspect the navigation bar

Expected Result:
- Nav bar items should be well-aligned, responsive, and logically grouped

Actual Result:
-Items are stacked vertically instead of horizontally on desktop view

Status: ❌ 

----

Test Case 6: Registration Form Submission
Test Case ID: TC006

Description: Verify new users can successfully register through the form

Steps:
Manually navigate to /register
Enter valid details:
Name: "Test User"
Email: "testuser@domain.com"
Password: "TestPass123"
Click "Create Account"

Expected Result:
Success message appears
Redirects to login page
New user appears in localStorage

Actual Result:
Account created successfully
Redirects to login page as expected

Status: ✅

----

##Test Case 7: Registration Form Validation
Test Case ID: TC005

Description: Verify all field validations work correctly

Steps:
-Submit empty registration form
-Enter invalid email ("invalid-email")
-Enter mismatched passwords ("Pass1", "Pass2")

Expected Result:
"Name/Email/Password required" errors
"Enter valid email" error
"Passwords don't match" error

Actual Result:
All validation messages appear correctly

Status: ✅

----

Test Case 8: Combined Status and City Filters
Test Case ID: TC008

Description: Verify filters work together using AND logic and display correct counts

Steps:
Select "Scheduled" in status filter
Select "Nairobi" in city filter

Expected Result:
Only shows requests that are BOTH:
Status = "Scheduled"
City = "Nairobi"
Filter count shows "Showing [correct number] of [total] requests"
Clear visual indication of both active filters

Actual Result:
Shows incorrect mix of statuses
Includes requests from other cities

Filter count either:
Missing completely
Showing wrong numbers (e.g., "Showing 5 of 8" when only 2 should match)
Not updating when filters change

Status: ❌

----

Test Case 9: Filter Count Accuracy
Test Case ID: TC009

Description: Verify the filter count updates correctly for combined filters

Steps:
Note total request count (e.g., "12 total requests")
Apply "Pending" status filter
Observe count (e.g., "Showing 4 of 12")
Add "Kisumu" city filter
Observe updated count

Expected Result:
Initial count shows correct filtered subset
Count updates immediately when adding second filter
Final count reflects exact AND matches
Format: "Showing [filtered count] of [total count]"

Actual Result:
Count either:
Doesn't appear at all
shows wrong numbers
Doesn't update when adding second filter

May show "Showing 0 of 0" when matches exist

Status: ❌

----
Test Case 10: Login Authentication
Test Case ID: TC010

Description: Validate system authenticates users with correct credentials

Steps:
Enter valid email/password
Click "Sign In"

Expected:
Successful redirect to dashboard
Session established
Welcome message displays

Status:  ✅
----

## Test Case 11: Form Validation
Test Case ID: TC011

Description: Verify field validation rules for all inputs.  
Steps:  
 Submit empty form  
 Enter invalid date (32/13/2025)  
Test other invalid inputs (e.g., special characters in name field)  
Expected:  
- Specific error messages for each invalid field (e.g., "Date is invalid")  
- Form submission blocked until corrections are made  
Actual:  
- Correct error messages appear for all invalid inputs  
- Submission is blocked as expected  
**Status**: ✅ 

----
## Test Case 12: Form Validation
Test Case ID: TC012
TC012: Password Complexity Enforcement

Description: Verify system enforces minimum password requirements (8+ chars, 1 uppercase, 1 number).

Steps:
Navigate to registration page
Attempt to submit with:
weak (too short) → Error
nocomplexity (no numbers/uppercase) → Error
validPass123 (meets rules) → Accepted

Expected:
Blocks weak passwords with specific error messages
Accepts compliant passwords

Actual:
Accepts all passwords without validation
Status: ❌
----

## Test Case 13: Password Confirmation Matching
Test Case ID: TC013

Description: Ensure "Confirm Password" field matches the original.

Steps:
Enter Test123! in Password field
Enter Test123 in Confirm Password
Submit form

Expected:
Blocks submission with "Passwords do not match" error

Actual:
Rejects  mismatched passwords
Get an error message 
Status:✅ 

----
## Test Case 14:  Unrestricted Email Acceptance
Test Case ID : TC014

Description: Verify system currently accepts any email format

Steps:
Attempt registration with:
test@gmail.com
12345@yahoo.com
!@#$%@cleancity.com
Observe results

Expected: Should reject all

Actual: Accepts all email formats
Status: ❌
---
## Test Case 15: Prefix Requirement
TC015: Prefix Requirement
Description: Validate user_/admin_ prefix rule

Steps:
Register with:
regular@cleancity.com
support@cleancity.com

Expected: Reject with "Email must start with user_ or admin_"

Actual: Accepts non-prefixed emails

Status: ❌

----

##Test Case 16: Role-Based Dashboard Routing
Test Case ID: TC016

Description: Verify system routes users to correct dashboards based on email prefixes.

Steps:
Log in with admin_test@cleancity.com
Observe redirect location
Check for admin-specific elements
Log out
Log in with user_test@cleancity.com
Observe redirect location
Check for user-specific elements

Expected:
Admin prefix redirects to /admin-dashboard with admin tools
User prefix redirects to /user-dashboard with user features

Actual:
Correctly routes admin to admin dashboard
Correctly routes user to user dashboard
Appropriate UI elements visible for each role

Status: ✅
