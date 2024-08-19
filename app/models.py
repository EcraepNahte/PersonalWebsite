from sqlalchemy import Column, Integer, String
from .database import Base

class AboutMe(Base):
    __tablename__ = 'about_me'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    bio = Column(String)