# Idea 7: Abstract Base Classes (The "Contract" Rule)
# File Name: PY_OOP_007_abc_interfaces

# The Problem: You have different Payment types (PayPal, Stripe), but you forget to implement the pay() method in one of them, causing a crash later.

# The Solution: Use the abc module to force every child class to have specific methods.

# Hook: "How to enforce rules in your code! 📜"