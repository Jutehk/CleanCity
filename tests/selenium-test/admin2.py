from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Start the browser
driver = webdriver.Chrome()
driver.maximize_window()

# Open the CleanCity app (adjust the URL as needed)
driver.get("http://127.0.0.1:5500/index.html")  # Change to your hosted/local path

time.sleep(3)

# Click Login link
driver.find_element(By.LINK_TEXT, "Login").click()
time.sleep(3)

# Fill in admin credentials
driver.find_element(By.ID, "login-email").send_keys("admin@cleancity.com")
driver.find_element(By.ID, "login-password").send_keys("admin123")

# Click Sign In
driver.find_element(By.CSS_SELECTOR, "#login-form button").click()
time.sleep(3)

# Go to Admin page
driver.find_element(By.LINK_TEXT, "Admin").click()
time.sleep(3)

# Wait for dropdowns to load (simulate)
request_dropdown = driver.find_element(By.ID, "requestSelect")
status_dropdown = driver.find_element(By.ID, "statusSelect")

# Select a request (if any options exist)
request_select = Select(request_dropdown)
if len(request_select.options) > 1:
    request_select.select_by_index(1)  # skip the placeholder option
else:
    print("No requests available to update.")
    driver.quit()
    exit()

# Select a new status
status_select = Select(status_dropdown)
status_select.select_by_visible_text("Scheduled")
time.sleep(3)

# Click Update Status button
update_button = driver.find_element(By.ID, "updateStatusBtn")
if update_button.is_enabled():
    update_button.click()
    print("Update Status button clicked successfully.")
else:
    print("Update button not enabled.")

time.sleep(3)
driver.quit()
