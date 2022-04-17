from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter
from users import views


urlpatterns = [
    path('users/', views.Profiles.as_view(), name='users'),
    path('users/<pk>/', views.UserProfile.as_view(), name='user-detail'),
    path('user-create/<pk>/', views.CreateProfile.as_view(), name='user-create')
]


if settings.DEBUG:
    router = DefaultRouter()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    router = SimpleRouter()


urlpatterns += router.urls



    