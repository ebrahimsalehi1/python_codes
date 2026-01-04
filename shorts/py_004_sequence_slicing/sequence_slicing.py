




numbers = [1,2,3,4,5]

reversed_list = []
for i in range(len(numbers)-1,-1,-1):
    reversed_list.append(numbers[i])

print("Legacy Way:",reversed_list)

reversed_list = numbers[::-1]

print("Pythonic Way:",reversed_list)

