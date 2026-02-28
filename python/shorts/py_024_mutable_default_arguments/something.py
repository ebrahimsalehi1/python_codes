# Stop using [] as a default argument in Python! 
# Here's why.

# --- BAD CODE ---
# This function has a mutable default argument (a list).
# The default list is created only ONCE, when the function is defined.
# Each call to the function that uses the default will modify the SAME list.

def add_to_list_bad(item, my_list=[]):
    """
    This is the 'bad' way. It uses a mutable default argument.
    """
    my_list.append(item)
    return my_list

print("--- Bad Example ---")
# First call, seems to work as expected
list1 = add_to_list_bad(1)
print(f"First call: {list1}")  # Output: First call: [1]

# Second call, we expect [2], but we get a surprise
list2 = add_to_list_bad(2)
print(f"Second call: {list2}") # Output: Second call: [1, 2]

# The original list1 is also affected because it's the same list object
print(f"list1 after second call: {list1}") # Output: list1 after second call: [1, 2]

print(f"Are list1 and list2 the same object? {list1 is list2}") # Output: True


# --- GOOD CODE ---
# The correct way is to use `None` as the default and create a new list
# inside the function if no list is provided.

def add_to_list_good(item, my_list=None):
    """
    This is the 'good' way. It avoids mutable default arguments.
    """
    if my_list is None:
        my_list = []  # A new list is created for each call that needs it
    my_list.append(item)
    return my_list

print("\n--- Good Example ---")
# First call
list3 = add_to_list_good(1)
print(f"First call: {list3}")  # Output: First call: [1]

# Second call, this now works as expected
list4 = add_to_list_good(2)
print(f"Second call: {list4}") # Output: Second call: [2]

# list3 is not affected
print(f"list3 after second call: {list3}") # Output: list3 after second call: [1]

print(f"Are list3 and list4 the same object? {list3 is list4}") # Output: False
