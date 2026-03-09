# Title: Stop Ignoring NumPy Matrix Operations: Transpose, Determinant, Inverse

# 1.  Create a random 3×3 matrix.
# 2.  Compute:
#     - Transpose
#     - Determinant
#     - Inverse (if possible)

import numpy as np

array = np.array([
    [12, 2, 5],
    [1, 20, -3],
    [-2, 21, 15]
])
transposed_array = np.transpose(array)
# It contains the transpose of array.

determinant = np.linalg.det(array)
# It contains the matrix determinant.

if np.isclose(determinant, 0):
# inverse is not possible 
# because the matrix is singular.
    pass
else:
    inverse = np.linalg.inv(array)
# inverse contains the inverse matrix.