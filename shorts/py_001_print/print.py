# Many of us use Python's print() every day,
# but few realize how versatile it is.
# In this short demo, I'll show useful print() parameters.


# Suppose we have an array of strings to print:

array = ["apple", "banana", "cherry"]

# If we want to print them, we can simply use print with an asterisk or unpack the list.
print(*array)

print("1) sep: join values with a custom separator")
# If you want to print items separated by a specific character, use the sep parameter:
print(*array, sep=" | ")
# This will print: apple | banana | cherry

# ---------------------------------------------------------------

print("\n2) end: control the line ending (no newline)")
# if you want to avoid the default newline at the end such as "...\n" and replace it with something else, use the end parameter:
print("Hello", end="...")  
print("World")        
# This will print: Hello...World    

# ---------------------------------------------------------------

print("\n3) file: write using print(file=...) to a file")
# You can redirect print output to a file instead of the console using the file parameter:
with open("output.txt", "w", encoding="utf-8") as f:
    print(*array, sep=" | ", file=f)
print("Wrote to output.txt via print(file=...)")
# This writes "apple | banana | cherry" to output.txt

# ---------------------------------------------------------------


