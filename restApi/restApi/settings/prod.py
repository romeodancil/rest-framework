from restApi.settings.base import *

# Override base.py settings here

try:
	ALLOWED_HOSTS = ['localhost']
	DEBUG = False
	SECRET_KEY = 'gz%@dvo1e_t%vb=h7h%u!0rjchw@+$(05c5g)1r#4fi62__f3k'
	STATIC_URL = '/static/'
	MEDIA_URL = '/media/'
	MEDIA_ROOT = os.path.join(BASE_DIR, 'api/media')
	STATIC_ROOT =  os.path.join(BASE_DIR, "assets")

	STATICFILES_DIRS = [
	    os.path.join(BASE_DIR, "static")
	]

except:
	pass
