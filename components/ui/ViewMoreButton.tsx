import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ViewMoreButton = () => {
  return (
    <Button
      asChild
      className="bg-inherit text-blue-400 border rounded-full hover:bg-[#ffff] hover:text-black "
    >
      <Link href="/categories">
        View All
        <ChevronRight className="ml-1" size={16} />
      </Link>
    </Button>
  );
};

export default ViewMoreButton;
