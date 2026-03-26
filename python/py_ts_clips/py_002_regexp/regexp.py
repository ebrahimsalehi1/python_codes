import re

text ="Contact me at ebrahimsalehi@yahoo.com"
regex =r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"

emails = re.findall(regex,text);
print(emails);
