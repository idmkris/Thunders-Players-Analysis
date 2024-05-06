# -*- coding: utf-8 -*-
"""Contains models related to stats"""
from django.db import models

class Team(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

class Player(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    
    
class Game(models.Model):
    id = models.AutoField(primary_key=True)
    hometeam = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='home_games')
    awayteam = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='away_games')
    date = models.DateField()
    players = models.ManyToManyField(Player, through='Stats')
    
class Shot(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    isMake = models.BooleanField()
    location_x = models.FloatField()
    location_y = models.FloatField()
    
class Stats(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    isStarter = models.BooleanField()
    minutes = models.IntegerField()
    points = models.IntegerField()
    assists = models.IntegerField()
    offensiveRebounds = models.IntegerField()
    defensiveRebounds = models.IntegerField()
    steals = models.IntegerField()
    blocks = models.IntegerField()
    turnovers = models.IntegerField()
    defensiveFouls = models.IntegerField()
    offensiveFouls = models.IntegerField()
    freeThrowsMade = models.IntegerField()
    freeThrowsAttempted = models.IntegerField()
    twoPointersMade = models.IntegerField()
    twoPointersAttempted = models.IntegerField()
    threePointersMade = models.IntegerField()
    threePointersAttempted = models.IntegerField()