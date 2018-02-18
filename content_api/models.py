from django.db import models

# Create your models here.
class Item(models.Model):
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=128)
    image = models.ImageField(upload_to='media/images', blank=True, null=True)