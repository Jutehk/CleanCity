from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Set up the driver
driver = webdriver.Chrome()
driver.maximize_window()

# Open the website
driver.get("http://127.0.0.1:5500/index.html")  # Replace with actual path
time.sleep(3)

# Login as regular user
login_link = driver.find_element(By.CSS_SELECTOR, 'a[data-page="login"]')
login_link.click()
time.sleep(2)

# Fill login form
email = driver.find_element(By.ID, "login-email")
email.send_keys("user@cleancity.com")

password = driver.find_element(By.ID, "login-password")
password.send_keys("password123")

login_btn = driver.find_element(By.CSS_SELECTOR, "#login-form button")
login_btn.click()
time.sleep(3)

# Go to dashboard
dashboard_link = driver.find_element(By.CSS_SELECTOR, 'a[data-page="dashboard"]')
dashboard_link.click()
time.sleep(3)

# Test filters
print("Testing dashboard filters...")

# Filter by status
status_filter = Select(driver.find_element(By.ID, "statusFilter"))
status_filter.select_by_visible_text("Pending")
time.sleep(3)
print(" - Applied Pending filter")

# Filter by location
location_filter = Select(driver.find_element(By.ID, "locationFilter"))
location_filter.select_by_visible_text("Nairobi")
time.sleep(3)
print(" - Applied Nairobi location filter")


# Check if table has data
table_rows = driver.find_elements(By.CSS_SELECTOR, "#requests-tbody tr")
print(f" - Found {len(table_rows)} requests in the table")

# Logout
logout_btn = driver.find_element(By.ID, "logout-btn")
logout_btn.click()
time.sleep(3)

print("Dashboard test completed successfully!")

# Close the browser
driver.quit()