from django.shortcuts import render
from django.views import generic
from django.conf import settings
#from django.contrib.auth.decorators import login_required

# Create your views here.

class IndexView(generic.TemplateView):
    template_name = 'base.djhtml'

    def get_context_data(self, **kwargs):
        context = {}
        context['debug'] = settings.DEBUG
        context['development'] = settings.DEVELOPMENT
        return context

#index = login_required(IndexView.as_view())
index = IndexView.as_view()
