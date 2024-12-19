from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TowerViewSet, EnemyViewSet, LevelViewSet, GameStateViewSet
from .views import get_enemy_positions

router = DefaultRouter()
router.register(r'towers', TowerViewSet)
router.register(r'enemies', EnemyViewSet)
router.register(r'levels', LevelViewSet)
router.register(r'gamestates', GameStateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('enemies/positions/', get_enemy_positions, name='enemy_positions'),
]
