from dataclasses import dataclass

@dataclass
class User:
    id: int
    name: str
    is_active: bool

user = User(id=1,name="Ebrahim",is_active=True)
print(user)
# User(id=1, name='Ebrahim', is_active=True)

