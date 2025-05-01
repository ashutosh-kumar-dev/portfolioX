import React from 'react';

const Divider = () => {
  return (
    <div>
        {/* design divider */}
        <div class="relative w-full max-w-[800px] my-8 mx-auto">
            <div class="overflow-hidden h-5 relative">
              <div class="w-full h-[25px] rounded-[125px/12px] shadow-[0_0_8px_#886fac] mt-[-25px]"></div>
            </div>
            <span class="absolute bottom-full mb-[-20px] left-1/2 ml-[-18px] w-[36px] h-[36px] rounded-full bg-blue-500 shadow-[0_2px_4px_#ab9ac4]">
              <i class="absolute top-[2px] right-[2px] bottom-[2px] left-[2px] rounded-full border border-dashed border-[#b7a8cd] text-center leading-[28px] not-italic text-white text-xl">
                ❃
              </i>
            </span>
          </div>
      
    </div>
  );
};

export default Divider;