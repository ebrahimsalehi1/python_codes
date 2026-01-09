
class User:
    is_active: bool
    balance: int

    def __init__(self,active: bool,balance: int):
        self.is_active = active
        self.balance = balance        

# result = process_payment(User(True,2000),1900)
# print(f"result={result}")

def process_payment(user: User,amount:int):
    if user.is_active:
        if amount > 0:
            if user.balance >= amount:
                return "Success"
            else:
                return "Insufficient funds"
        else:
            return "Invalid amount"
    else:
        return "User inactive"    


def process_payment(user: User,amount: int):
    if not user.is_active:
        return "User inactive"
    
    if amount <= 0:
        return "Invalid amount"
    
    if user.balance < amount:
        return "Insufficient funds"
    
    return "Success"