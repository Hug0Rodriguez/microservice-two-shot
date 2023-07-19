from django.db import models

class Hat(models.Model):
    material = models.CharField(max_length=200)
    style = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField()
