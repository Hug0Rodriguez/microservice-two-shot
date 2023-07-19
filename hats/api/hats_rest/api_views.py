from .models import Hat
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "id",
        "material",
        "style",
        "color",
        "picture_url",
    ]


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = [
        "id",
        "material",
        "style",
        "color",
        "picture_url",
    ]


@require_http_methods(["GET", "POST"])
def api_list_hats(request):

    if request.method == "GET":
        hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        content = json.loads(request.body)
        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )
