from django.db import models
from PIL import Image

class Destination(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='destinations/')  # ✅ image upload enabled

    def __str__(self):
        return self.name
    # ✅ Auto-optimize uploaded images
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        if self.image:
            img_path = self.image.path
            img = Image.open(img_path)

            # Resize (max width 1200px) for web
            max_width = 1200
            if img.width > max_width:
                ratio = max_width / float(img.width)
                height = int((float(img.height) * float(ratio)))
                img = img.resize((max_width, height), Image.Resampling.LANCZOS)

            # Compress & save
            img.save(img_path, optimize=True, quality=75)
            if img.format != 'WEBP':
                img = img.convert("RGB")
                img.save(img_path.replace('.jpg', '.webp').replace('.png', '.webp'), 'WEBP', quality=75)
