# Generated by Django 5.1.1 on 2024-12-12 10:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_event_event_admin'),
    ]

    operations = [
        migrations.RenameField(
            model_name='group',
            old_name='admin_id',
            new_name='group_admin',
        ),
    ]
