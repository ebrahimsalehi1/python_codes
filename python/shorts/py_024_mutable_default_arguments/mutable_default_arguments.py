
def add_to_list_bad(item,my_list=[]):
    # This is the bad way
    # It uses a mutable default argument.
    my_list.append(item)
    return my_list

list1 = add_to_list_bad(1)
# list1: [1]
list2=add_to_list_bad(2)
# we expected [2] but we get [1,2]

def add_to_list_good(item,my_list=None):
    # This is a good way
    # It avoids mutable default arguments.
    if my_list is None:
        my_list=[]
    my_list.append(item)
    return my_list

list3=add_to_list_good(1)
# list3: [1]
list4=add_to_list_good(2)
# list4: [2]
