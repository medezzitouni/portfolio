import { PostType } from "@types";
import { cn } from "~lib/utils";


export default ({ media_type, media_url, className }: PostType) => {
    switch (media_type) {
      case 'VIDEO':
        return (
          <>
            <video
              className={cn('aspect-[4/2] object-contain', className)}
              height="auto"
              src={media_url}
              // @ts-ignore
              type="video/mp4"
              controls
              playsInline
            ></video>
          </>
        );
      default:
        return (
          <>
            <img
              className={cn('aspect-[4/2] object-cover', className)}
              height="auto"
              src={media_url}
            />
          </>
        );
    }
  };