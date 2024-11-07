from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_movie, name='add_movie'),
    path('', views.movie_list, name='movie_list'),
    path('edit/<int:pk>/', views.edit_movie, name='edit_movie'),
    path('delete/<int:pk>/', views.delete_movie, name='delete_movie'),
    path('movie/<int:pk>/', views.movie_detail, name='movie_detail'),
]
