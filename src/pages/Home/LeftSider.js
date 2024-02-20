import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-1 sm:flex-row sm:pb-5 pb-0">
          <a href="https://google.com">
            <i class="ri-facebook-circle-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          </a>

          <i class="ri-mail-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          <i class="ri-linkedin-box-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          <i class="ri-instagram-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          <i class="ri-github-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
        </div>
        <div className="w-[1px] h-32 bg-[#1a6269] sm:hidden block"></div>
      </div>
    </div>
  );
}

export default LeftSider;
