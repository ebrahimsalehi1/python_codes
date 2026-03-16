# Social Media Title: Stop using For-Loops for Math in Python! 🛑🚀
# Image Title: Python List vs NumPy Speed! 🏎️💨

import numpy as np

size = 10_000_000

# Create plain Python data first: [0, 1, 2, 3, ...]
python_list = list(range(size))

# Convert the same values to a NumPy array
# for vectorized math.
numpy_arr = np.array(python_list)

# Pure Python approach:
# This is valid Python, 
#  but each element is processed one by one.
python_list = [i+2 for i in python_list]

# NumPy approach:
# Vectorized operations are shorter and usually
#  much faster for array math.
numpy_arr += 2
