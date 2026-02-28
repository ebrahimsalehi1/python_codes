# title: Stop using try/except to get dictionary keys in Python!
# file name: dict_get_vs_key_error.py

# --- BAD CODE ---
# description:
# Using a try/except block to handle missing keys is verbose and can be
# less readable. While it works, it's not the most "Pythonic" way to
# access dictionary keys when you expect that a key might be missing.

def get_setting_bad(config, key):
    try:
        return config[key]
    except KeyError:
        return "default"

# --- GOOD CODE ---
# description:
# The .get() method is a cleaner, more direct way to achieve the same result.
# It takes the key as the first argument and an optional default value as the
# second. If the key is not found, it returns the default value (which is

def get_setting_good(config, key):
    return config.get(key, "default")


if __name__ == "__main__":
    config = {"user": "admin", "timeout": 30}

    print("--- Bad Example ---")
    # Key exists
    print(f"User setting: {get_setting_bad(config, 'user')}")
    # Key is missing
    print(f"Theme setting: {get_setting_bad(config, 'theme')}")

    print("\n--- Good Example ---")
    # Key exists
    print(f"User setting: {get_setting_good(config, 'user')}")
    # Key is missing
    print(f"Theme setting: {get_setting_good(config, 'theme')}")

    # The outputs are the same, but the implementation in the "good"
    # version is more concise and idiomatic.
