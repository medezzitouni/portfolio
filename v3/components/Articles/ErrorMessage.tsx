import { DEBUG } from '~lib/constants';

export default ({ error }: { error: any}) => (
    <div className='flex justify-center items-center h-[75vh] w-full'>
      <div className='bg-white p-4 rounded-md'>
        {DEBUG ? 'ERROR ' +  error : 'Something went wrong!'}
      </div>
    </div>
  );