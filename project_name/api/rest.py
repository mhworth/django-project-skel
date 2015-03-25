
from rest_framework.response import Response
from rest_framework import viewsets

class HelloApi(viewsets.ViewSet):

    def retrieve(self, request, pk=None):
        retval = {}
        if pk:
            retval['message'] = "Hello, {}!".format(pk)
        else:
            retval['message'] = "Hello, World!"
        return Response(retval)
