from .models import Hat, LocationVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json


class LocationVODetailEncoder(ModelEncoder):
    model = LocationVO
    properties = ["import_href"]


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

    def get_extra_data(self, o):
        return {"location": o.location.import_href}


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
    try:
        import_href = content["location"]
        location = LocationVO.objects.get(import_href=import_href)
        content["location"] = location

    except LocationVO.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid location"},
            status=400,
        )

    hat = Hat.objects.create(**content)
    return JsonResponse(
        hat,
        encoder=HatDetailEncoder,
        safe=False,
    )
