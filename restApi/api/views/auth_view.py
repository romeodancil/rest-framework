from django.contrib.auth import login
from rest_framework import permissions, generics
from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from api.serializers import RegisterSerializer, UserSerializer, ChangePasswordSerializer
from rest_framework import status
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth.models import User
from django.utils.translation import gettext as _

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
                'password': [_('Password did not match')]
            }
            return Response(context, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
	        "user": UserSerializer(user, context=self.get_serializer_context()).data,
	        "token": AuthToken.objects.create(user)[1]
        })

class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        data = request.data
        self.object = self.get_object()
        serializer = self.get_serializer(data=data)

        if data['new_password'] != data['confirm_password']:
            context = {
                'new_password': [_('Password did not match')]
            }
            return Response(context, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": [_("Wrong Old password.")]}, status=status.HTTP_400_BAD_REQUEST)

            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': _('success'),
                'code': status.HTTP_200_OK,
                'message': _('Password updated successfully'),
            }

            return Response(response)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)