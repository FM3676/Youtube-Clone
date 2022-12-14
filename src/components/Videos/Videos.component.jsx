import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard.component";
import ChannelCard from "../ChannelCard/ChannelCard.component";
import Loader from "../Loader";

const Videos = ({ videos, direction = "row", justifyContent = "start" }) => {
if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent={justifyContent}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
