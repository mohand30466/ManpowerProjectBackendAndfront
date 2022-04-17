from rest_framework.generics import RetrieveAPIView, CreateAPIView, ListAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from .serializers import ProfileSerializer
from users.models import Profile


class UserProfile(RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = "pk"


class Profiles(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class CreateProfile(UpdateAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    
    lookup_field = 'pk'



