# title: Stop building strings with `+` in Python! Do this instead.
# file name: f_string_vs_concatenation.py


# --- BAD CODE ---
# description:
# Using the `+` operator to concatenate strings is verbose and inefficient.
# It requires manually converting non-string types (like numbers) to strings
# using `str()`, which makes the code harder to read and write.

name = "Alice"
age = 30
message_bad = "User " + name + " is " + str(age) + " years old."


# --- GOOD CODE ---
# description:
# F-strings (formatted string literals) provide a concise and convenient way
# to embed Python expressions inside string literals. They are more readable,
# faster, and automatically handle type conversions for you.

message_good = f"User {name} is {age} years old."


if __name__ == "__main__":
    print("--- Bad Example ---")
    print(message_bad)

    print("\n--- Good Example ---")
    print(message_good)

    # Both produce the same output, but the f-string is far cleaner.
    print(f"\nAre the strings identical? {message_bad == message_good}")

