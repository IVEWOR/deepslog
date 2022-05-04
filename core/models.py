from django.db import models
from django.utils.text import slugify
from ckeditor.fields import RichTextField



# Topic
class Topic(models.Model):
    title = models.CharField(max_length=80)
    slug = models.SlugField(blank=True)
    meta_description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Topic, self).save(*args, **kwargs)


# article
class Article(models.Model):
    title = models.CharField(max_length=80)
    slug = models.SlugField(blank=True)
    image = models.ImageField(upload_to="images", blank=True, null=True)
    image_caption = models.CharField(max_length=80, blank=True)
    body = RichTextField()
    meta_description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Topic, blank=True, related_name="blog_tags")

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Article, self).save(*args, **kwargs)


