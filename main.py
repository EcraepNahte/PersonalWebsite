from fastapi import FastAPI, Depends, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from app import models
from app.database import engine, get_db

app = FastAPI()

app.mount('/static', StaticFiles(directory='static'), name='static')

templates = Jinja2Templates(directory='app/templates')

models.Base.metadata.create_all(bind=engine)


@app.get('/')
async def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})


@app.get('/welcome')
async def welcome(request: Request):
    return templates.TemplateResponse("welcome.html", {"request": request})


@app.get('/about')
async def about(request: Request, db: Session = Depends(get_db)):
    about_me = db.query(models.AboutMe).first()
    if not about_me:
        about_me = models.AboutMe(name='Ethan Pearce', bio='Software Engineer')
        db.add(about_me)
        db.commit()
        db.refresh(about_me)
    return templates.TemplateResponse('about.html', {'request': request, 'about_me': about_me})


@app.get('/resume')
async def resume(request: Request):
    return templates.TemplateResponse("resume.html", {"request": request})


@app.get('/photos')
async def photos(request: Request):
    return templates.TemplateResponse("photos.html", {"request": request})


@app.get('/discord-bots')
async def discord_bots(request: Request):
    return templates.TemplateResponse("discord_bots.html", {"request": request})


@app.get('/games')
async def games(request: Request):
    return templates.TemplateResponse("games.html", {"request": request})