import { NextPage } from 'next';
import React, { useEffect } from 'react';
import type { ArticleFetch } from '@types';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import type { AppState, AppThunkDispatch } from '~store/index';
import { fetchArticles } from '~store/sliceArticle';
import { cn, truncate } from '~lib/utils';
import { DEBUG } from '~lib/constants';

interface PostType {
  id?: string;
  media_type: string;
  media_url: string;
  caption?: string;
  className?: string;
}

const Media = ({ media_type, media_url, className }: PostType) => {
  switch (media_type) {
    case 'VIDEO':
      return (
        <>
          <video
            className={cn('aspect-[4/2] object-contain', className)}
            height="auto"
            src={media_url}
            // @ts-ignore
            type="video/mp4"
            controls
            playsInline
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

const Post = ({ media_type, media_url, className, caption }: PostType) => {
  return (
    <div className={cn( className)}>
      <Media
        media_type={media_type}
        media_url={media_url}
        className="w-full drop-shadow-lg rounded-xl"
      />
      <div className="px-3 text-2xl text-black font-amatic backdrop-blur-sm font-bold">
        {truncate(`${caption}`, 90)}
      </div>
    </div>
  );
};
const LoadingSkeleton = () => (
  <div className="border shadow rounded-xl p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex flex-col space-y-2">
      <div className="rounded-lg bg-slate-700 h-44 w-full"></div>
      {/* two lines at the bottom */}
      <div className="space-y-1 py-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
      {/* two lines at the bottom */}
    </div>
  </div>
);

const ErrorMessage = ({ error }: { error: any}) => (
  <div className='flex justify-center items-center h-[75vh] w-full'>
    <div className='bg-white p-4 rounded-md'>
      {DEBUG ? 'ERROR ' +  error : 'Something went wrong!'}
    </div>
  </div>
);

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
              [0,1,2,3,4,5].map((el, index) => <LoadingSkeleton key={index} />)
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
