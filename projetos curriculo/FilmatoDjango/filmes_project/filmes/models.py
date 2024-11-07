from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=50, blank=True)
    year = models.CharField(max_length=4, blank=True)
    status = models.CharField(max_length=20, default='Not Watched')
    rating = models.CharField(max_length=10, blank=True)
    poster = models.URLField(blank=True)  # Link para o pôster

    def __str__(self):
        return self.title
