from django.db import models

# Create your models here.
class Tower(models.Model):
    name = models.CharField(max_length=100)
    damage = models.IntegerField()
    range = models.FloatField()
    cost = models.IntegerField()

    def __str__(self):
        return self.name
    
class Enemy(models.Model):
    name = models.CharField(max_length=100)
    health = models.IntegerField()
    speed = models.FloatField()
    
    def __str__(self):
        return self.name

class Level(models.Model):
    name = models.CharField(max_length=100)
    layout = models.JSONField() # JSON för att spara banans layout.
    difficulty = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
class GameState(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    level = models.ForeignKey(Level, on_delete=models.CASCADE)
    towers = models.JSONField() # JSON för att lagra tornens positioner.
    enemies = models.JSONField() # JSON för aktiva fiender.
    score = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s game on {self.level.name}"