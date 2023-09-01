import React from 'react'
import { QuillTextEditor} from '../components'

const DashBoard = () => {
  return (
    <div className='flex flex-col items-center gap-2 p-3 h-screen'>
    <div>
    <p className={"m-0  overflow-hidden truncate bg-black text-white rounded text-2xl lg:w-fit lg:p-4"}>
    Text Editor Example</p>
    </div>
    <QuillTextEditor />
    </div>
  )
}

export default DashBoard