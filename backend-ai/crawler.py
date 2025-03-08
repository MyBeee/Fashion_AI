import requests
from bs4 import BeautifulSoup

url = "https://www.musinsa.com/ranking/best"
headers = {"User-Agent": "Mozilla/5.0"}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

for item in soup.select(".li_box"):
    title = item.select_one(".list_info a").text.strip()
    price = item.select_one(".price").text.strip()
    print(f"{title}: {price}")