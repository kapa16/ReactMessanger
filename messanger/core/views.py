from django.shortcuts import render
from django.views.generic import TemplateView


class Messanger(TemplateView):
    template_name = 'core/index.html'
