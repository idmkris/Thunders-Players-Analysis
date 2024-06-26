# Generated by Django 4.2.4 on 2023-08-25 07:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('isStarter', models.BooleanField()),
                ('minutes', models.IntegerField()),
                ('points', models.IntegerField()),
                ('assists', models.IntegerField()),
                ('offensiveRebounds', models.IntegerField()),
                ('defensiveRebounds', models.IntegerField()),
                ('steals', models.IntegerField()),
                ('blocks', models.IntegerField()),
                ('turnovers', models.IntegerField()),
                ('defensiveFouls', models.IntegerField()),
                ('offensiveFouls', models.IntegerField()),
                ('freeThrowsMade', models.IntegerField()),
                ('freeThrowsAttempted', models.IntegerField()),
                ('twoPointersMade', models.IntegerField()),
                ('twoPointersAttempted', models.IntegerField()),
                ('threePointersMade', models.IntegerField()),
                ('threePointersAttempted', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Shot',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_make', models.BooleanField()),
                ('location_x', models.FloatField()),
                ('location_y', models.FloatField()),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.game')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.player')),
            ],
        ),
        migrations.AddField(
            model_name='player',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.team'),
        ),
        migrations.AddField(
            model_name='game',
            name='awayteam',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='away_games', to='app.team'),
        ),
        migrations.AddField(
            model_name='game',
            name='hometeam',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='home_games', to='app.team'),
        ),
    ]
