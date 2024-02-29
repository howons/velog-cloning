import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/v1/accounts/token/refresh', req => {
    return HttpResponse.json({
      access: 'access',
    });
  }),

  http.get(`/api/v1/accounts/user/@:authorId`, req => {
    return HttpResponse.json({
      username: 'test',
      velog_name: 'test',
      email: 'test@test.com',
      name: 'test',
      profile_image: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
      introduction: 'intro',
      github: '',
      twitter: '',
      facebook: '',
      homepage: '',
      mail: '',
      about: 'about',
    });
  }),

  http.get(`/api/v1/accounts/user/`, req => {
    return HttpResponse.json({
      username: 'test',
      velog_name: 'test',
      email: 'test@test.com',
      name: 'test',
      profile_image: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
      introduction: 'intro',
      github: '',
      twitter: '',
      facebook: '',
      homepage: '',
      mail: '',
      about: 'about',
    });
  }),
];
