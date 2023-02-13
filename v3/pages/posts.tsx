import { NextPage } from 'next';
import React, { useEffect } from 'react';
import type { ArticleFetch } from '@types';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import type { AppState, AppThunkDispatch } from '~store/index';
import { fetchArticles } from '~store/sliceArticle';
import { cn, truncate } from '~lib/utils';
import { Post, Loading, ErrorMessage } from '~components/Articles';
 

const Article: NextPage = () => {
  const { data, loading, error }: ArticleFetch = useSelector(
    (state: AppState) => state.articles,
  );

  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <Layout>
      <div className="pt-[14vh] min-h-[78vh]">
        { error ? <ErrorMessage error={error} /> :
          <div className={`
            grid md:grid-cols-2
            lg:grid-cols-3
            md:place-items-center
            gap-y-4
            md:gap-x-10 
            px-2 md:px-20
          `}> { 
            loading ?
              [0,1,2,3,4,5].map((el, index) => <Loading key={index} />)
            : 
              data?.map((article, index) => (
                <Post key={index} className="" {...article} />
              ))
            }
          </div>
        }
      </div>
    </Layout>
  );
};

export default Article;
