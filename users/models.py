from email.policy import default
from tkinter import CASCADE
from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


def upload_user_image(instance, filename):
    return f"{instance.user}/{filename}"


class Employee(models.Model):
    employee = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return self.employee


class Employer(models.Model):
    employer = models.CharField(max_length=100, blank=False, null=False)
    business_id = models.CharField(max_length=10, blank=False, null=False)

    def __str__(self):
        return self.employer

account = (
    ("employee","Emloyee"),
    ("Business","Business"),
 
    
)
class Profile(models.Model): 
   
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    professional = models.CharField(max_length=200, blank=False, null=False)
    biography = models.TextField(blank=True, null=True)
    address = models.CharField(max_length=250, blank=False, null=False)
    phone_number = models.CharField(max_length=200, blank=True, null=True)
    img = models.ImageField(upload_to=upload_user_image,default="images/Yashirlogo.png", blank=True, null=True)
    account_Tybe =models.CharField(max_length=50, blank=True, null=True, choices=account)
    business_Id = models.CharField(max_length=50,blank=True, null=True, unique=True)
  


    def __str__(self):
        return self.user.username