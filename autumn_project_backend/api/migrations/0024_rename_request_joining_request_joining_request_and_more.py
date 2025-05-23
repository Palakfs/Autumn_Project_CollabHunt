# Generated by Django 5.1.1 on 2024-12-27 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_remove_joining_request_person_expertise_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='joining_request',
            old_name='request',
            new_name='joining_request',
        ),
        migrations.AddField(
            model_name='joining_request',
            name='is_reviewed',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
