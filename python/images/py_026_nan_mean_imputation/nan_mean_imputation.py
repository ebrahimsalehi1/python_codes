
# Title: Don't Let NaNs Ruin Your Data! 🛠️
# Image Title: Handle missing values like a Data Scientist.
# Footer Title: Clean Code: np.nanmean() is your best friend.

import numpy as np

# real-world data is usually incomplete.
# For example , some elements here are NaN.
# np.nan = Not a Number
arr = np.array([12,np.nan,4,8,-20,np.nan])

# ❌ Bad Code
print(np.mean(arr))
# output: nan

# ✅ Clean Code
# It calculates the mean value and excludes NaN values
clean_mean = np.nanmean(arr)

# It fills the NaN values with the mean value.
arr[np.isnan(arr)] = clean_mean

print(arr)
# output: [12,1,4,8,-20,1]