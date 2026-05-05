To define a table in TypeORM, you must set a column to PrimaryKey

@PrimaryGeneratedColumn
Use  to handle the ids authomatically by TypeORM

@PrimaryColumn
Use this decorator to declare the column as a primary key. In this case, 
you must handle IDs yourself.



Use @PrimaryGeneratedColumn('uuid') if you want to keep your data secure and scalable.
