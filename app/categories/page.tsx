import { CatCard } from "@/components/ui/CatCard";
import CustomCardLayout from "@/components/ui/CustomCardLayout";
import { Separator } from "@/components/ui/separator";
import { Ellipsis } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ExploreOtherCat from "@/components/ExploreOtherCat";

const page = () => {
  const cardData = [
    {
      id: 1,
      image: "/advert6.png",
      date: "Apr 17, 2022",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 2,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 3,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 4,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 5,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 6,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 7,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 7,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 7,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
    {
      id: 7,
      image: "/advert6.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "First Card Title",
      description: "More Episodes",
    },
  ];
  const cardData2 = [
    {
      id: 1,
      image: "/catOne.png",
      date: "Apr 17, 2022",
      time: "10:45 AM",
      title: "News & Storytelling",
      description: "More Episodes",
    },
    {
      id: 2,
      image: "/catEntertainment.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "Entertainment & Lifestyle",
      description: "More Episodes",
    },
    {
      id: 3,
      image: "/catTsb.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "Tech,Sport & Business",
      description: "More Episodes",
    },
    {
      id: 4,
      image: "/catOthers.png",
      date: "Apr 17",
      time: "10:45 AM",
      title: "Other podcasts",
      description: "More Episodes",
    },
  ];
  return (
    <>
      <CustomCardLayout>
        <div className="mt-20">
          <h1 className="text-lg text-[#5A5A5A] font-bold">ALL PODCASTS</h1>
        </div>
        <Separator />
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span>
              Sort by : <span className="font-medium">Popular</span>
            </span>
            <Ellipsis fontWeight={600} />
          </div>
          <div className="h-[18px] bg-gray-400 w-[2px]"></div>
          <div>
            <div className="flex items-center gap-2">
              <span>
                Sort by category : <span>All</span>
              </span>
              <Ellipsis fontWeight={600} />
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap gap-6">
          {cardData.map((item) => (
            <CatCard
              key={item.id}
              title={item.title}
              image={item.image}
              date={item.date}
              description={item.description}
              time={item.time}
            />
          ))}
        </div>
        <div className="mb-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <Separator />
        <div className="mt-10 mb-15 flex flex-col gap-4">
          <h1 className="text-lg text-[#5A5A5A] font-bold">
            Explore Other Categories
          </h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {cardData2.map((category) => (
              <ExploreOtherCat {...category} key={category.id} />
            ))}
          </div>
        </div>
      </CustomCardLayout>
    </>
  );
};

export default page;
