from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Step 1: Setup
driver = webdriver.Chrome()
driver.get("http://127.0.0.1:5500/index.html")  # Change to your app's URL if hosted elsewhere
driver.maximize_window()
time.sleep(3)

# Step 2: Click "Login" from nav (in case not on login page)
login_link = driver.find_element(By.LINK_TEXT, "Login")
login_link.click()
time.sleep(3)

# Step 3: Fill login form
email_input = driver.find_element(By.ID, "login-email")
password_input = driver.find_element(By.ID, "login-password")

email_input.send_keys("user@cleancity.com")
password_input.send_keys("password123")

submit_btn = driver.find_element(By.CSS_SELECTOR, "#login-form button")
submit_btn.click()
time.sleep(3)  # wait for login to complete

# Step 4: Click "Logout"
logout_btn = driver.find_element(By.ID, "logout-btn")
logout_btn.click()
time.sleep(4)


  # Step 6: Close the browser
driver.quit()
