import React from 'react';
import PostComp from '../../components/PostComp';
import { post } from '../../contexts/types';
import styles from './InterestPost.module.scss';

const tempPosts: post[] = [
  {
    id: 1,
    title: '포스트 제목',
    author: {
      id: 'abcd12',
      velog_name: 'abcd12의 velog',
      email: 'mail',
      username: 'abcd',
      userImg:
        'https://velog.velcdn.com/images/silky225/profile/f3d11391-6a64-4cf0-9889-46778956d77e/social_profile.png',
      description: '벨로그 설명',
      github: '깃허브 링크',
      twitter: '트위터 링크',
      facebook: '페이스북 링크',
      homepage: '홈페이지 링크',
      mail: '메일 링크',
    },
    url: 'userID/personalPost',
    preview: '포스트 미리보기',
    thumbnail:
      'https://th.bing.com/th/id/R.d01dd3fd4074d38334656a25a511dd5a?rik=x6upOuofKEAgRQ&riu=http%3a%2f%2fwww.etoland.co.kr%2fdata%2fdaumeditor02%2f200202%2f56492515806018600.jpg&ehk=e7vLw%2bHjTj3q2eX6TnrulH77vFS5G4qzokeLISh%2brRM%3d&risl=&pid=ImgRaw&r=0',
    tags: ['html', 'css'],
    created_at: '2022년 4월 20일',
    updated_at: '2022년 4월 20일',
    comments: 12,
    likes: 24,
    is_private: true,
  },
  {
    id: 2,
    title: '포스트 제목',
    author: {
      id: 'abcd12',
      velog_name: 'abcd12의 velog',
      email: 'mail',
      username: 'abcd',
      userImg:
        'https://velog.velcdn.com/images/silky225/profile/f3d11391-6a64-4cf0-9889-46778956d77e/social_profile.png',
      description: '벨로그 설명',
      github: '깃허브 링크',
      twitter: '트위터 링크',
      facebook: '페이스북 링크',
      homepage: '홈페이지 링크',
      mail: '메일 링크',
    },
    url: 'userID/personalPost',
    preview: '포스트 미리보기',
    thumbnail:
      'https://th.bing.com/th/id/R.d01dd3fd4074d38334656a25a511dd5a?rik=x6upOuofKEAgRQ&riu=http%3a%2f%2fwww.etoland.co.kr%2fdata%2fdaumeditor02%2f200202%2f56492515806018600.jpg&ehk=e7vLw%2bHjTj3q2eX6TnrulH77vFS5G4qzokeLISh%2brRM%3d&risl=&pid=ImgRaw&r=0',
    tags: ['html', 'css'],
    created_at: '2022년 4월 20일',
    updated_at: '2022년 4월 20일',
    comments: 12,
    likes: 24,
    is_private: true,
  },
  {
    id: 3,
    title: '포스트 제목',
    author: {
      id: 'abcd12',
      velog_name: 'abcd12의 velog',
      email: 'mail',
      username: 'abcd',
      userImg:
        'https://velog.velcdn.com/images/silky225/profile/f3d11391-6a64-4cf0-9889-46778956d77e/social_profile.png',
      description: '벨로그 설명',
      github: '깃허브 링크',
      twitter: '트위터 링크',
      facebook: '페이스북 링크',
      homepage: '홈페이지 링크',
      mail: '메일 링크',
    },
    url: 'userID/personalPost',
    preview: '포스트 미리보기',
    thumbnail:
      'https://th.bing.com/th/id/R.d01dd3fd4074d38334656a25a511dd5a?rik=x6upOuofKEAgRQ&riu=http%3a%2f%2fwww.etoland.co.kr%2fdata%2fdaumeditor02%2f200202%2f56492515806018600.jpg&ehk=e7vLw%2bHjTj3q2eX6TnrulH77vFS5G4qzokeLISh%2brRM%3d&risl=&pid=ImgRaw&r=0',
    tags: ['html', 'css'],
    created_at: '2022년 4월 20일',
    updated_at: '2022년 4월 20일',
    comments: 12,
    likes: 24,
    is_private: true,
  },
  {
    id: 4,
    title: '포스트 제목',
    author: {
      id: 'abcd12',
      velog_name: 'abcd12의 velog',
      email: 'mail',
      username: 'abcd',
      userImg:
        'https://velog.velcdn.com/images/silky225/profile/f3d11391-6a64-4cf0-9889-46778956d77e/social_profile.png',
      description: '벨로그 설명',
      github: '깃허브 링크',
      twitter: '트위터 링크',
      facebook: '페이스북 링크',
      homepage: '홈페이지 링크',
      mail: '메일 링크',
    },
    url: 'userID/personalPost',
    preview: '포스트 미리보기',
    thumbnail:
      'https://th.bing.com/th/id/R.d01dd3fd4074d38334656a25a511dd5a?rik=x6upOuofKEAgRQ&riu=http%3a%2f%2fwww.etoland.co.kr%2fdata%2fdaumeditor02%2f200202%2f56492515806018600.jpg&ehk=e7vLw%2bHjTj3q2eX6TnrulH77vFS5G4qzokeLISh%2brRM%3d&risl=&pid=ImgRaw&r=0',
    tags: ['html', 'css'],
    created_at: '2022년 4월 20일',
    updated_at: '2022년 4월 20일',
    comments: 12,
    likes: 24,
    is_private: true,
  },
  {
    id: 5,
    title: '포스트 제목',
    author: {
      id: 'abcd12',
      velog_name: 'abcd12의 velog',
      email: 'mail',
      username: 'abcd',
      userImg:
        'https://velog.velcdn.com/images/silky225/profile/f3d11391-6a64-4cf0-9889-46778956d77e/social_profile.png',
      description: '벨로그 설명',
      github: '깃허브 링크',
      twitter: '트위터 링크',
      facebook: '페이스북 링크',
      homepage: '홈페이지 링크',
      mail: '메일 링크',
    },
    url: 'userID/personalPost',
    preview: '포스트 미리보기',
    thumbnail:
      'https://th.bing.com/th/id/R.d01dd3fd4074d38334656a25a511dd5a?rik=x6upOuofKEAgRQ&riu=http%3a%2f%2fwww.etoland.co.kr%2fdata%2fdaumeditor02%2f200202%2f56492515806018600.jpg&ehk=e7vLw%2bHjTj3q2eX6TnrulH77vFS5G4qzokeLISh%2brRM%3d&risl=&pid=ImgRaw&r=0',
    tags: ['html', 'css'],
    created_at: '2022년 4월 20일',
    updated_at: '2022년 4월 20일',
    comments: 12,
    likes: 24,
    is_private: true,
  },
  {
    id: 6,
    title: '포스트 제목',
    author: {
      id: 'abcd12',
      velog_name: 'abcd12의 velog',
      email: 'mail',
      username: 'abcd',
      userImg:
        'https://velog.velcdn.com/images/silky225/profile/f3d11391-6a64-4cf0-9889-46778956d77e/social_profile.png',
      description: '벨로그 설명',
      github: '깃허브 링크',
      twitter: '트위터 링크',
      facebook: '페이스북 링크',
      homepage: '홈페이지 링크',
      mail: '메일 링크',
    },
    url: 'userID/personalPost',
    preview: '포스트 미리보기',
    thumbnail:
      'https://th.bing.com/th/id/R.d01dd3fd4074d38334656a25a511dd5a?rik=x6upOuofKEAgRQ&riu=http%3a%2f%2fwww.etoland.co.kr%2fdata%2fdaumeditor02%2f200202%2f56492515806018600.jpg&ehk=e7vLw%2bHjTj3q2eX6TnrulH77vFS5G4qzokeLISh%2brRM%3d&risl=&pid=ImgRaw&r=0',
    tags: ['html', 'css'],
    created_at: '2022년 4월 20일',
    updated_at: '2022년 4월 20일',
    comments: 12,
    likes: 24,
    is_private: true,
  },
];

function InterestPost() {
  return (
    <div className={styles.background}>
      <div className={styles.title}>관심 있을 만한 포스트</div>
      <div className={styles.container}>
        <div className={styles.post_container}>
          {tempPosts.map(post => {
            return <PostComp post={post} key={post.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default InterestPost;