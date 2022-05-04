from django.urls import path
from core import views


urlpatterns = [
    path("", views.index, name="index"),
    path("article/<slug:slug>/", views.blog, name="article"),
    path("category/<slug:slug>/", views.topic, name="topic"),
]
