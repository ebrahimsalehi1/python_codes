
# title for tiktok: Stop using `except: pass` in Python! It's hiding your bugs.
# file name: avoid_bare_except.py


# --- BAD CODE ---
# Using a bare `except` or `except: pass` is dangerous because it catches
# every possible error, including syntax errors, name errors, and system exits.
# This makes debugging extremely difficult because it silences all exceptions,
# hiding the root cause of a problem. You won't know if the code failed
# because of a database connection error, a typo, or invalid input.
try:
    # This could fail for many reasons:
    # - user_input is 0 (ZeroDivisionError)
    # - user_input is not a number (TypeError)
    # - save_to_db is not defined (NameError)
    result = 10 / user_input
    save_to_db(result)
except:
    # This will catch ALL errors and silently ignore them.
    # Your program will continue as if nothing went wrong, which is a huge risk.
    pass


# --- GOOD CODE ---
# Always catch specific exceptions. This allows you to handle different
# errors in different ways and lets unexpected errors crash the program,
# making them visible and easier to fix.
import logging

try:
    result = 10 / user_input
    save_to_db(result)
except ZeroDivisionError:
    # Handle the specific case where the input is zero.
    logging.error("Input cannot be zero!")
except TypeError:
    # Handle the case where the input is not a number.
    logging.error("Input must be a number.")
except Exception as e:
    # As a last resort, catch the general Exception class and log the error.
    # This is much safer than a bare `except` because it still provides context.
    logging.error(f"An unexpected error occurred: {e}")
