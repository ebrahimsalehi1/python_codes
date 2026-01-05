
file = open("data.txt","w")
file.write("Hello, Ebrahim!")
file.close()

with open("data.txt","w") as file:
    file.write("Hello, Ebrahim!")

# File is automatically closed here, 
# even if errors occur 