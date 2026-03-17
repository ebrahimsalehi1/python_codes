# Title: Stop Reshaping Arrays Manually in Python
# Header Title: NumPy: Reshape Your Data! 🧩
# Footer Title: Architecture: Change shapes without losing data.

import numpy as np

data = np.arange(1,13)
# data = [1,2,3,4,5,6,7,8,9,10,11,12]

# ❌ Bad Code
# Hard to manage with large matrices    
manual_matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

# ✅ Clean Code
# Data stays the same-Only the dimensions change
matrix = data.reshape(4,3)

print(manual_matrix)
print(data)
print(data.reshape(4,3))
