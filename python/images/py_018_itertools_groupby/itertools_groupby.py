# Python itertools.groupby() — Group Even & Odd Numbers in One Line 🐍
import itertools 

arr = [12,1,18,21,14,28,24,31]

key_func = (lambda x: 
            'Even' if x%2==0 else 'Odd')
result = itertools.groupby(
    sorted(arr,key=key_func), 
    key=key_func)

for key , group in result:
    print(f"Group: {key}->{list(group)}")
# Group: Even->[12, 18, 14, 28, 24]
# Group: Odd->[1, 21, 31]
