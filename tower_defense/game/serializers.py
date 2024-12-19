from rest_framework import serializers
from .models import Tower, Enemy, Level, GameState

class TowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tower
        fields = '__all__'

class EnemySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enemy
        fields = '__all__'

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all_:'

class GameStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameState
        fields = '__all__'