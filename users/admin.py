from django.contrib import admin
from .models import Profile, Employer, Employee

# Register your models here.

admin.site.register(Profile)
admin.site.register(Employer)
admin.site.register(Employee)