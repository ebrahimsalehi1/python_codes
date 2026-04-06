import torch
from torch import nn
# Building and saving a model

# X_train = torch.tensor([[1.0],[2.0],[3.0],[4.0]],dtype=torch.float32)
# y_train = torch.tensor([[2.0],[4.0],[6.0],[8.0]],dtype=torch.float32)

# class Model2X(nn.Module):
#     def __init__(self):
#         super().__init__()
#         self.linear = nn.Linear(1,1)

#     def forward(self,x):
#         return self.linear(x)    

# model = Model2X()
# loss_fn = nn.MSELoss()
# optimizer = torch.optim.SGD(model.parameters(), lr=0.01)

# for epoch in range(5_000):
#     y_pred = model(X_train)
#     loss = loss_fn(y_pred,y_train)
#     optimizer.zero_grad()
#     loss.backward()
#     optimizer.step()
    
#     if epoch % 1000 == 0:
#         print(f"row {epoch} , y_pred={y_pred}")


# print(list(model.parameters()))
# torch.save(model,"linear_model_full.pth")

# -------------------------------

# Loading a model

# model = torch.load("linear_model_full.pth",
#                    map_location=torch.device('cpu'),
#                    weights_only=False)
# model.eval()

# x=torch.tensor([[1000]],dtype=torch.float32)
# with torch.no_grad():
#     y_pred = model(x)

# print(y_pred)

# -------------------------------
# Saved model for a device

# model.eval()
# example_input = torch.tensor([[1.0]])
# traced_script_module = torch.jit.trace(model,example_input)

# traced_script_module.save("module_2x.ptl")
