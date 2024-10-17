from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Root endpoint for the API
@app.get("/")
def read_root():
    return {"message": "Welcome to the Professional Chat Application API"}


# Endpoint for login
@app.post("/login")
def login(email: str, password: str):
    if email == "test@example.com" and password == "password":
        return {"status": "success", "message": "Logged in successfully!"}
    return {"status": "failure", "message": "Invalid credentials"}


# Endpoint for sign up
@app.post("/signup")
def signup(email: str, password: str):
    return {"status": "success", "message": f"User {email} registered successfully!"}
