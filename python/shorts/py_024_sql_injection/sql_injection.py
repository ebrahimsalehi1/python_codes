import mysql.connector

with mysql.connector.connect(
    host="127.0.0.1",
    port=3306,
    database="mydb",
    user="myuser",
    password="mypassword"
    ) as conn: 
        cur = conn.cursor()
        user_id = 'id-1'
        query = f"SELECT * from user where id='{user_id}'"
        print(query)
        cur.execute(query)
        
        result = cur.fetchone()
        print("result",result)

        cur.close()
