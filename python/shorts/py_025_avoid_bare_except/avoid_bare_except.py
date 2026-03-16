user_input = 0
def save_to_db(value):
    print(f"{value} saved to db")

try:
    result = 10 / user_input
    save_to_db(result)
except:
    pass

import logging
try:
    result = 10 / user_input
    save_to_db(result)
except ZeroDivisionError:
    logging.error("Input cannot be zero")
except TypeError:
    logging.error("Input must be a number")
except Exception as e:
    logging.error(f"Exception: {e}")
    
