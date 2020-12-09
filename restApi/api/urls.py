from django.urls import path
from knox import views as knox_views
from api.views import LoginView
from api.views import SampleAPIView, SampleDetailAPIView, RegisterAPI

urlpatterns = [
	path('register/', RegisterAPI.as_view(), name='register'),
	path(r'login/', LoginView.as_view(), name='login'),
	path(r'logout/', knox_views.LogoutView.as_view(), name='logout'),
	path(r'logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
	path('/allsample', SampleAPIView.as_view()),
	path('<pk>', SampleAPIView.as_view()),
]