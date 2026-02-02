"""Demonstration of the walrus operator (:=) in a while loop."""

# Walrus operator (:=)  

counter = 1
while (counter := counter + 1) < 7:
    print(counter)  # Output: 2, 3, 4, 5, 6


# Traditional while loop

counter = 1
while counter < 6:
    counter = counter + 1
    print(counter)  # Output: 2, 3, 4, 5, 6