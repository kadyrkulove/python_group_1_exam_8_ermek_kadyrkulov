from django.db import models
from django.conf import settings

STATUS_CHOICES = (
    ("backlog", 'queue'),
    ("in progress", 'on-the-job'),
    ("done", 'Сделано')
)

class Task(models.Model):
    summary = models.CharField(max_length=255)
    description = models.CharField(max_length=1000, null=True, blank=True)
    last_edited = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='backlog')
    time_planned = models.DecimalField(max_digits=6, decimal_places=1, null=True, blank=True)

    def __str__(self):
        return self.summary

