# Stop Overusing lambda in Python

# Lambda function
# Props: Inline, concise 
#        for tiny functions
# Cons: Harder to read, 
#       no name for debugging

compute_lambda = lambda a,b,c: a+b*c

# Normal function
# Props: Clear, reusable, 
#        debuggable, can add docs
# Cons: slightly more verbose

def compute(a,b,c):
    return a+b*c

a=1
b=2
c=3

print(compute_lambda(a,b,c))
print(compute(a,b,c))
