from django.db import models
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail
import os

class SampleApi(models.Model):
	title = models.CharField(max_length=120)
	content = models.TextField()

	def __str__(self):
		return self.title

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    email_plaintext_message = "{}{}".format('http://localhost:3000/password-reset/confirm/', reset_password_token.key)
    send_mail(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@noreply.noreply",
        # to:
        [reset_password_token.user.email]
    )