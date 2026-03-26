name = "Ebrahim"
role = "Developer"

# ❌ Bad Code
# Using the + operator to concatenate strings
# is verbose and inefficient.
message_bad = "User "+name+" is a "+role

# ✅ Clean Code
# F-strings are more readable, concise and faster
message_good = f"User {name} is a {role}"
