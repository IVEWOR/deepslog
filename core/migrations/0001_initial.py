# Generated by Django 4.0.4 on 2022-05-04 23:39

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('slug', models.SlugField(blank=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images')),
                ('image_caption', models.CharField(blank=True, max_length=80)),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('meta_description', models.TextField(blank=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('slug', models.SlugField(blank=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images')),
                ('image_caption', models.CharField(blank=True, max_length=80)),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('meta_description', models.TextField(blank=True)),
                ('body', ckeditor.fields.RichTextField()),
                ('tags', models.ManyToManyField(blank=True, related_name='blog_tags', to='core.topic')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
