from django.db import models


class Eleve(models.Model):
    nom = models.CharField(max_length=20, default="", unique=True)
    prenom = models.CharField(max_length=20, default="", unique=True)
    age = models.IntegerField()
    SEXE_CHOICES = (
        ('homme', 'Homme'),
        ('femme', 'Femme'),
    )
    sexe = models.CharField(
        max_length=6, choices=SEXE_CHOICES, default='homme')


# Create your models here.
