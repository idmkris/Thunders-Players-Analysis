from django.contrib import admin
from .models import Game, Player, Team, Stats, Shot

admin.site.register(Game)
admin.site.register(Player)
admin.site.register(Team)
admin.site.register(Stats)
admin.site.register(Shot)