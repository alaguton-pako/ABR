import PodcastControl from "./PodCastControl";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { PulsatingDot } from "./ui/PulsatingDot";
import CustomIcon from "./ui/CustomIcon";
import PlayButton from "./ui/PlayButton";
import Link from "next/link";

const NavLayerTwo = () => {
  const { currentEpisodeId } = useSelector((state: RootState) => state.player);
  const showPodcastControl = !!currentEpisodeId;
  return (
    <div>
      {/* Top Section */}
      <div className="w-full h-26 md:h-16 md:pr-6 bg-black">
        <div className="grid grid-cols-12 items-center h-full md:gap-4">
          {/* Left section */}
          <div
            className="w-full col-span-12 md:col-span-5 relative bg-cover bg-center overflow-hidden h-26 md:h-16"
            style={{
              backgroundImage: "url('/bgImage1.png')",
            }}
          >
            {/* Faint black overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />
            {/* Content centered vertically */}
            <div className="relative z-10 w-full h-full p-2 lg:p-4 flex items-center">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                {showPodcastControl ? (
                  <PodcastControl />
                ) : (
                  <div className="flex items-center gap-4">
                    <PlayButton />
                    <div className="flex flex-col">
                      <p className="text-xs lg:text-sm font-semibold text-white">
                        Listen to ABR Live Radio
                      </p>
                      <div className="flex items-center gap-2">
                        <PulsatingDot className="h-[12px] w-[12px]" />
                        <p className="text-xs text-[#9CCC65] font-semibold">
                          ON AIR
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 text-white hover:text-[#9CCC65] cursor-pointer transition-colors">
                  <CustomIcon src="/schedule.png" height={20} width={20} />
                  <p className="text-xs font-medium">View schedules</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="col-span-12 bg-black md:col-span-7 w-full md:bg-inherit">
            <div className="p-3 flex ml-1 md:p-0 gap-8 xl:ml-[18rem] ">
              <div className="w-full flex flex-col justify-center gap-2 md:flex md:flex-row items-center md:gap-6">
                <div className="hidden md:block h-5 w-[2px] bg-white"></div>
                {[
                  { icon: "/latestNews.png", text: "Latest News", link: "/" },
                  {
                    icon: "/microphone.png",
                    text: "New Episodes",
                    link: "/",
                  },
                  { icon: "/services.png", text: "Our Services", link: "/" },
                  {
                    icon: "/podcast.png",
                    text: "All Podcast",
                    link: "/categories",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex md:flex-col lg:flex-row items-center gap-2 cursor-pointer hover:text-[#9CCC65] text-white transition-colors"
                  >
                    <CustomIcon src={item.icon} height={18} width={18} />
                    <Link href={item.link}>
                      <span className="text-xs font-medium">{item.text}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLayerTwo;
