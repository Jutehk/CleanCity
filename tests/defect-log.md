# 🐞 Defect Log – CleanCity scheduler

**Project**: CleanCity – Waste Pickup Scheduler  
**Group**: Espada  
**Testers**: Tidimalo Motsepe  
**Test Period**: 3 July 2025 – 9 July 2025  

This file documents all discovered issues during QA testing.

| Bug ID  | Title                                   | Related Test Case | Priority | Severity | Status | Description                                                                 |
|---------|-----------------------------------------|-------------------|----------|----------|--------|-----------------------------------------------------------------------------|
| BUG001  | Submit button not working               | TC006             | High     | Major    | Open   | Submit button does not trigger confirmation alert.                          |
| BUG002  | Layout breaks on Windows laptop         | TC002             | Medium   | Major    | Open   | Layout shifts and elements overlap on homepage.                             |
| BUG003  | Missing field validation                | TC007             | High     | Major    | Open   | Required fields submit without showing validation errors.                   |
| BUG004  | Incorrect date format accepted          | TC013             | Medium   | Major    | Open   | Allows input of wrong date format (e.g., 13-07-25).                         |
| BUG005  | Dropdown menu not working               | TC005             | Medium   | Major    | Open   | Location dropdown fails to expand when clicked.                             |
| BUG006  | Image upload fails silently             | TC006             | High     | Major    | Open   | Upload field fails with no feedback or confirmation.                        |
| BUG007  | Page reload clears form                 | TC011             | Low      | Minor    | Open   | Reloading the page clears all form data with no warning.                    |
| BUG008  | Submit button not disabled              | TC007             | Medium   | Major    | Open   | Submit button remains active even with invalid/empty fields.                |
| BUG009  | Success message not localized           | TC009             | Low      | Minor    | Open   | Confirmation message not translated to selected language.                   |
| BUG010  | Map not loading on form page            | TC005             | High     | Major    | Open   | Embedded map does not load on the form page.                                |
