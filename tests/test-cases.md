
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
ID**     | **Title**                           | **Challenge Encountered**                                 | **Tools/Tech Used**                  |
| ---------------------------------------------|-----------------------------------------------------------|--------------------------------------|  
| TC001 | Login and Registration Link Redirect | Links not redirecting to the Login and Registration pages | Browser Dev Tools, Click Tracking    |
| TC002 | Welcome Message Visibility           | Welcome message is only partially visible                 | Browser Inspector, UI Snapshot Tool  |
| TC003 | Awareness Page Layout                | No spacing/gap between layout sections                    | Chrome DevTools, CSS Grid Inspector  |
| TC004 | Password Field Visibility Toggle     | Show/hide toggle not implemented                          | Manual UI Interaction, HTML Review   |
| TC005 | Admin Navigation Bar Layout          | Navigation bar items not properly organized or aligned    | Browser Dev Tools, Responsive Tester |
| TC006 | Submit Request Button Not Alerting   |  Suspected that event handler is not attached properly    | Selenium WebDriver                   |
| TC007 | Feedback Button Disabled Until Valid | Button remains clickable even when fields are empty       | Form Tester, Browser Dev Tools       |
| TC008 | Missing Confirmation in Admin Panel  | Status updates occur without a confirmation prompt        | Manual UI Interaction, DevTools      |
| TC009 | Success Message Visibility           | Success message disappears too quickly after submission   | Manual Testing, Timer Plugin         |
| TC010 | Long Text Input Handling             | Long input causes layout to break and horizontal scroll   | Browser Inspector, Responsive Mode   |
| TC011 | Data Persistence After Page Refresh  | Newly submitted requests disappear after refreshing       | Chrome DevTools, LocalStorage View   |
| TC012 | Mobile Tap Target Size               | Buttons are too small to tap easily on mobile             | Mobile View Tester, Chrome DevTools  |
| TC013 | Invalid Date Format Handling         | Invalid date format accepted without error                | Manual Entry, Form Validator Tool    |
| TC014 | Login Functionality                  | Login works correctly                                     | Manual Test                          |
| TC015 | Registration Form Submission         | User registration is successful                           | Manual Test                          |
| TC01  | Logout Functionality                 | Logout ends session and redirects as expected             | Manual Test                          |
| TC017 | Password Visibility Toggle           | Toggle shows and hides password accurately                | Manual Test                          |
| TC018 | Dashboard Data Load                  | Dashboard loads request data successfully                 | Manual Test                          |
| TC019 | Notification Banner Display          | Notification banner displays after submission             | Manual Test                          |
| TC020 | Search Filter on Dashboard           | Search filters results based on keyword input             | Manual Test                          |
| TC021 | Request Pagination Functionality     | Pagination loads additional records properly              | Manual Test                          |
| TC022 | Role-Based Access Control            | Access is restricted based on user roles correctly        | Manual Test                          |

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
---

## Test Case 6:Submit Request Button Not Showing Alert
Test Case ID: TC006

Description:the behavior of the "Submit Request" button when clicked, specifically checking whether it shows the expected alert message.

Steps:
1. Navigate to the form page
2. Fill in required fields
3. Click "Submit Request" button

Expected Result:
-An alert popup should appear with confirmation message

Actual Result:
-Form submits silently with no feedback or alert shown

Status: ❌

Test Case 7: Feedback Button Disabled Until Valid
Test Case ID: TC007

Description:
Ensure that the "Submit Feedback" button remains disabled until all required fields are valid.

Steps:
Navigate to the Feedback page
Leave all fields empty
Check if the "Submit Feedback" button is clickable

Expected Result:
The button should remain disabled until all fields are filled and valid

Actual Result:
Button remains clickable even when form is incomplete

Status: ❌

Test Case 8: Missing Confirmation in Admin Panel
Test Case ID: TC008

Description:
Verify if a confirmation prompt appears before updating the status of a request in the Admin panel.

Steps:
Navigate to the Admin panel
Click the "Mark as Scheduled" button

Expected Result:
A confirmation dialog should appear before updating the status

Actual Result:
Status updates instantly without any confirmation prompt

Status: ❌

Test Case 9: Success Message Visibility
Test Case ID: TC009

Description:
Check if the success message after form submission remains visible for at least 3 seconds.

Steps:
Submit a valid request form
Observe the visibility duration of the success message

Expected Result:
Success message should appear and remain visible for 3+ seconds

Actual Result:
Message disappears after approximately 1 second

Status: ❌

Test Case 10: Long Text Input Handling
Test Case ID: TC010

Description:
Validate that long text input does not break the page layout or cause horizontal scrolling.

Steps:
Navigate to a form with a text input
Enter 500+ characters
Observe layout behavior

Expected Result:
Text input should be handled gracefully without breaking layout

Actual Result:
Layout breaks and introduces horizontal scrolling

Status: ❌

------

Test Case 11: Data Persistence After Page Refresh
Test Case ID: TC011

Description:
Ensure that submitted request data persists even after a page refresh.

Steps:
Submit a new request
Navigate to Dashboard
Refresh the page

Expected Result:
The newly submitted request should still be visible

Actual Result:
The new request disappears after refreshing the page

Status: ❌

-------

Test Case 12: Mobile Tap Target Size
Test Case ID: TC012

Description:
Verify that all buttons meet the minimum tap target size on mobile devices.

Steps:
Open the app in mobile view
Try tapping on all interactive buttons

Expected Result:
All buttons should be large enough and easy to tap

Actual Result:
Buttons are small and difficult to tap accurately

Status: ❌

-------

Test Case 13: Invalid Date Format Handling
Test Case ID: TC013

Description:
Check if the system correctly rejects an invalid date format in the input field.

Steps:
Enter an invalid date format like "32/13/2025"
Try to submit the form

Expected Result:
An error should be displayed for the invalid date format

Actual Result:
Form accepts the invalid date without any error message

Status: ❌


------
Test Case 14: Login Functionality

Test Case ID: TC014

Description: Valid login credentials should work
Steps:
Go to login
Enter valid credentials

Expected Result: Redirect to dashboard

Actual Result: Successfully logged inStatus: ✅

-----

Test Case 15: Registration Form Submission
Test Case ID: TC015

Description: Valid data should register user

Steps:
Fill form
Click Register

Expected Result: Redirect to login page

Actual Result: Registered successfullyStatus: ✅

-----

Test Case 16: Logout Functionality
Test Case ID: TC016

Description: Logout should end session

Steps:
Log in
Click Logout

Expected Result: Redirect to login

Actual Result: Logged out and redirected

Status: ✅
------

Test Case 17: Password Visibility Toggle
Test Case ID: TC017

Description: Password toggle should work

Steps:
Enter password
Toggle visibility

ExpectedResult: Toggles correctly

Actual Result: Works as expected

Status: ✅

------

Test Case 18: Dashboard Data Load
Test Case ID: TC018

Description: Dashboard should load requests

Steps:
Submit request
Log in as admin
Check dashboard

Expected Result: Request is displayed

Actual Result: Data shown correctly

Status: ✅

-----

Test Case 19: Notification Banner Display
Test Case ID: TC019

Description: Verify that notification banner displays after submission

Steps:
Submit a form or complete an action that triggers a notification
Observe if the notification banner appears

Expected Result:
Notification banner should be displayed confirming the action

Actual Result:
Notification banner displays after submission

Status: ✅

-----

Test Case 20: Search Filter on Dashboard
Test Case ID: TC020

Description: Verify that the search filters results based on keyword input

Steps:
Navigate to the dashboard
Enter a keyword in the search filter
Observe filtered results

Expected Result:
Results should filter dynamically according to the search keyword

Actual Result:
Search filters results based on keyword input

Status: ✅

-----

Test Case 21: Request Pagination Functionality
Test Case ID: TC021

Description: Verify that pagination loads additional records properly

Steps:
Navigate to a page with paginated records
Use pagination controls to load next pages

Expected Result:
Additional records should load without errors as pages change

Actual Result:
Pagination loads additional records properly

Status: ✅

----

Test Case 22: Role-Based Access Control
Test Case ID: TC022

Description: Verify that access is restricted based on user roles correctly

Steps:
Login with different user roles
Attempt to access restricted pages or features

Expected Result:
Access should be granted or denied according to user role permissions

Actual Result:
Access is restricted based on user roles correctly

Status: ✅

-----


