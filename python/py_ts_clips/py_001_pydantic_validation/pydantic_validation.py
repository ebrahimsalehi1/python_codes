from pydantic import BaseModel, EmailStr, Field

class User(BaseModel):
    username: str = Field(min_length=3)
    age: int = Field(gt=0)
    email: EmailStr


try:
    user = User(
        namename="Eb",
        age=5,
        email="ebrahim@yahoo.com"
        )
except Exception as e:
    print(e)
    