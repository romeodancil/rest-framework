from rest_framework import serializers
from api.models import SampleApi
from django.contrib.auth.models import User

class SampleApiSerializers(serializers.ModelSerializer):

	class Meta:
		model = SampleApi
		fields = ('title', 'content', 'id')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')