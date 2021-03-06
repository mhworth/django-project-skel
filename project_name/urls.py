from django.conf.urls import patterns, include, url
from django.contrib import admin
import core.views

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('{{ project_name }}.api.urls')),
    url(r'^$', core.views.index, name='index')
)
