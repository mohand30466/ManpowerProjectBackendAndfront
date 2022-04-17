from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile


# @receiver(sender=User)
def post_save_user(sender, instance, created, *args, **kwargs):
    # user = instance
    if not created:
        Profile.objects.create(user=instance)


post_save.connect(post_save_user, sender=User) 