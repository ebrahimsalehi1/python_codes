# Title: Stop writing nested if-statements
# Image Title: NumPy: Filter Data Like a Pro
# Footer: Clean Code: Use Boolean Masks for instant data manipulation.

import numpy as np

# Create a random data array
data = np.array([10, -5, 20, -1, 30, -15, 40])

# ❌ Bad Code
# Old way which is very slow for large data
for i in range(len(data)):
    if data[i] < 0:
        data[i] = 0
# data = [10  0 20  0 30  0 40]

# ✅ Good Code
# clean, precise and fast
data[data < 0] = 0
# data = [10  0 20  0 30  0 40]
