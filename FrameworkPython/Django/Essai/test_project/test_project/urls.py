
from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('back/',include('backend.urls')),
    path('', views.index,name='index'),
    # path('',include('frontend.urls'))
]
