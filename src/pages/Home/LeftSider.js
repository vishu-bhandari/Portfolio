import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10'>
     <div className="flex flex-col items-center">
     <div className="flex flex-col gap-1">
      <i class="ri-facebook-circle-line text-gray-400 text-xl"></i>
      <i class="ri-mail-line text-gray-400 text-xl"></i>
      <i class="ri-linkedin-box-line text-gray-400 text-xl"></i>
      <i class="ri-instagram-line text-gray-400 text-xl"></i>
      <i class="ri-github-line text-gray-400 text-xl"></i>
      </div>
      <div className='w-[1px] h-32 bg-[#1a6269]'>

      </div>
     </div>
    </div>
  )
}

export default LeftSider