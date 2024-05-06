# -*- coding: utf-8 -*-
import logging
from functools import partial
import json
import os

from rest_framework.response import Response
from rest_framework.views import APIView, exception_handler
from app.dbmodels import models
from app.models import Player, Game, Stats, Shot

LOGGER = logging.getLogger('django')


class PlayerSummary(APIView):
    logger = LOGGER

    def get(self, request, playerID):

        try:
            player = Player.objects.get(id=playerID)
        except Player.DoesNotExist:
            return Response({"error": "Player not found"}, status=404)

        player_games = []
        stats_list = player.stats_set.all()

        for stats in stats_list:
            game = stats.game

            player_game = {
                "date": game.date,
                "isStarter": stats.isStarter,
                "minutes": stats.minutes,
                "points": stats.points,
                "assists": stats.assists,
                "offensiveRebounds": stats.offensiveRebounds,
                "defensiveRebounds": stats.defensiveRebounds,
                "steals": stats.steals,
                "blocks": stats.blocks,
                "turnovers": stats.turnovers,
                "defensiveFouls": stats.defensiveFouls,
                "offensiveFouls": stats.offensiveFouls,
                "freeThrowsMade": stats.freeThrowsMade,
                "freeThrowsAttempted": stats.freeThrowsAttempted,
                "twoPointersMade": stats.twoPointersMade,
                "twoPointersAttempted": stats.twoPointersAttempted,
                "threePointersMade": stats.threePointersMade,
                "threePointersAttempted": stats.threePointersAttempted,

                "shots": [
                    {
                        "isMake": shot.isMake,
                        "locationX": shot.location_x,
                        "locationY": shot.location_y
                    }
                    for shot in Shot.objects.filter(player=player, game=game)
                ],
            }

            player_games.append(player_game)

        data = {

            "name": player.name,
            "games": player_games
        }

        return Response(data)


class PlayerList(APIView):
    logger = LOGGER

    def get(self, request):
        players = Player.objects.all()
        playerList = []
        for player in players:
            playerInfo = {
                "id": player.id,
                "name": player.name,
            }
            playerList.append(playerInfo)
        return Response(playerList, status=200)
