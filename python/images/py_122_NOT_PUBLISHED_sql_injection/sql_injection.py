import psycopg2

# --- VULNERABLE CODE ---
# This code is vulnerable to SQL injection.
# An attacker could provide a malicious user_id like:
# ' OR 1=1; --
# This would change the query to:
# SELECT * from users where id='' OR 1=1; --'
# This would return all users in the database.

print("--- Vulnerable Example ---")
try:
    with psycopg2.connect(
        host="127.0.0.1",
        port=5432,
        database="mydb",
        user="myuser",
        password="mypassword"
    ) as conn:
        cur = conn.cursor()
        
        # Malicious input
        user_id = "' OR 1=1; --"
        
        # Unsafe query construction using f-string
        query = f"SELECT * from users where id='{user_id}'"
        print(f"Executing unsafe query: {query}")
        cur.execute(query)
        
        result = cur.fetchall()
        print("Result from unsafe query:", result)

        cur.close()
except psycopg2.OperationalError as e:
    print(f"Could not connect to PostgreSQL. Please ensure the database is running and credentials are correct.")
    print(e)


# --- SAFE CODE ---
# This code uses parameterized queries to prevent SQL injection.
# The database driver safely handles the user_id value.

print("\n--- Safe Example ---")
try:
    with psycopg2.connect(
        host="127.0.0.1",
        port=5432,
        database="mydb",
        user="myuser",
        password="mypassword"
    ) as conn:
        cur = conn.cursor()
        
        # Malicious input
        user_id = "' OR 1=1; --"
        
        # Safe query construction using placeholders
        query = "SELECT * from users where id = %s"
        print(f"Executing safe query with parameter: {user_id}")
        
        # The parameters are passed as a tuple to execute()
        cur.execute(query, (user_id,))
        
        result = cur.fetchall()
        print("Result from safe query:", result)

        cur.close()
except psycopg2.OperationalError as e:
    print(f"Could not connect to PostgreSQL. Please ensure the database is running and credentials are correct.")
    print(e)

