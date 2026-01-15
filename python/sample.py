
model_config = {
    "learning_rate":0.01,
    "epochs":20
}

print(model_config["epochs"],model_config["learning_rate"])

from dataclasses import dataclass

@dataclass(frozen=True)
class APIConfig:
    learning_rate: float
    epochs: int

ai_config = APIConfig(learning_rate=10.1,epochs=20)   
print(ai_config,(ai_config.epochs,ai_config.learning_rate)) 
