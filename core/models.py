from django.db import models
from django.utils.text import slugify



# Base
class BaseOptions(models.Model):
    title = models.CharField(max_length=80)
    slug = models.SlugField(blank=True)
    image = models.ImageField(upload_to="images", blank=True, null=True)
    image_caption = models.CharField(max_length=80, blank=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    meta_description = models.TextField(blank=True)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(BaseOptions, self).save(*args, **kwargs)


# tags
class Tags(BaseOptions):
    pass

    def __str__(self):
        return self.title


# Topic
class Topic(BaseOptions):
    pass

    def __str__(self):
        return self.title


# blog
class Blog(BaseOptions):
    body = models.TextField()
    category = models.ForeignKey(Topic, on_delete=models.SET_NULL, blank=True, null=True, related_name="blog_topic")
    tags = models.ManyToManyField(Tags, blank=True, related_name="blog_tags")

    def __str__(self):
        return self.title


