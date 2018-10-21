import turtle
import time

pos = 20
turtle.speed(1)
turtle.goto(1,1)
#turtle.sety(10)

for i in range(1,41):
  turtle.forward(50)
  turtle.left(90)

  if i == 1:
       turtle.color("red")
  elif i == 2:
      turtle.color("green")
  elif i == 3:
      turtle.color("brown")
  elif i == 4:
      turtle.color("black")
  elif i == 5:
      turtle.color("red")
  else:
      turtle.color("green")

  if i%4==0:
    pos=pos+50
    turtle.setx(pos)
    # turtle.bgcolor("white")


#  time.sleep(2)

'''
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
turtle.right(50)


time.sleep(1)
'''
