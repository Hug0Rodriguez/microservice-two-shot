from django.db import models


class LocationVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)


class Hat(models.Model):
    material = models.CharField(max_length=200)
    style = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField()


    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.style
