def generator_numbers(numbers):
    for number in numbers:
        yield f"Number is {number}"


numbers = [1,2,3,4,5]
number_iterator=generator_numbers(numbers)
print(next(number_iterator))
# Number is 1
print(next(number_iterator))
# Number is 2
