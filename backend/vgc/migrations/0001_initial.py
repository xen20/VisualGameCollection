# Generated by Django 3.1.2 on 2020-10-26 21:38

from django.db import migrations, models
import vgc.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GameDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('genre', models.CharField(max_length=30)),
                ('platform', models.CharField(max_length=30)),
                ('developer', models.CharField(max_length=40)),
                ('publisher', models.CharField(max_length=40)),
                ('score', vgc.models.MinMaxFloat()),
                ('progression_ratio', vgc.models.MinMaxFloat()),
                ('date_start', models.DateField()),
                ('date_end', models.DateField()),
                ('estimated_length', vgc.models.MinMaxFloat()),
            ],
        ),
    ]
