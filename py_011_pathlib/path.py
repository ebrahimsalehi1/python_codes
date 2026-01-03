
# import os

# folder = "logs"
# file = "app.log"

# full_path = os.path.join(os.getcwd(),folder,file)
# print(full_path)


from pathlib import Path

folder = "logs"
file = "app.log"

full_path = Path.cwd() / folder / file
print(full_path)