import { PostType } from "@types";
import { cn, truncate } from "~lib/utils";
import { Media } from ".";



export default ({ media_type, media_url, className, caption }: PostType) => {
    return (
      <div className={cn( className)}>
        <Media
          media_type={media_type}
          media_url={media_url}
          className="w-full drop-shadow-lg rounded-xl"
        />
        <div className="px-3 text-2xl text-black font-amatic backdrop-blur-sm font-bold">
          {truncate(`${caption}`, 90)}
        </div>
      </div>
    );
  };