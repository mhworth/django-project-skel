from django.conf.urls import patterns, include, url
from rest_framework import routers, serializers, viewsets

import {{ project_name }}.api.rest

router = routers.DefaultRouter()
router.register('hellos', {{ project_name }}.api.rest.HelloApi, base_name='hello')

urlpatterns = patterns('',
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(router.urls))
)
