# Generated by Django 5.1.1 on 2024-12-12 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_delete_branch'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='experience',
            field=models.CharField(blank=True, null=True),
        ),
    ]
