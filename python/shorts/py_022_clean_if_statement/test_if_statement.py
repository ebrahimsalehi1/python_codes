# def ticket_price(age, is_student, is_vip):
#     if age < 0:
#         return "Invalid"
    
#     price = 0
#     if age < 12:
#         price = 5
#     elif 12 <= age and age <= 64:
#         price = 12    
#     elif age >= 65:
#         price = 7
    
#     if is_student:
#             price = max(5,price-2)
    
#     if is_vip:
#         price += 5

#     return price    

# def test_ticket_price():
#     assert ticket_price(age = -1,is_student=False, is_vip=False) == "Invalid"
#     assert ticket_price(age=10,is_student=False,is_vip=False) == 5
#     assert ticket_price(age=10,is_student=True,is_vip=False) == 5
#     assert ticket_price(age=16,is_student=True,is_vip=False) == 10
#     assert ticket_price(age=16,is_student=True,is_vip=True) == 15
#     assert ticket_price(age=18,is_student=False,is_vip=False) == 12
#     assert ticket_price(age=65,is_student=False,is_vip=False) == 7
#     assert ticket_price(age=65,is_student=False,is_vip=True) == 12                        

def evaluate_price(price):
    if price > 7:
        price -= 2
    # price = max(5,price-2)    


    return price    

def test_evaluate_price():
    assert evaluate_price(4) == 4    
    assert evaluate_price(5) == 5    
    assert evaluate_price(6) == 6    
    assert evaluate_price(7) == 7    
    assert evaluate_price(8) == 6    
    assert evaluate_price(9) == 7    
    assert evaluate_price(10) == 8    
