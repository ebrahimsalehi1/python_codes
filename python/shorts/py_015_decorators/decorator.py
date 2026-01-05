
# def get_data():
#     print("Log: Start")
#     print("Data retrieved")
#     print("Log: End")

# get_data()

def logger(func):
    def wrapper():
        print("Log: Start")
        func()
        print("Log: End")

    return wrapper

@logger
def get_data():
    print("Data retrieved")

get_data()