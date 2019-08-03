# Generated by Django 2.2.2 on 2019-07-11 10:53

from django.db import migrations
import django_prices.models


class Migration(migrations.Migration):

    dependencies = [
        ('giftcard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='giftcard',
            name='current_balance',
            field=django_prices.models.MoneyField(currency='INR', decimal_places=2, max_digits=12),
        ),
        migrations.AlterField(
            model_name='giftcard',
            name='initial_balance',
            field=django_prices.models.MoneyField(currency='INR', decimal_places=2, max_digits=12),
        ),
    ]
