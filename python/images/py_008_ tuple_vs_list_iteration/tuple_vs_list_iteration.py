a=10

# Iterates over an implicit tuple (10, 10)
for i in a,a:
    print(i)

# Iterates over an explicit tuple (10, 10)
for i in (a,a):
    print(i)

# Iterates over a list [10, 10]
for i in [a,a]:
    print(i)

