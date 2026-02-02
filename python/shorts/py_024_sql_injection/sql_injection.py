import mysql.connector

with mysql.connector.connect(
    host="127.0.0.1",
    port=3306,
    database="mydb",
    user="myuser",
    password="mypassword"
    ) as conn: 
        cur = conn.cursor()
        cur.execute("SELECT NOW()")
        result = cur.fetchone()
        print("result",result)
        cur.close()

