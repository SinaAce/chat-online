import intro1 from "../../assets/images/Intro/Image Introduce.svg";
import intro2 from "../../assets/images/Intro/Image Introduce1.svg";
import intro3 from "../../assets/images/Intro/Image Introduce2.svg";
import intro4 from "../../assets/images/Intro/Image Introduce3.svg";

const IntroGallery = () => {
  return (
    <div className="w-[500%] h-1/2 flex relative -left-[200%]">
      <div className="w-1/5 h-full text-[#1565C0] flex flex-col justify-around">
        <img src={intro1} alt="intro" />
        <div className="center-flex-col gap-2">
          <h2 className="text-xl font-bold">Group Chatting</h2>
          <span className="text-center text-sm">
            Connect with multiple members in <br />
            group chats.
          </span>
        </div>
      </div>
      <div className="w-1/5 h-full text-[#1565C0] flex flex-col justify-around">
        <img src={intro2} alt="intro" />
        <div className="center-flex-col gap-2">
          <h2 className="text-xl font-bold">Video and Voice Calls</h2>
          <span className="text-center text-sm">
            Instantly connect via video and voice calls.
          </span>
        </div>
      </div>
      <div className="w-1/5 h-3/4 mt-10 text-[#1565C0] flex flex-col gap-5 justify-around">
        <img src={intro3} alt="intro" />
        <div className="center-flex-col gap-2">
          <h2 className="text-xl font-bold">Message Encryption</h2>
          <span className="text-center text-sm">
            Ensure privacy with encrypted messages.
          </span>
        </div>
      </div>
      <div className="w-1/5 h-full text-[#1565C0] flex flex-col justify-around">
        <img src={intro4} alt="intro" />
        <div className="center-flex-col gap-2">
          <h2 className="text-xl text-center font-bold">
            Cross-Platform <br /> Compatibility
          </h2>
          <span className="text-center text-sm">
            Access chats on any device seamlessly.
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroGallery;
