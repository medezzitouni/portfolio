import { NextPage } from 'next';
import React, { useEffect } from 'react';
import type { ArticleType, ArticleFetch } from '@types';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import type { AppState, AppThunkDispatch } from '~store/index';
import { fetchArticles } from '~store/sliceArticle';
import { cn, truncate } from '~lib/utils';

interface PostType {
  id?: string;
  media_type: string;
  media_url: string;
  caption?: string;
  className?: string;
}

const Media = ({
  media_type,
  media_url,
  className,
}: PostType) => {
  switch (media_type) {
    case 'VIDEO':
      return (
        <>
          <video
            className={cn('aspect-video object-contain', className)}
            height="auto"
            src={media_url}
            // @ts-ignore
            type="video/mp4"
            controls
            playsinline
          ></video>
        </>
      );
    default:
      return (
        <>
          <img
            className={cn('aspect-[4/2] object-cover', className)}
            height="auto"
            src={media_url}
          />
        </>
      );
  }
};

const Post = ({
  media_type,
  media_url,
  className,
  caption
}: PostType) => {
  return (
    <div className={cn('h-[100%] ', className)}>
      <Media media_type={media_type} media_url={media_url} className='h-[80%] drop-shadow-lg rounded-xl' />
      <div className='px-3 text-2xl text-black font-amatic backdrop-blur-sm font-bold'>
        {truncate(`${caption}`, 100)}
      </div>
    </div>
  )
};
const Article: NextPage = () => {
  const { data, loading, error }: ArticleFetch = useSelector(
    (state: AppState) => state.articles,
  );

  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  console.log('res ====================================');
  console.log({ data, loading, error });
  console.log('====================================');
  return (
    <Layout>
      <div className="pt-[14vh] min-h-[78vh]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:place-items-center gap-y-12 md:gap-y-12 md:gap-x-10  px-2 md:px-20 ">
          {data?.map((article, index) => (
            <Post key={index} className="" {...article} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Article;
