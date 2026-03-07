from collections import OrderedDict

cache = OrderedDict([("a",1),("b",2),("c",3)])

# Access "a" and move it to most recent position
_ = cache["a"]
cache.move_to_end("a")

# Remove least recent item
least_recent_key, least_recent_value = (
    cache.popitem(last=False)
)
print(least_recent_key,least_recent_value)
# it prints (b,"2")