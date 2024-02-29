import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames/bind';
import axios from 'axios';
import styles from './BigPostComp.module.scss';
import { post, user } from '../contexts/types';

const cx = classNames.bind(styles);

type post_type = {
  postInfo: post;
  username: string;
};

function BigPostComp({ postInfo, username }: post_type) {
  const [user, setUser] = useState({
    username: 'myId',
    velog_name: 'my_velog',
    email: 'mail',
    name: '이름',
    profile_image: '',
    introduction: '내 벨로그',
    github: 'github',
    twitter: 'twitter',
    facebook: 'facebook',
    homepage: 'https://localhost:3000',
    mail: 'myId@snu.ac.kr',
    about: 'about 페이지에 들어갈 설명입니다',
  });

  async function getUser() {
    try {
      const response = await axios.get(
        `/api/v1/accounts/user/@${postInfo.author}`
      );
      const responseUser: user = response.data;
      setUser(responseUser);
    } catch (error) {
      console.log(error);
    }
  }

  const timeNow = moment();
  const timePost = moment(postInfo.created_at);

  const [agoFormat, setAgoFormat] = useState('YYYY-MM-DD');
  const timeDiff = timeNow.diff(timePost);

  useEffect(() => {
    getUser();
    if (timeDiff < 1000 * 60 * 60)
      setAgoFormat(`${Math.floor(timeDiff / (1000 * 60))}분 전`);
    else if (timeDiff < 1000 * 60 * 60 * 24)
      setAgoFormat(`${Math.floor(timeDiff / (1000 * 60 * 60))}시간 전`);
    else if (timeDiff < 1000 * 60 * 60 * 24 * 7)
      setAgoFormat(`${Math.floor(timeDiff / (1000 * 60 * 60 * 24))}일 전`);
    else setAgoFormat(timePost.format('YYYY년 MM월 DD일'));
  }, []);

  return (
    <div className={cx('postDiv')}>
      {username === '' && (
        <div className={cx('userInfo')}>
          <Link to={`/@${user.username}`}>
            <img src={user.profile_image} alt="thumbnail" />
          </Link>
          <div className={cx('username')}>
            <Link to={`/@${user.username}`}>{user.username}</Link>
          </div>
        </div>
      )}
      <Link to={`/@${postInfo.author}/${postInfo.url}`}>
        {postInfo.thumbnail !== null && postInfo.thumbnail !== undefined && (
          <div className={cx('thumbnail')}>
            <img src={postInfo.thumbnail} alt="post-thumbnail" />
          </div>
        )}
      </Link>
      <Link to={`/@${postInfo.author}/${postInfo.url}`}>
        <h2>{postInfo.title}</h2>
      </Link>
      <p>{postInfo.preview}</p>
      <div className={cx('tagWrapper')}>
        {postInfo.tags?.map(tag => (
          <Link to={`/tags/${tag.name}`} className={cx('tag')} key={tag.name}>
            {tag.name}
          </Link>
        ))}
      </div>
      <div className={cx('subInfo')}>
        <span>{agoFormat}</span>
        <span className={cx('dot')}>·</span>
        <span>{postInfo.comments}개의 댓글</span>
        <span className={cx('dot')}>·</span>
        <span className={cx('likes')}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
            />
            {postInfo.likes}
          </svg>
        </span>
        {postInfo.is_private && <span className={cx('dot')}>·</span>}
        {postInfo.is_private && (
          <span>
            <div className={cx('secret')}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.625 9H16.5V6.81c0-2.47-1.969-4.522-4.44-4.56a4.514 4.514 0 0 0-4.56 4.5V9H6.375A1.88 1.88 0 0 0 4.5 10.875v9a1.88 1.88 0 0 0 1.875 1.875h11.25a1.88 1.88 0 0 0 1.875-1.875v-9A1.88 1.88 0 0 0 17.625 9zm-4.969 5.85v3.225a.672.672 0 0 1-.623.675.657.657 0 0 1-.69-.656V14.85a1.5 1.5 0 0 1-.838-1.486 1.5 1.5 0 1 1 2.152 1.486zM15.187 9H8.814V6.75c0-.848.332-1.645.937-2.25A3.16 3.16 0 0 1 12 3.562a3.16 3.16 0 0 1 2.25.938 3.16 3.16 0 0 1 .938 2.25V9z"
                />
              </svg>{' '}
              비공개
            </div>
          </span>
        )}
      </div>
    </div>
  );
}

export default BigPostComp;
