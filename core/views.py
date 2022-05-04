from django.shortcuts import render, get_object_or_404
from core.models import Article, Topic


def index(request):
    blog = Article.objects.all()
    template_name = "index.html"
    return render(request, template_name, context={"blog": blog})


def blog(request, slug):
    article = get_object_or_404(Article, slug=slug)
    template_name = "article.html"
    context={"article": article}
    return render(request, template_name, context)


def topic(request, slug):
    topic = get_object_or_404(Topic, slug=slug)
    articles = Article.objects.all()
    template_name = "article.html"
    context={"topic": topic, "articles": articles}
    return render(request, template_name, context)
