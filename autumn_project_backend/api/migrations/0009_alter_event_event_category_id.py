# Generated by Django 5.1.1 on 2024-12-11 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_event_visible_to_group_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_category_id',
            field=models.ManyToManyField(null=True, to='api.category'),
        ),
    ]
