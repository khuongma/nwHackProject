from bs4 import BeautifulSoup
import requests
import time

import json



ProductsNum = 8


start_time = time.time()

with open("index.htm") as html_file:
    soup = BeautifulSoup(html_file, 'lxml')

products = soup.find(id="home_product_toc_ul")

listProducts = []
dicProducts = {}

for a in products.find_all('a', href=True):
    dicProducts.update({a.string: {}} )
    listProducts.append(a['href']+'?page=')
# print(dicProducts)

#FOR LOOP
dicProductNameDetail = {} # NAME
listProductURL = [] # URL
pages = 100
for page in range(1,pages):
    print("Begin Page: ", page)
    source = requests.get(listProducts[ProductsNum]+str(page)).text #PRODUCTNUM
    soup = BeautifulSoup(source, 'lxml')

    airFresheners = soup.find(id='products')
    # dicProductNameDetail = {} # NAME
    # listProductURL = [] # URL

    if(airFresheners.find_all("div", {"class": "individual_products_row_col2 fleft"}) == []):
        break
    for el in airFresheners.find_all("div", {"class": "individual_products_row_col2 fleft"}):
        for a in el.find_all('a', href=True):
            if(not(a.string.startswith("There is more"))):
                dicProductNameDetail.update({a.string: {}} ) #NAME
                listProductURL.append('https://www.ewg.org' + a['href']) #URL


for row_num in range(len(listProductURL)):
    print("     Begin row_num: ", row_num)
    source = requests.get(listProductURL[row_num]).text
    soup = BeautifulSoup(source, 'lxml')

    dicIngredients = {}
    Ingredients = soup.find(id='Product_Ingredients')
    listIngredients = []

    for el in Ingredients.find_all("div", {"class": "dcol1_4 fleft"}):
        for a in el.find_all('a'):
            dicIngredients[a.string] =  " " # Ingredients

    for el in Ingredients.find_all("div", {"class": "dcol2_4 fleft"}):
        if(el.find('b')):
            concern = el.find('b').next_sibling[2:] #CONCERN
            # print(concern)
            listIngredients.append(concern)
        else:
            concern = " "
            listIngredients.append(concern)

    for i,k in (enumerate(dicIngredients.keys())): #COMBINE Ingredients & CONCERN
        if(i  == len(listIngredients)):
            break
        dicIngredients[k] = listIngredients[i]
    
    dicProductNameDetail[list(dicProductNameDetail)[row_num]] = dicIngredients


dicProducts[list(dicProducts)[ProductsNum]] = dicProductNameDetail


print("--- %s seconds ---" % (time.time() - start_time))


with open('product'+ str(ProductsNum) +'.txt', 'w') as file:
    file.write(json.dumps(dicProducts))