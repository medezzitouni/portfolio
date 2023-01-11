import { withRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { ComingSoonProps } from '@types'

const ComingSoon: FunctionComponent<ComingSoonProps> = ({ router, pathname=true }: ComingSoonProps) => {
  return (
    <div
        className="bg-inherit h-[100%] w-full flex gap-4 items-center justify-center "
    >
        <span className={`px-5 border-r-2 border-white ${pathname ? 'flex' : 'hidden'}` }>
            {router.pathname == '/' ? 'Home' : router.pathname.at(1)?.toUpperCase() + router.pathname.slice(2)} 
        </span>
        <span className=''>
            Coming Soon !
        </span>
    </div>
  )
}

export default withRouter(ComingSoon);