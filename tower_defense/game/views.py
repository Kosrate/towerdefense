from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Tower, Enemy, Level, GameState
from .serializers import GameStateSerializer, TowerSerializer, EnemySerializer, LevelSerializer, GameSerializer

# Create your views here.
@api_view(['GET'])
def get_enemy_positions(request):
    # Här kan vi skapa dynamiska positioner som ändras med spelets gång
    enemies = [
        {"name": "Goblin", "position": [1, 1]},
        {"name": "Orc", "position": [2, 3]},
        {"name": "Dragon", "position": [4, 5]},
        {"name": "Troll", "position": [6, 7]},
        {"name": "Skeleton", "position": [8, 9]},
    ]
    return Response(enemies)

class TowerViewSet(viewsets.ModelViewSet):
    queryset = Tower.objects.all()
    serializer_class = TowerSerializer

class EnemyViewSet(viewsets.ModelViewSet):
    queryset = Enemy.objects.all()
    serializer_class = EnemySerializer

class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer

class GameStateViewSet(viewsets.ModelViewSet):
    queryset = GameState.objects.all()
    serializer_class = GameStateSerializer
