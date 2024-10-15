from fastapi import APIRouter

router = APIRouter()

chat_history = []

@router.post("/send")
async def send_message(user: str, message: str):
    chat_history.append({"user": user, "message": message})
    return {"message": "Message sent"}

@router.get("/history")
async def get_chat_history():
    return {"history": chat_history}
