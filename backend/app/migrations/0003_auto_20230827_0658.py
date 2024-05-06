# Generated by Django 4.2.4 on 2023-08-27 01:43
from django.db import migrations
from pathlib import Path
import json


def load_data(apps, schema_editor):

    # Load JSON data from file
    folder_path = Path("raw_data/")
    games_file_path = folder_path / "games.json"
    with open(games_file_path, 'r') as games_file:
        games_data = json.load(games_file)

    teams_file_path = folder_path / "teams.json"
    with open(teams_file_path, 'r') as teams_file:
        teams_data = json.load(teams_file)

    players_file_path = folder_path / "players.json"
    with open(players_file_path, 'r') as players_file:
        players_data = json.load(players_file)


# Get the relevant models
    Game = apps.get_model('app', 'Game')
    Player = apps.get_model('app', 'Player')
    Team = apps.get_model('app', 'Team')
    Shot = apps.get_model('app', 'Shot')
    Stats = apps.get_model('app', 'Stats')

    for team_entry in teams_data:
        team = Team(
            id=team_entry['id'],
            name=team_entry['name'],
            # Set other fields as needed
        )

        team.save()

    for player_entry in players_data:

        player = Player(
            id=player_entry['id'],
            name=player_entry['name']
        )
        player.save()


# Loop through the data and create related objects
    for game_entry in games_data:
        # Load the game data and set the foreign key relationships
        home_team_id = game_entry['homeTeam']['id']
        away_team_id = game_entry['awayTeam']['id']

        game = Game(
            id=game_entry['id'],
            date=game_entry['date'],
            hometeam_id=home_team_id,
            away_team_id=away_team_id,


        )

        game.save()

        for player_game_entry in game_entry['homeTeam']['players']:

            stats = Stats(
                player_id=player_game_entry['id'],
                game_id=game_entry['id'],
                isStarter=player_game_entry['isStarter'],
                minutes=player_game_entry['minutes'],
                points=player_game_entry['points'],
                assists=player_game_entry['assists'],
                offensiveRebounds=player_game_entry['offensiveRebounds'],
                defensiveRebounds=player_game_entry['defensiveRebounds'],
                steals=player_game_entry['steals'],
                blocks=player_game_entry['blocks'],
                turnovers=player_game_entry['turnovers'],
                defensiveFouls=player_game_entry['defensiveFouls'],
                offensiveFouls=player_game_entry['offensiveFouls'],
                freeThrowsMade=player_game_entry['freeThrowsMade'],
                freeThrowsAttempted=player_game_entry['freeThrowsAttempted'],
                twoPointersMade=player_game_entry['twoPointersMade'],
                twoPointersAttempted=player_game_entry['twoPointersAttempted'],
                threePointersMade=player_game_entry['threePointersMade'],
                threePointersAttempted=player_game_entry['threePointersAttempted']
            )

            stats.save()

            for shot_entry in player_game_entry['shots']:
                shot = Shot(
                    player_id=player_game_entry['id'],
                    game_id=game_entry['id'],
                    is_make=shot_entry['isMake'],
                    location_x=shot_entry['locationX'],
                    location_y=shot_entry['locationY']
                )
                shot.save()

        for player_game_entry in game_entry['awayTeam']['players']:

            stats = Stats(
                player_id=player_game_entry['id'],
                game_id=game_entry['id'],
                isStarter=player_game_entry['isStarter'],
                minutes=player_game_entry['minutes'],
                points=player_game_entry['points'],
                assists=player_game_entry['assists'],
                offensiveRebounds=player_game_entry['offensiveRebounds'],
                defensiveRebounds=player_game_entry['defensiveRebounds'],
                steals=player_game_entry['steals'],
                blocks=player_game_entry['blocks'],
                turnovers=player_game_entry['turnovers'],
                defensiveFouls=player_game_entry['defensiveFouls'],
                offensiveFouls=player_game_entry['offensiveFouls'],
                freeThrowsMade=player_game_entry['freeThrowsMade'],
                freeThrowsAttempted=player_game_entry['freeThrowsAttempted'],
                twoPointersMade=player_game_entry['twoPointersMade'],
                twoPointersAttempted=player_game_entry['twoPointersAttempted'],
                threePointersMade=player_game_entry['threePointersMade'],
                threePointersAttempted=player_game_entry['threePointersAttempted']
            )

            stats.save()

            for shot_entry in player_game_entry['shots']:
                shot = Shot(
                    player_id=player_game_entry['id'],
                    game_id=game_entry['id'],
                    is_make=shot_entry['isMake'],
                    location_x=shot_entry['locationX'],
                    location_y=shot_entry['locationY']
                )

                shot.save()


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_remove_player_assists_remove_player_blocks_and_more'),
    ]

    operations = [

    ]
