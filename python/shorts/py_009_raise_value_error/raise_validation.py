

# def set_age(age):
#     if age < 0:
#         print("Invalid age!")

def set_age(age):
    if age < 0:
        raise ValueError("Invalid age!")
    
set_age(-20)