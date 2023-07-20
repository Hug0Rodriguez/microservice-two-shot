from django.contrib import admin
from .models import Hat, LocationVO


@admin.register(Hat)
class HatAdmin(admin.ModelAdmin):
    list_display = ["id", "fabric", "style", "color", "picture_url",]


@admin.register(LocationVO)
class LocationVOAdmin(admin.ModelAdmin):
    list_display = ["import_href"]

