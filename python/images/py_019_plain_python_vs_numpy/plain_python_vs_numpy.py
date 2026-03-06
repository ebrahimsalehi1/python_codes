# Stop Using Loops for Everything — Try Plain Python and NumPy

# Compute:
#   - The mean
#   - The maximum value
#   - The sum of numbers

array = [21,5,18,13,12]

# Plain Python
average_python = sum(array)/len(array) 
max_python = max(array)
sum_python = sum(array)

print(average_python,max_python,sum_python)

print("-----------")

# NumPy
import numpy as np

average_numpy = np.mean(array)
max_numpy = np.max(array)
sum_numpy = np.sum(array)

print(average_numpy,max_numpy,sum_numpy)
