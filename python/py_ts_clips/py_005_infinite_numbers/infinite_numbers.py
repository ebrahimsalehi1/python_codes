
def infinite_numbers():
    n = 0
    while True:
        yield n
        n += 1

numbers = infinite_numbers()
print(next(numbers))
print(next(numbers))
print(next(numbers))
