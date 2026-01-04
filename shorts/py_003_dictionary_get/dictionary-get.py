




status_code = 404
if status_code == 200:
    msg = "OK"
elif status_code == 404:
    msg = "Not Found"
else:
    msg = "Unknown"

print("Legacy Way:",msg)

messages = {200: "OK", 404: "Not Found"}
msg = messages.get(status_code,"Unknown")

print("Clean Way:", msg)