#  Title:
#  Stop adding properties manually! 🛑
#  Use Computed Property Names.
def get_key(name):
    return f"key is {name}"

#  ❌ Bad
user1={
    "id":1,
    "name":"Ebrahim"
}
user1[get_key("is_enabled")] = True

#  ✅ Good
user2={
    "id":1,
    "name":"Ebrahim",
    get_key("is_enabled"): True
}

print(user1==user2)
