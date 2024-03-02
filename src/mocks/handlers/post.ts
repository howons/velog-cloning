import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(/\/api\/v1\/velog\/(today|recent|week|month|year)/, req => {
    return HttpResponse.json({
      results: [
        {
          pid: 1,
          title: 'title',
          author: 'author',
          url: 'string',
          preview: 'preview',
          thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
          tags: [{ name: 'one', postCount: 1 }],
          created_at: '2020-02-01',
          updated_at: '2020-02-01',
          comments: 2,
          likes: 3,
          is_private: false,
        },
        {
          pid: 1,
          title: 'title',
          author: 'author',
          url: 'string',
          preview: 'preview',
          thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
          tags: [{ name: 'one', postCount: 1 }],
          created_at: '2020-02-01',
          updated_at: '2020-02-01',
          comments: 2,
          likes: 3,
          is_private: false,
        },
        {
          pid: 1,
          title: 'title',
          author: 'author',
          url: 'string',
          preview: 'preview',
          thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
          tags: [{ name: 'one', postCount: 1 }],
          created_at: '2020-02-01',
          updated_at: '2020-02-01',
          comments: 2,
          likes: 3,
          is_private: false,
        },
      ],
    });
  }),

  http.get('/api/v1/velog/:id/tags/', req => {
    return HttpResponse.json([
      {
        id: 1,
        tag_name: 'tag',
        author: 'author',
        postCount: 1,
      },
    ]);
  }),

  http.get('/api/v1/velog/:id', req => {
    return HttpResponse.json([
      {
        pid: 1,
        title: 'title',
        author: 'author',
        url: 'string',
        preview: 'preview',
        thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
        tags: [{ name: 'one', postCount: 1 }],
        created_at: '2020-02-01',
        updated_at: '2020-02-01',
        comments: 2,
        likes: 3,
        is_private: false,
      },
    ]);
  }),

  http.get('/api/v1/velog/:id/series/', req => {
    return HttpResponse.json([
      {
        id: 1,
        series_name: 'series',
        url: 'string',
        photo: 'string',
        update: 'string',
        author: 'user',
        postNum: 1,
      },
    ]);
  }),

  http.get('/api/v1/velog/@:userId/:postId/', req => {
    return HttpResponse.json({
      pid: 1,
      series: {
        id: 1,
        series_name: 'string',
        photo: 'string',
        update: 'string',
        author: 'string',
        postNum: 0,
        postList: [],
      },
      title: 'string',
      tags: [
        {
          id: 1,
          tag_name: 'tag',
          author: 'author',
          postCount: 1,
        },
      ],
      author: 'string',
      url: 'string',
      preview: 'string',
      thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
      created_at: '2020-02-01',
      updated_at: '2020-02-01',
      content:
        '# 232\n## 6786\n\n**텍스트**\n_텍스트_\n~~텍스트~~\n> [7657]()\n>\n\n```\n코드를 입력하세요\n```',
      likes: 4,
      is_active: true,
      comments: [
        {
          cid: 1,
          post: 1,
          author: 'string',
          created_at: '2020-02-01',
          content: 'string',
          parent_comment: null,
          comment_like_count: 1,
        },
      ],
      is_private: false,
      prev_post: {
        pid: 1,
        title: 'string',
        author: 'string',
        url: 'string',
        preview: 'string',
        thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
        tags: [{ name: 'one', postCount: 1 }],
        created_at: '2020-02-01',
        updated_at: '2020-02-01',
        comments: 2,
        likes: 3,
        is_private: false,
      },
      next_post: {
        pid: 1,
        title: 'string',
        author: 'string',
        url: 'string',
        preview: 'string',
        thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
        tags: [{ name: 'one', postCount: 1 }],
        created_at: '2020-02-01',
        updated_at: '2020-02-01',
        comments: 2,
        likes: 3,
        is_private: false,
      },
    });
  }),

  http.post('/api/v1/velog/@:userId/:postId/', req => {
    return HttpResponse.json({
      likes: 3,
      is_active: true,
    });
  }),

  http.get('/api/v1/velog/:postId/comment/', req => {
    return HttpResponse.json([
      {
        cid: 1,
        post: 1,
        author: 'string',
        created_at: '2020-02-01',
        content: 'string',
        parent_comment: 1,
        comment_like_count: 1,
      },
    ]);
  }),

  http.get('/api/v1/velog/lists/liked', req => {
    return HttpResponse.json({
      results: [
        {
          pid: 1,
          title: 'string',
          author: 'string',
          url: 'string',
          preview: 'string',
          thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
          tags: [{ name: 'one', postCount: 1 }],
          created_at: '2020-02-01',
          updated_at: '2020-02-01',
          comments: 2,
          likes: 3,
          is_private: false,
        },
      ],
    });
  }),

  http.get('/api/v1/velog/lists/read', req => {
    return HttpResponse.json({
      results: [
        {
          pid: 1,
          title: 'string',
          author: 'string',
          url: 'string',
          preview: 'string',
          thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
          tags: [{ name: 'one', postCount: 1 }],
          created_at: '2020-02-01',
          updated_at: '2020-02-01',
          comments: 2,
          likes: 3,
          is_private: false,
        },
      ],
    });
  }),

  http.get('/api/v1/velog/write/id=:pid', req => {
    return HttpResponse.json({
      pid: 1,
      series: {
        id: 1,
        series_name: 'string',
        photo: 'string',
        update: 'string',
        author: 'string',
        postNum: 0,
        postList: [],
      },
      title: 'string',
      tags: [
        {
          id: 1,
          tag_name: 'tag',
          author: 'author',
          postCount: 1,
        },
      ],
      author: 'string',
      url: 'string',
      preview: 'string',
      thumbnail: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
      created_at: '2020-02-01',
      updated_at: '2020-02-01',
      content: 'string',
      likes: 'string',
      is_active: true,
      is_private: false,
    });
  }),

  http.post('/api/v1/velog/image_upload/1', req => {
    return HttpResponse.json({
      image: 'https://d2pu0ruyxf50in.cloudfront.net/velog.png',
    });
  }),

  http.post('/api/v1/velog/create_series/', req => {
    return HttpResponse.json({
      id: 1,
      series_name: 'series',
      url: 'string',
      photo: 'string',
      update: 'string',
      author: 'user',
      postNum: 1,
    });
  }),

  http.post('/api/v1/velog/write/', req => {
    return HttpResponse.json(null);
  }),

  http.patch('/api/v1/velog/write/id=:pid/', req => {
    return HttpResponse.json(null);
  }),
];
