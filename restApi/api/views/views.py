from rest_framework.generics import ListAPIView, RetrieveAPIView
from api.models import SampleApi
from api.serializers import SampleApiSerializers

class SampleAPIView(ListAPIView):
	queryset = SampleApi.objects.all()
	serializer_class = SampleApiSerializers


class SampleDetailAPIView(RetrieveAPIView):
	queryset = SampleApi.objects.all()
	serializer_class = SampleApiSerializers