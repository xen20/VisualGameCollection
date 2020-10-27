from django.db import models


class MinMaxFloat(models.FloatField):
    def __init__(self, min_value=None, max_value=None, *args, **kwargs):
        self.min_value, self.max_value = min_value, max_value
        super(MinMaxFloat, self).__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        defaults = {'min_value': self.min_value, 'max_value': self.max_value}
        defaults.update(kwargs)
        return super(MinMaxFloat, self).formfield(**defaults)


class GameDetails(models.Model):
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=30)
    platform = models.CharField(max_length=30)
    developer = models.CharField(max_length=40)
    publisher = models.CharField(max_length=40)
    score = MinMaxFloat(min_value=0.0, max_value=10.0)
    progression_ratio = MinMaxFloat(min_value=0.0, max_value=1.0)
    date_start = models.DateField()
    date_end = models.DateField()
    estimated_length = MinMaxFloat(min_value=0.0)

    def __str__(self):
        return self.title
