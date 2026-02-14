
# Simple values (so this example can run)
a = 10
b = 5
c = 8
d = 3
e = 2

# Wrong:
# operators end up far from what they apply to
result = (a +
          b +
          (c - d) -
          e)

# Correct:
# operators stay next to their operands (easier to scan)
result = (a
          + b
          + (c - d)
          - e)

print(result)