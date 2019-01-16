from databases import engine, session, Base
from scrape import get_tennis_racquets_dsg, get_tennis_racquets_academy, get_shoes_dsg, get_shoes_academy

def main():

    Base.metadata.tables['items'].drop(engine)
    Base.metadata.tables['items'].create(engine)

    #call scraper functions and commit items to database
    item_list = get_tennis_racquets_dsg()
    session.add_all(item_list)

    item_list = get_tennis_racquets_academy()
    session.add_all(item_list)

    item_list = get_shoes_dsg()
    session.add_all(item_list)

    item_list = get_shoes_academy()
    session.add_all(item_list)



    session.commit()





    #close the session
    session.close()

main()
