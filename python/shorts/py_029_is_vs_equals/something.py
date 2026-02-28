# title: Stop using `is` to compare numbers in Python! Here's the real difference between `is` and `==`.
# file name: is_vs_equals.py


# --- BAD CODE ---
# description:
# Using `is` to compare literal values like numbers or strings is unreliable.
# `is` checks for object identity (if two variables point to the same memory location),
# not equality (if two variables have the same value).
# Python caches small integers, so `a is b` might work for `a=10, b=10` but
# will likely fail for `a=1000, b=1000`. This leads to confusing, unpredictable bugs.

a = 1000
b = 1000
# This is False because Python doesn't cache larger integers, so `a` and `b`
# are two different objects in memory, even though their values are the same.
is_same_object_bad = a is b


# --- GOOD CODE ---
# description:
# Use `==` to check for value equality. This is what you want 99% of the time.
# Use `is` only when you specifically need to check if two variables refer to the
# exact same object. The most common and correct use case for `is` is checking
# for `None`, which is a singleton object.

# For value equality, always use `==`
is_same_value_good = (a == b)

# For checking for None, `is` is preferred for style and correctness.
my_var = None
is_none_good = my_var is None


if __name__ == "__main__":
    print("--- Bad Example ---")
    print(f"Comparing large integers with 'is': a=1000, b=1000")
    print(f"Result of `a is b`: {is_same_object_bad}") # Usually False

    # To prove the point about small integer caching:
    c = 10
    d = 10
    print(f"\nComparing small integers with 'is': c=10, d=10")
    print(f"Result of `c is d`: {c is d}") # Usually True, but don't rely on it!

    print("\n--- Good Example ---")
    print(f"Comparing large integers with '==': a=1000, b=1000")
    print(f"Result of `a == b`: {is_same_value_good}") # Always True

    print(f"\nChecking for None with 'is':")
    print(f"Result of `my_var is None`: {is_none_good}") # Correct and readable

