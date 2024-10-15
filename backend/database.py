from sqlalchemy import create_engine, MetaData

DATABASE_URL = "postgresql://postgres:Matrix@11@localhost/professional_chat_app"

engine = create_engine(DATABASE_URL)
metadata = MetaData()

def connect_db():
    metadata.create_all(engine)
