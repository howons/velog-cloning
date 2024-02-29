import React, { useEffect, useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import axios from 'axios';
import styles from './Tags.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

type tagGetType = {
  tag_name: string;
  postCount: number;
};

function Tags() {
  const path = useLocation().search;
  const [sortTab, setSortTab] = useState('trending');

  const [tagList, setTags] = useState([]);
  const getTags = useCallback(async () => {
    try {
      if (sortTab !== 'alphabetical') {
        const response = await axios.get(`/api/v1/velog/tags/?num=yes`);
        setTags(response.data);
      } else {
        const response = await axios.get(`/api/v1/velog/tags/`);
        setTags(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [sortTab]);

  useEffect(() => {
    if (path === '?sort=alphabetical') setSortTab('alphabetical');
    else setSortTab('trending');
  }, [path]);

  useEffect(() => {
    getTags();
  }, [sortTab]);

  return (
    <div className={cx('page')}>
      <Header />
      <main>
        <div className={cx('sortDiv')}>
          <div className={cx('tabWrapper')}>
            <Link
              to="/tags?sort=trending"
              className={cx(
                'tab',
                sortTab !== 'alphabetical' ? 'active' : 'none'
              )}
            >
              인기순
            </Link>
            <Link
              to="/tags?sort=alphabetical"
              className={cx(
                'tab',
                sortTab === 'alphabetical' ? 'active' : 'none'
              )}
            >
              이름순
            </Link>
            <div
              className={cx(
                'line',
                sortTab === 'alphabetical' ? 'alphabetical' : 'trending'
              )}
            />
          </div>
        </div>
        <section className={cx('tagSection')}>
          {tagList.map(
            (tagInfo: tagGetType) =>
              tagInfo.tag_name !== '' &&
              tagInfo.postCount !== 0 && (
                <div className={cx('tagComp')} key={tagInfo.tag_name}>
                  <div>
                    <Link
                      to={`/tags/${tagInfo.tag_name}`}
                      className={cx('title')}
                    >
                      {tagInfo.tag_name}
                    </Link>
                  </div>
                  <div className={cx('count')}>
                    총 {tagInfo.postCount}개의 포스트
                  </div>
                </div>
              )
          )}
        </section>
      </main>
    </div>
  );
}

export default Tags;
