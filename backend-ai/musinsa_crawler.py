from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

CHROMEDRIVER_PATH = "C:/Users/jjw01/Fashion_AI/chromedriver.exe"

chrome_options = Options()
chrome_options.add_argument("--headless")  
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--disable-software-rasterizer")

service = Service(CHROMEDRIVER_PATH)
driver = webdriver.Chrome(service=service, options=chrome_options)

try:
    url = "https://www.musinsa.com"
    driver.get(url)

    soup = BeautifulSoup(driver.page_source, "html.parser")

    title = soup.title.text.strip()
    print("✅ 페이지 제목:", title)

finally:
    driver.quit()
