def evaluate_price_1(price):
    if 0 < price < 100:
        return True 
    return False    
def evaluate_price_2(price):
    return 0 < price < 100    
def evaluate_price_3(price):
    return price in range(0,100)
def evaluate_price_4(price):
    return all([price > 0, price < 100])

print(evaluate_price_1(25))
print(evaluate_price_2(25))
print(evaluate_price_3(25))
print(evaluate_price_4(25))
