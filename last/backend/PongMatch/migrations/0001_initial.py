# Generated by Django 4.2.16 on 2025-02-09 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PongMatch',
            fields=[
                ('match_id', models.AutoField(primary_key=True, serialize=False)),
                ('player1_username', models.CharField(max_length=255)),
                ('player1_level', models.IntegerField()),
                ('player2_username', models.CharField(max_length=255)),
                ('player2_level', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
