# title: Stop writing rigid functions in Python! Use `*args` and `**kwargs`.
# file name: flexible_functions_with_args_kwargs.py


# --- BAD CODE ---
# description:
# Without `*args` and `**kwargs`, you have to define exactly what parameters a
# function accepts. This can lead to creating multiple, slightly different
# functions or complex default values if you need flexibility.

def create_user_profile_bad(username, email, age=None, city=None):
    profile = {"username": username, "email": email}
    if age is not None:
        profile["age"] = age
    if city is not None:
        profile["city"] = city
    return profile


# --- GOOD CODE ---
# description:
# `*args` collects extra positional arguments into a tuple.
# `**kwargs` collects extra keyword arguments into a dictionary.
# This lets you create highly flexible functions that can accept any number
# of inputs without defining them all in advance.

def create_user_profile_good(username, email, **kwargs):
    profile = {"username": username, "email": email}
    # The kwargs dictionary directly updates the profile
    profile.update(kwargs)
    return profile


if __name__ == "__main__":
    print("--- Bad Example ---")
    # This works, but the function is rigid.
    user1_bad = create_user_profile_bad("Alice", "alice@example.com", age=30)
    print(f"Bad function call 1: {user1_bad}")
    user2_bad = create_user_profile_bad("Bob", "bob@example.com", city="New York")
    print(f"Bad function call 2: {user2_bad}")

    print("\n--- Good Example ---")
    # The function is much more flexible. You can pass any extra keyword arguments.
    user1_good = create_user_profile_good("Alice", "alice@example.com", age=30, status="active")
    print(f"Good function call 1: {user1_good}")
    user2_good = create_user_profile_good("Bob", "bob@example.com", city="New York", interests=["music", "art"])
    print(f"Good function call 2: {user2_good}")

