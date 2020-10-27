from rest_framework import serializers
from .models import GameDetails


class GameDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameDetails
        fields = ('id', 'title', 'genre', 'platform', 'platform', 'developer', 'publisher', 'score', 'progression_ratio'
                  , 'date_start', 'date_end', 'estimated_length')
