from django.contrib.auth import login
from rest_framework import permissions, generics
from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from api.serializers import RegisterSerializer, UserSerializer
from rest_framework import status
from rest_framework.response import Response
from knox.models import AuthToken

class LoginView(KnoxLoginView):
	permission_classes = (permissions.AllowAny,)

	def post(self, request, format=None):
	    serializer = AuthTokenSerializer(data=request.data)
	    serializer.is_valid(raise_exception=True)
	    user = serializer.validated_data['user']
	    login(request, user)
	    return super(LoginView, self).post(request, format=None)

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        data = request.data
        if data['password'] != data['confirm_password']:
            context = {
                'password': ['Password did not match']
            }
            return Response(context, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
	        "user": UserSerializer(user, context=self.get_serializer_context()).data,
	        "token": AuthToken.objects.create(user)[1]
        })