from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Initialize the WebDriver (using Chrome in this example)
driver = webdriver.Chrome()
driver.maximize_window()
try:
    # Open the application
    driver.get("http://127.0.0.1:5500/index.html")  # Replace with actual path or URL
    time.sleep(5)  # Wait for page to load
    
    # Navigate to login page
    login_link = driver.find_element(By.CSS_SELECTOR, 'a[data-page="login"]')
    login_link.click()
    time.sleep(4)
    
    # Login as admin
    email_field = driver.find_element(By.ID, "login-email")
    email_field.send_keys("admin@cleancity.com")
    
    password_field = driver.find_element(By.ID, "login-password")
    password_field.send_keys("admin123")
    
    login_button = driver.find_element(By.CSS_SELECTOR, "#login-form button[type='submit']")
    login_button.click()
    time.sleep(4)
    
    # Verify admin login success
    
    admin_badge = driver.find_element(By.ID, "admin-badge")
    assert admin_badge.is_displayed()
    
    # Navigate to feedback page
    feedback_link = driver.find_element(By.CSS_SELECTOR, 'a[data-page="feedback"]')
    feedback_link.click()
    time.sleep(5)
    
    # Test feedback form
    request_id_field = driver.find_element(By.ID, "requestId")
    request_id_field.send_keys("REQ001")
    
    reason_select = Select(driver.find_element(By.ID, "reason"))
    reason_select.select_by_visible_text("Missed Pickup")
    
    comments_field = driver.find_element(By.ID, "comments")
    comments_field.send_keys("The waste pickup was not done on the scheduled date.")
    
    submit_button = driver.find_element(By.CSS_SELECTOR, "#feedback-form button[type='submit']")
    submit_button.click()
    time.sleep(10)
    
    
    print("Test passed successfully!")
    
finally:
    # Close the browser
    driver.quit()