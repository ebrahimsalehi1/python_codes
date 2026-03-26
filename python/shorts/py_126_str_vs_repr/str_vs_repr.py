
class Person:
    def __init__(self,name,job_title):
        self.name = name
        self.job_title = job_title

    def __str__(self):
        return f"{self.name}-{self.job_title}"

    def __repr__(self):
        return f"{self.name}-{self.job_title}"    
    
person = Person("Ebrahim","Developer")
print(person)

print(str(person))

print(repr(person))

print(eval(repr(person)))
