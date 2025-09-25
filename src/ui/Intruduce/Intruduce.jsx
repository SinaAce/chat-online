import IntroGallery from "./IntroGallery";

const Intruduce = () => {
  return (
    <div className="h-screen">
      <IntroGallery />
      <div className="w-full h-14  bg-[#ECF9FF]"></div>
      <div className="w-full h-1/2 bg-[#C4EDFF] center-flex-col gap-20">
        <button className="w-5/6 p-4 rounded-[30px] text-white text-xl font-bold bg-[#03A9F4]">
          Get started
        </button>
        <div className="flex justify-between items-center w-10/12">
          <button className="text-[#3AB2E8] w-14 text-center">Skip</button>
          <div className="text-[#7FD7FF]">oooo</div>
          <button className="text-[#1B526B] bg-[#A7E4FF] rounded-full w-14 h-14">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intruduce;
