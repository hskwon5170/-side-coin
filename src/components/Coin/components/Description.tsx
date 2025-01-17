import React, { Dispatch, SetStateAction } from "react";
import { BottomLayout } from "../../commons/BottomLayout/BottomLayout";

interface DescriptionProps {
  desc: string;
  onClick?: () => void;
  limit?: number;
  setLimit?: Dispatch<SetStateAction<number>>;
}

export const Description = ({
  desc,
  onClick,
  limit,
  setLimit,
}: DescriptionProps) => {
  const onClickMore = (str: string) => {
    setLimit?.(str.length);
  };

  const onClickClose = () => {
    setLimit?.(300);
  };

  const toggleEllipsis = (str: string, limit?: number) => {
    const slicedText = str.slice(0, limit);
    return {
      Elements: str.length > limit! ? `${slicedText}…` : slicedText,
      isShowMore: str.length > limit!,
    };
  };

  return (
    <BottomLayout title="About">
      <div>
        <div
          className="sm:max-w-[93%]"
          dangerouslySetInnerHTML={{
            __html: toggleEllipsis(desc ?? "", limit as number).Elements,
          }}
        />
        {/* <div className="linear-gradient w-full bottom-10">1</div> */}
        <span>
          {toggleEllipsis(desc ?? "", limit as number).isShowMore ? (
            <div
              className="text-[#4ffae5]  cursor-pointer hover:text-opacity-50 hover:text-[#4ffae5] hover:transition-all hover:duration-300"
              onClick={() => onClickMore(desc ?? "")}
            >
              Show more
            </div>
          ) : (
            <div
              className="text-[#4ffae5]  cursor-pointer hover:text-opacity-50 hover:text-[#4ffae5] hover:transition-all hover:duration-300"
              onClick={onClickClose}
            >
              Hide
            </div>
          )}
        </span>
      </div>
    </BottomLayout>
  );
};
