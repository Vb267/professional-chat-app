from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

# Dummy database for users and contacts
users_db = [
    {"id": 1, "name": "John Doe", "email": "john@example.com"},
    {"id": 2, "name": "Jane Smith", "email": "jane@example.com"},
    {"id": 3, "name": "Alice Johnson", "email": "alice@example.com"}
]

# Simulating authenticated users
authenticated_users = {
    "john@example.com": 1,
    "jane@example.com": 2,
    "alice@example.com": 3
}

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware to simulate user authentication
def get_current_user(email: str):
    if email not in authenticated_users:
        raise HTTPException(status_code=403, detail="Invalid user")
    return authenticated_users[email]

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Professional Chat Application API"}

# Endpoint to get list of contacts for the authenticated user
@app.get("/contacts", response_model=List[dict])
def get_contacts(email: str = Depends(get_current_user)):
    # Return all users except the authenticated one (simulate contacts)
    current_user_id = get_current_user(email)
    contacts = [user for user in users_db if user["id"] != current_user_id]
    return contacts

# Endpoint to simulate chat with a specific user
@app.get("/chat/{user_id}")
def get_chat(user_id: int, email: str = Depends(get_current_user)):
    contact = next((user for user in users_db if user["id"] == user_id), None)
    if not contact:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Simulating chat data
    chat_history = [
        {"message": "Hello!", "sender": "You", "receiver": contact["name"]},
        {"message": "Hi! How are you?", "sender": contact["name"], "receiver": "You"}
    ]
    return {"contact": contact, "chat_history": chat_history}
