from django.contrib import admin
from .models import Hat

@admin.register(Hat)
class HatAdmin(admin.ModelAdmin):
    list_display = ["id", "material", "style", "color", "picture_url",]

