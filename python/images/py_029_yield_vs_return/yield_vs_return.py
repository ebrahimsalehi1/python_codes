
# def get_data():
#     yield 1;yield 2;yield 3;

# def get_data():
#     return [1,2,3]


def get_data_list(n):
    return [i for i in range(n)]

def get_data_generator(n):
    for i in range(n):
        yield i

print(get_data_list(5))

res = get_data_generator(5)
print(next(res),next(res),next(res),next(res),next(res))
