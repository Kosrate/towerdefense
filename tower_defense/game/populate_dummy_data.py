import json
from django.core.management.base import BaseCommand
from game.models import Tower, Enemy, Level, GameState
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Generate dummy data for testing the Tower Defense game'

    def handle(self, *args, **kwargs):
        # Clear existing data
        Tower.objects.all().delete()
        Enemy.objects.all().delete()
        Level.objects.all().delete()
        GameState.objects.all().delete()
        User.objects.all().delete()

        # Create a test user
        user = User.objects.create_user(username="testuser", password="password123")

        # Add Towers
        towers = [
            {"name": "Cannon", "damage": 50, "range": 5.0, "cost": 100},
            {"name": "Archer Tower", "damage": 30, "range": 7.0, "cost": 75},
            {"name": "Mage Tower", "damage": 70, "range": 4.0, "cost": 150},
            {"name": "Bomb Tower", "damage": 120, "range": 3.0, "cost": 200},
            {"name": "Ice Tower", "damage": 10, "range": 6.0, "cost": 90},
        ]
        for tower in towers:
            Tower.objects.create(**tower)
        
        # Add Enemies
        enemies = [
            {"name": "Goblin", "health": 100, "speed": 2.0},
            {"name": "Orc", "health": 200, "speed": 1.5},
            {"name": "Dragon", "health": 500, "speed": 1.0},
            {"name": "Troll", "health": 300, "speed": 1.2},
            {"name": "Skeleton", "health": 50, "speed": 2.5},
        ]
        for enemy in enemies:
            Enemy.objects.create(**enemy)
        
        # Add Levels
        levels = [
            {"name": "Forest Defense", "layout": {"path": [1, 2, 3]}, "difficulty": "Easy"},
            {"name": "Desert Siege", "layout": {"path": [1, 2, 3, 4]}, "difficulty": "Medium"},
            {"name": "Castle Defense", "layout": {"path": [1, 3, 5]}, "difficulty": "Hard"},
            {"name": "Frozen Wasteland", "layout": {"path": [2, 4, 6]}, "difficulty": "Medium"},
            {"name": "Mountain Pass", "layout": {"path": [1, 2, 5, 6]}, "difficulty": "Hard"},
        ]
        for level in levels:
            Level.objects.create(**level)

        # Add Game States
        game_states = [
            {
                "user": User,
                "level": Level.objects.get(name="Forest Defense"),
                "towers": {"1,1": "Cannon", "2,2": "Archer Tower"},
                "enemies": {"Goblin": 5, "Orc": 2},
                "score": 500,
            },
            {
                "user": User,
                "level": Level.objects.get(name="Desert Siege"),
                "towers": {"2,3": "Mage Tower", "3,4": "Ice Tower"},
                "enemies": {"Skeleton": 10, "Troll": 1},
                "score": 1000,
            },
            {
                "user": User,
                "level": Level.objects.get(name="Castle Defense"),
                "towers": {"1,2": "Bomb Tower", "4,5": "Cannon"},
                "enemies": {"Dragon": 1, "Goblin": 3},
                "score": 2000,
            },
        ]
        for game_state in game_states:
            GameState.objects.create(**game_state)

        self.stdout.write(self.style.SUCCESS("Extensive dummy data created successfully!"))
