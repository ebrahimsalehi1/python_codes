# 🐍 How to connect to PostgreSQL in Python
# pip install psycopg2-binary

import psycopg2

def connect_to_postgresql():
    try:
        # 1️⃣ Connect using your DB credentials
        connection = psycopg2.connect(
            host="localhost",       # DB server address
            database="mydatabase", # DB name
            user="postgres",       # DB username
            password="mysecretpassword", # DB password
            port="5432"            # default PostgreSQL port
        )

        # 2️⃣ Create a cursor to run queries
        cursor = connection.cursor()

        # 3️⃣ Run a query to get PostgreSQL version
        cursor.execute("SELECT version();")
        record = cursor.fetchone()
        print("✅ Connected:", record)

        return True

    except Exception as error:
        # 4️⃣ Handle connection errors
        print("❌ PostgreSQL:", error)
        return False
    