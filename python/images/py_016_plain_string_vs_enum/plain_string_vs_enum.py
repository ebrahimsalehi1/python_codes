# Stop using plain strings as types!
#
# ❌ Avoid plain strings (magic strings):
#    No type safety, easy to make typos,
#    and no IDE autocomplete support.
#    Any string is accepted, even invalid ones.
#    This makes bugs hard to catch.

def delete_user_bad(role: str):
    # role is just "str" — Python accepts
    # ANY string here, no restrictions!
    if role == "Admin":
        print("User deleted")

# ⚠️ Passing a typo runs
#    without any error — no type safety!
#    "Admni" instead of "Admin" — silent bug!
delete_user_bad("Admni")  # 😬 No error!





# ✅ Use Python's Enum 
# so you cannot pass a raw value.
from enum import Enum

class Role(Enum):
    User = 1
    Admin = 2
    Super_Admin = 3

# Now the parameter only accepts Role members
def delete_user_good(role: Role):
    if role == Role.Admin:
        print("User deleted")

# ✅ safe: Role.Admin is a valid Role
delete_user_good(Role.Admin)        
