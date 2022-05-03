from django.shortcuts import render
from core.models import Blog


def index(request):
    blog = Blog.objects.all()
    template_name = "index.html"
    return render(request, template_name, context={"blog": blog})
