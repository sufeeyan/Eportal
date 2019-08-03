# Generated by Django 2.0.8 on 2018-09-13 13:17

import django.contrib.postgres.fields.jsonb
from django.db import migrations
import json


class Migration(migrations.Migration):
    def populate_data(apps, schema_editor):
        Menu = apps.get_model("menu", "Menu")
        for menu in Menu.objects.all():
            if isinstance(menu.json_content, str):
                json_str = menu.json_content
                while isinstance(json_str, str):
                    json_str = json.loads(json_str)
                menu.json_content_new = json_str
                menu.save()

    dependencies = [("menu", "0007_auto_20180807_0547")]

    operations = [
        migrations.AddField(
            model_name="menu",
            name="json_content_new",
            field=django.contrib.postgres.fields.jsonb.JSONField(
                blank=True, default=dict
            ),
        ),
        migrations.RunPython(populate_data),
    ]
