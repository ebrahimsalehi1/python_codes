# title: Stop using `is` to compare numbers in Python! Here's why.
# file name: is_vs_equals_comparison.py


# --- BAD CODE ---
# description:
# Using the `is` operator to compare values like numbers or strings is
# unreliable. `is` checks for object identity (if two variables point to the
# exact same object in memory), not equality of value. Python caches small
# integers (-5 to 256) and some strings, so `is` might work for them by
# coincidence, but it will fail for larger numbers.

a = 256
b = 256
print(f"--- Bad Example (but works by coincidence) ---")
print(f"a = {a}, b = {b}")
print(f"a is b: {a is b}")  # This is True because small integers are cached

c = 257
d = 257
print(f"\n--- Bad Example (and now it fails) ---")
print(f"c = {c}, d = {d}")
print(f"c is d: {c is d}")  # This is False! They have the same value but are different objects.


# --- GOOD CODE ---
# description:
# The `==` operator should always be used to check if two values are equal.
# It compares the actual values of the variables, not their memory addresses.
# Use `is` only when you specifically need to check for object identity,
# which is most commonly for checking against singletons like `None`.

print(f"\n--- Good Example ---")
print(f"c = {c}, d = {d}")
print(f"c == d: {c == d}")  # This is True, which is the correct and expected behavior.

# When to use `is`: checking for `None`
my_var = None
if my_var is None:
    print("\nUsing `is` for None is the correct and preferred way.")

