# TITLE: Learning PyTorch Basic
import torch

# Slide 1

# scalar = torch.tensor(7)
# Output: tensor(7)

# vector = torch.tensor([1,2,3,4,5])
# Output: tensor([1, 2, 3, 4, 5])

# matrix = torch.tensor([[1,2],[3,4]])
# Output: tensor([[1, 2],
#                 [3, 4]])

# Slide 2
torch.manual_seed(42)
scalar = torch.rand(1)
# Output: A single random value

vector = torch.rand(5)
# Output: A vector with shape [5]

matrix = torch.rand(2,2)
# Output: A 2x2 matrix (2 rows,2 columns)


# print(dict(torch.device))