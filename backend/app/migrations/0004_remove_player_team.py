# Generated by Django 4.2.4 on 2023-08-27 07:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20230827_0658'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='team',
        ),
    ]
