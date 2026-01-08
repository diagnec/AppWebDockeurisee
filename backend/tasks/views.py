from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Task
import json

@csrf_exempt
def tasks_view(request):
    if request.method == "GET":
        tasks = list(Task.objects.values())
        return JsonResponse(tasks, safe=False)

    if request.method == "POST":
        data = json.loads(request.body)
        task = Task.objects.create(title=data["title"])
        return JsonResponse({"id": task.id, "title": task.title})
