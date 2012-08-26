from django.conf.urls.defaults import *

from views import *


urlpatterns = patterns('',
    url(r'^ping/$', Ping.as_view()),
    url(r'login/$', api_login),
    url(r'^$', ReposView.as_view()),
    url(r'^repo/list/$', ReposView.as_view(), name='repos'),
    url(r'^repo/(?P<repo_id>[^/]+)/$', csrf_exempt(RepoView.as_view()), name='repo'),

    url(r'^dir/(?P<repo_id>[^/]+)/$', csrf_exempt(RepoDirPathView.as_view()), name='repo-dir-path'),
    url(r'^dir/(?P<repo_id>[^/]+)/(?P<dir_id>[^/]+)/$', csrf_exempt(RepoDirIdView.as_view()), name='repo-dir-id'),
    url(r'^file/(?P<repo_id>[^/]+)/$', csrf_exempt(RepoFilePathView.as_view()), name='repo-file-path'),
    url(r'^file/(?P<repo_id>[^/]+)/(?P<file_id>[^/]+)/$', csrf_exempt(RepoFileIdView.as_view()), name='repo-file-id'),
)

