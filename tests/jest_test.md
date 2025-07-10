# 🧪 Jest Test Documentation – CleanCity Waste Scheduler

## Overview

This document outlines the Jest testing implementation for the `dataService.js` module used in the CleanCity Waste Pickup Scheduler project. The goal of these tests is to ensure data integrity, simulate realistic usage of localStorage, and validate user interaction logic with the data layer.

---

## 🛠 Tools Used

- **Jest**: JavaScript Testing Framework
- **Node.js**: Runtime environment
- **VS Code**: Development environment

---

## 📁 Test File Location

````bash
tests/utils/dataService.test.js

```▶️ How to Run Tests
Install dependencies first:
   npm install
Then run all tests:
   npm test
Run with coverage:

   npm run test -- --coverage



````

```

## ✅ Actual Test Results

> cleancity-waste-scheduler@1.0.0 test
> jest

PASS tests/utils/dataService.test.js

dataService - Pickup Requests

✓ should return all pickup requests (5 ms)
✓ should add a new pickup request (1 ms)
✓ should update request status (1 ms)
dataService - Filtering
✓ should filter requests by status (1 ms)
✓ should filter requests by location (bug expected) (1 ms)
dataService - Feedback
✓ should add and get feedback (2 ms)
dataService - Users
✓ should add a new user (1 ms)
✓ should not add duplicate email (1 ms)
✓ should get user by email

Test Suites: 1 passed, 1 total  
Tests: 9 passed, 9 total  
Snapshots: 0 total  
Time: 1.065 s  
Ran all test suites.


```
