# str_vs_repr.py

class Person:
    """
    A simple class to demonstrate the difference between __str__ and __repr__.
    """
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        """
        Provides a user-friendly, readable representation of the object.
        Used by print() and str().
        """
        return f"Person: {self.name}, {self.age} years old."

    def __repr__(self):
        """
        Provides an unambiguous, official representation of the object.
        Should ideally be a valid Python expression to recreate the object.
        Used by repr() and for display in the interpreter.
        """
        return f"Person(name='{self.name}', age={self.age})"

# Create an instance of the Person class
person = Person("Alice", 30)

# --- __str__ ---
# print() implicitly calls __str__
print("--- Using print() ---")
print(person)

# Explicitly calling str()
print("\n--- Using str() ---")
print(str(person))

# --- __repr__ ---
# Displaying the object in the interpreter or using repr() calls __repr__
print("\n--- Using repr() ---")
print(repr(person))

# The output of __repr__ can often be used to recreate the object
recreated_person = eval(repr(person))
print("\n--- Recreated Person ---")
print(recreated_person)

print(f"\nOriginal person object: {person!r}")
print(f"Recreated person object: {recreated_person!r}")
