from django.urls import path

from api.views import SampleAPIView, SampleDetailAPIView

urlpatterns = [
	path('/allsample', SampleAPIView.as_view()),
	path('<pk>', SampleAPIView.as_view()),
]