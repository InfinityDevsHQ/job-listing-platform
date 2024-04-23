import Image from "next/image";
import PaginationHeader from "./pagination-header";
import { ReactElement, ReactNode } from "react";

type PaginationProps = {
  posterLink?: string;
  posterHeight?: number;
  posterWidth?: number;
  pageTitle?: string;
  component?: ReactElement | ReactNode;
};
export default function PagePagination({
  posterLink,
  posterHeight,
  posterWidth,
  pageTitle,
  component,
}: PaginationProps) {
  return (
    <div className="grid grid-cols-2 w-full">
      {posterLink && (
        <div className="hidden lg:flex items-center justify-center col-span-2 lg:col-span-1">
          <Image
            src={posterLink}
            alt="Poster"
            height={posterHeight}
            width={posterWidth}
          />
        </div>
      )}
      <div className="flex justify-center flex-col gap-4 w-full col-span-2 lg:col-span-1">
        {pageTitle && <PaginationHeader title={pageTitle} />}
        {component}
      </div>
    </div>
  );
}
