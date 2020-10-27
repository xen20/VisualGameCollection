from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

# Remember that our references are relative to the manage.py file,
# so while this might appear as an unresolved ref, it is indeed correct in relation to that file.
from vgc import views

router = routers.DefaultRouter()
router.register(r'gamedetails', views.GameDetailsView, 'gamedetails')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
