
data = {}
if "counts" not in data:
    data["counts"] = []

data["counts"].append(1)

from collections import defaultdict

data = defaultdict(list)
data["counter"].append(1)

print(data["counter"])