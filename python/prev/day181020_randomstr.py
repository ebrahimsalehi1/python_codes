import random

alphabets = "abcdefghijklmnopqrstuvwxyz"
maxLen = 8
str = ""

for i in range(maxLen):
  str=str+alphabets[random.randrange(len(alphabets))]

print(str)


