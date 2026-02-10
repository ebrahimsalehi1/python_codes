
name = "Ebrahim"

# ❌ BAD: Negating 'is' - 
#    less readable and not PEP 8 compliant
if not name is None:
    print("Value is available")

# ✅ GOOD: Using 'is not' - 
#    clear, readable, and Pythonic
if name is not None:
    print("Value is available")
