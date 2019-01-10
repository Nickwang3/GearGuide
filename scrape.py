from bs4 import BeautifulSoup as soup
import requests
from item_database import create_item, Item
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import ElementNotVisibleException

#return item list to be inserted into item database
def get_tennis_racquets_dsg():

    item_list = []
    sport = 'Tennis'
    subgroup = 'Racquet'
    website = 'https://www.dickssportinggoods.com/'
    racquets_url = 'https://www.dickssportinggoods.com/f/tennis-racquets#bazaarRating:&facet:&productBeginIndex:0&orderBy:5&pageView:grid&minPrice:&maxPrice:&pageSize:&facetCategoryId:&fPrevCatId:&'

    page_html = requests.get(racquets_url).text

    page_soup = soup(page_html, 'html.parser')

    racquets = page_soup.find_all('div', class_='product-details')

    for item in racquets:
        racquet_name = item.find('div' , class_='fplpTitle')
        name = racquet_name.text.strip()
        price = item.find('span', class_='final-price').text

        try:
            href = item.find('div', class_='bv_rr')
            href = href.find('a', href=True)
            link = href.get('href')
            link = website + link
        except AttributeError:
            link = website


        #remove chars unneeded from pricing
        for char in price:
            if char.isdigit():
                continue
            elif char == '.':
                continue
            else:
                price = price.replace(char, '')
        item_list.append(create_item(sport, subgroup, name, price, website, link))

    return item_list

def get_tennis_racquets_academy():

    item_list = []
    sport = 'Tennis'
    subgroup = 'Racquet'
    website = 'https://www.academy.com'
    racquets_url = 'https://www.academy.com/shop/browse/sports/racquet-sports/tennis--1/racquets--grips'

    page_html = requests.get(racquets_url).text

    page_soup = soup(page_html, 'html.parser')

    racquets = page_soup.find_all('div', class_='product-card')

    for item in racquets:
        racquet_name = item.find('p', class_='c-product__description')
        name = racquet_name.text.strip()
        price = item.find('span', class_='c-price__sub')

        try:
            dollars = price.find('span').text
            cents = price.find_all('sup')[1].text
            price = dollars + '.' + cents
        except AttributeError:

            price = 'See Link'


        try:
            href = item.find_parent('a', href=True)
            link = href.get('href')
            link = website + link

        except AttributeError:

            link = website

        item_list.append(create_item(sport, subgroup, name, price, website, link))

    return item_list

def get_tennis_racquets_warehouse():
    pass

def get_shoes_academy():

    browser = webdriver.Chrome('webdriver/chromedriver.exe')
    wait = WebDriverWait(browser, 10)

    item_list = []
    sport = "Shoes"
    subgroup = "Men's"
    website = 'https://www.academy.com'
    shoes_url = 'https://www.academy.com/shop/browse/footwear/mens-footwear/mens-athletic-sneakers'

    browser.get(shoes_url)

    next_button_found = browser.find_element_by_xpath("//*[text()='Next >']").is_displayed()

    while next_button_found:

        page_html = browser.page_source
        page_soup = soup(page_html, 'html.parser')

        shoes = page_soup.find_all('div', class_='product-card')

        for item in shoes:

            name = item.find('p', class_='c-product__description').text.strip()
            price = item.find('span', class_='c-price__sub')

            try:
                dollars = price.find('span').text
                cents = price.find_all('sup')[1].text
                price = dollars + '.' + cents
            except AttributeError:

                price = 'See Link'

            try:
                href = item.find_parent('a', href=True)
                link = href.get('href')
                link = website + link

            except AttributeError:

                link = website

            item_list.append(create_item(sport, subgroup, name, price, website, link))


        #check if at end of pages
        button = page_soup.find('li', class_='css-10lvqgw')
        if button != None:
            if button.find('a').text == 'Next >':
                break

        browser.find_element_by_xpath("//*[text()='Next >']").click()

        try:
            wait.until(EC.staleness_of(browser.find_element_by_xpath("//*[text()='Next >']")))
        except:
            browser.refresh()




    browser.quit()

    return item_list

def get_shoes_dsg():

    browser = webdriver.Chrome('webdriver/chromedriver.exe')
    wait = WebDriverWait(browser, 10)

    item_list = []
    sport = "Shoes"
    subgroup = "Men's"
    website = 'https://www.dickssportinggoods.com/'
    shoes_url = 'https://www.dickssportinggoods.com/f/mens-athletic-shoes'

    browser.get(shoes_url)


    next_button_found = browser.find_element_by_id('WC_SearchBasedNavigationResults_pagination_link_right_categoryResults').is_displayed()

    while next_button_found:

        page_html = browser.page_source
        page_soup = soup(page_html, 'html.parser')

        shoes = page_soup.find_all('div', class_='product-details')

        for item in shoes:
            name = item.find('div' , class_='fplpTitle').text.strip()
            price = item.find('span', class_='final-price').text

            print(name)

            try:
                href = item.find('div', class_='bv_rr')
                href = href.find('a', href=True)
                link = href.get('href')
                link = website + link
            except AttributeError:
                link = website

            for char in price:
                if char.isdigit() or char == '.' or char == '-' or char == ' ':
                    continue
                else:
                    price = price.replace(char, '').strip()

            item_list.append(create_item(sport, subgroup, name, price, website, link))

        #check if there is a next page
        next_button_found = browser.find_element_by_id('WC_SearchBasedNavigationResults_pagination_link_right_categoryResults').is_displayed()

        try:
            browser.find_element_by_id('WC_SearchBasedNavigationResults_pagination_link_right_categoryResults').click()
        except ElementNotVisibleException:
            break

        try:
            wait.until(EC.staleness_of(browser.find_element_by_id('WC_SearchBasedNavigationResults_pagination_link_right_categoryResults')))
        except:
            browser.refresh()

    browser.quit()
    return item_list
