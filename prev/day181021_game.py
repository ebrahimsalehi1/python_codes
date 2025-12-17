import pygame

screen_width = 800
screen_height = 600

pygame.init()
gameDisplay = pygame.display.set_mode((screen_width,screen_height))
pygame.display.set_caption('first game start')

carImage = pygame.image.load('p1.png')

def car(x,y):
  gameDisplay.blit(carImage,(x,y))

clock = pygame.time.Clock()

x = screen_width * 0.45
y = screen_height * 0.8
white = (255,255,255)
myConst = 10

crashed = False
while not crashed:
  for event in pygame.event.get():
     if event.type == pygame.QUIT:
       crashed = True
     
     if event.type == pygame.KEYDOWN:
       if event.key == pygame.K_LEFT:
         x = x - myConst
       if event.key == pygame.K_RIGHT:
         x = x + myConst
       if event.key == pygame.K_UP:
         y = y - myConst
       if event.key == pygame.K_DOWN:
         y = y + myConst

     #print(event)
     gameDisplay.fill(white)
     car(x,y)

  pygame.display.update()

  clock.tick(30)

pygame.quit()
quit()

