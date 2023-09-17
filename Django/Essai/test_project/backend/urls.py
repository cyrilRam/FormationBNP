from django.urls import path
from .views import EleveView
from .views import EleveCreateView

urlpatterns = [
    path('api', EleveView.as_view()),
    path('api/create', EleveCreateView.as_view(), name='eleve-create'),
]
