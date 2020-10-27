from django.contrib import admin
from .models import GameDetails


class TodoAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'genre', 'platform')


# Register your models here.
admin.site.register(GameDetails, TodoAdmin)