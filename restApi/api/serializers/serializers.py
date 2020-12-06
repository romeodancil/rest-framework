from rest_framework import serializers
from api.models import SampleApi

class SampleApiSerializers(serializers.ModelSerializer):

	class Meta:
		model = SampleApi
		fields = ('title', 'content', 'id')