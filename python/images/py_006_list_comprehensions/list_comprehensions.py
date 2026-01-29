
ages = [12,14,23,5,34,54,46]

adults = []
for age in ages:
    if age >= 18:
        adults.append(age)

adults_pythonic = [age for age in ages if age>=18]  

print(adults,adults_pythonic)