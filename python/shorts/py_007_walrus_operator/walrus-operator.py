




import random

def get_data():
    return random.choice(["Ebrahim",None])

# data = get_data()

if data := get_data():
    print(f"Data found {data}")
else:
    print("No data available")

