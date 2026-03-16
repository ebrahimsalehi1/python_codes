# Title: Stop Confusing Matrix Multiplication with Element-Wise Multiplication

# Demonstrates matrix multiplication and 
# element-wise multiplication using NumPy arrays.

import numpy as np

# Define array in Numpy
mat1 = np.array([[1, 0], [0, 1]])
mat2 = np.array([[5, 6], [7, 8]])

# Perform matrix multiplication 
# using np.dot()
multiplication1 = np.dot(mat1, mat2)

# Perform matrix multiplication 
# using @ operator (same result, cleaner syntax)
multiplication2 = mat1 @ mat2

# Perform element-wise multiplication 
# (multiplies matching positions)
element_wise_multiplication = mat1 * mat2

print(multiplication1)
print(multiplication2)
print(element_wise_multiplication)