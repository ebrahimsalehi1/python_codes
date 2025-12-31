




numbers = [1,2,3,4,5,6,7,8]

# First Part

evens = []

for n in numbers:
    if n%2 == 0:
        evens.append(n)

print(evens)

# Second Part

evens = [n for n in numbers if n%2 == 0]

print(evens)