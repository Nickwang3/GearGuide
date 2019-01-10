from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from globalvar import database_user, database_password, port, endpoint, database_name

engine = create_engine('postgresql://' + database_user + ':' + database_password + '@' + endpoint + ':' + port + '/' + database_name)
session = sessionmaker(bind=engine)()
Base = declarative_base()

class Item(Base):

    __tablename__ = 'items'

    id = Column(Integer, primary_key=True)
    sport = Column(String)
    subgroup = Column(String)
    name = Column(String)
    price = Column(String)
    website = Column(String)
    link = Column(String)

    def __repr__(self):
        return "<Item(sport='%s', subgroup='%s', name='%s', price='%s', website='%s', link='%s')>" % (
                    self.sport, self.subgroup, self.name, self. price, self.website, self.link)

def create_item(sport, subgroup, name, price, website, link):
    return Item(sport=sport, subgroup=subgroup, name=name, price=price, website=website, link=link)
