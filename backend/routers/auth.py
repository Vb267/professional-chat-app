from fastapi import APIRouter, HTTPException

router = APIRouter()

users_db = {}  # This is a simple in-memory "database" for demo purposes

@router.post("/signup")
async def signup(email: str, password: str):
    if email in users_db:
        raise HTTPException(status_code=400, detail="User already exists")
    users_db[email] = password
    return {"message": "User created successfully"}

@router.post("/login")
async def login(email: str, password: str):
    if email not in users_db or users_db[email] != password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}
