import React, { useState } from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import classNames from 'classnames/bind';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Header from '../components/Header';
// eslint-disable-next-line import/extensions,import/no-unresolved
import UserIntro from '../components/UserIntro';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from './PersonalAbout.module.scss';

const cx = classNames.bind(styles);

const user = {
  username: '2-0-is',
  userImg: '',
  description: '이영은의 벨로그',
  github: '2-0-is',
  twitter: 'twitter',
  facebook: 'facebook',
  homepage: 'https://localhost:3000',
  mail: 'yuye2002@snu.ac.kr',
  tags: ['새태그'],
  posts: [
    {
      id: 1,
      title: '포스트 제목입니다',
      url: 'post-title-1',
      intro: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      seriesTitle: 'series1',
      seriesId: 1,
      tags: ['tagA', 'tagB', 'tagC'],
      date: '2022년 10월 31일',
      comments: 10,
      authorId: '2-0-is',
      authorImg: '',
      heart: 10,
    },
    {
      id: 2,
      title: '포스트 제목입니다',
      url: 'post-title-2',
      intro: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      seriesTitle: 'series1',
      seriesId: 2,
      tags: ['tagA', 'tagB', 'tagC'],
      date: '2022년 10월 31일',
      comments: 10,
      authorId: '2-0-is',
      authorImg: '',
      heart: 10,
    },
    {
      id: 3,
      title: '포스트 제목입니다',
      url: 'post-title-3',
      intro: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      seriesTitle: 'series1',
      seriesId: 3,
      tags: ['tagA', 'tagB', 'tagC'],
      date: '2022년 10월 31일',
      comments: 10,
      authorId: '2-0-is',
      authorImg: '',
      heart: 10,
    },
    {
      id: 4,
      title: '포스트 제목입니다',
      url: 'post-title-4',
      intro: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      seriesTitle: '',
      seriesId: 0,
      tags: [],
      date: '2022년 10월 31일',
      comments: 10,
      authorId: '2-0-is',
      authorImg: '',
      heart: 10,
    },
  ],
  series: [],
  about: '소개글',
};

function PersonalAbout() {
  const loginUser = useState(false);
  return (
    <div className={cx('page')}>
      <Header />
      <div className={cx('pageContent')}>
        <UserIntro userInfo={user} />
        <div>
          <div className={cx('pageIndex')}>
            <a href={`/@${user.username}`} className={cx('index')}>
              글
            </a>
            <a href={`/@${user.username}/series`} className={cx('index')}>
              시리즈
            </a>
            <a
              href={`/@${user.username}/about`}
              className={cx('index', 'active')}
            >
              소개
            </a>
            <div className={cx('activeLine')} />
          </div>
        </div>
        <div>
          {user.about === '' && (
            <div className={cx('empty')}>
              <img
                src="https://static.velog.io/static/media/undraw_empty.5fd6f2b8.svg"
                alt="empty about"
              />
              <div className={cx('message')}>소개가 작성되지 않았습니다.</div>
              {loginUser && (
                <button type="button" color="teal" className={cx('addIntro')}>
                  소개 글 작성하기
                </button>
              )}
            </div>
          )}
          {user.about !== '' && <div className={cx('intro')}>{user.about}</div>}
        </div>
      </div>
    </div>
  );
}

export default PersonalAbout;
