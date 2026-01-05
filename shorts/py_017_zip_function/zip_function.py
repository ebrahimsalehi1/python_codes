
names = ["Ebrahim","Ali"]
scores = [90,100]

for i in range(len(names)):
    print(names[i],scores[i])

for name, score in zip(names,scores):
    print(name,score)
    