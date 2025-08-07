# main.py
from fastapi import FastAPI
from .database.core import engine, Base
from .entities.todo import Todo
from .entities.user import User
from .api import register_routes
from .logging import configure_logging, LogLevels
from .rag import RAGAssistant  # 👈 Add this
from pydantic import BaseModel
from dotenv import load_dotenv

from fastapi.middleware.cors import CORSMiddleware


import os

load_dotenv()

configure_logging(LogLevels.info)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later
    allow_methods=["*"],
    allow_headers=["*"],
)


""" Only uncomment below to create new tables,
otherwise the tests will fail if not connected
"""
# Auto-create tables only in development
# if os.getenv("ENVIRONMENT", "production") == "development":
Base.metadata.create_all(bind=engine)

register_routes(app)

# 🔁 Add /ask route for your assistant
rag = RAGAssistant()

class Question(BaseModel):
    question: str

@app.post("/ask")
def ask(question: Question):
    return {"answer": rag.ask(question.question)}
