
# How to check whether a string is palindrome?
input_string = "level"

# Normal Way
is_palindrome = True
for i in range(len(input_string)//2):
    if input_string[i] != input_string[len(input_string)-i-1]:
        is_palindrome = False
        break

if is_palindrome:
    print("Palindrome")
else:
    print("Not Palindrome")    

# Pythonic Way

if input_string == input_string[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")    