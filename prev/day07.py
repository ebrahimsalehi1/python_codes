print("today was seventh")

def funLanguages():
  return {"linux":30,"mysql":30,"java":30,"python":40,"oracle":60}


x = 0
for i in funLanguages().keys():
  print("%s , %d" %(i,funLanguages()[i]))

print("finish",x)


