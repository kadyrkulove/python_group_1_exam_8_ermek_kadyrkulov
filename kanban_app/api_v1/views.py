from webapp.models import Task
from rest_framework import viewsets
from api_v1.serializers import TaskSerializer

class NoAuthModelViewSet(viewsets.ModelViewSet):
    authentication_classes = []


class TaskViewSet(NoAuthModelViewSet):
    queryset = Task.objects.all().order_by('status', '-last_edited')
    serializer_class = TaskSerializer