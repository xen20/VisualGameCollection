from rest_framework import viewsets
from .serializers import GameDetailsSerializer
from .models import GameDetails


class GameDetailsView(viewsets.ModelViewSet):
    serializer_class = GameDetailsSerializer
    queryset = GameDetails.objects.all()
