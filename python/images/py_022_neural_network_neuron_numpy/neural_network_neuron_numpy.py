# Title: How a Neural Network Neuron Actually Works 🧠

# Simulating a Neural Network Neuron

# Given:

# weights = [0.2, 0.8, -0.5]
# inputs = [1.0, 2.0, 3.0]

# Tasks:

# Compute the dot product
# Explain why this represents a neuron computation
# Key idea:

# A neuron starts by computing a weighted sum:

# Neural network shape for this example:
#
# input_1 (1.0) -- w=0.2 --\
#                         \
# input_2 (2.0) -- w=0.8 ----> [ neuron ] + bias(0.7) -> output
#                         /
# input_3 (3.0) -- w=-0.5 -/
#
# output = weights · inputs + bias

import numpy as np

inputs = np.array([1.0, 2.0, 3.0])
weights = np.array([0.2, 0.8, -0.5])
bias = 0.7

result = np.dot(weights, inputs) + bias
# result = 1.0

print(f"weights: {weights}")
print(f"inputs: {inputs}")
print(f"bias: {bias}")
print(f"output: {result}")
