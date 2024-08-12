import React from "react";
import SmallBedIcon from "@/assets/icons/SmallBedIcon";
import SmallBathTabIcon from "@/assets/icons/SmallBathTabIcon";
import SmallParkingIcon from "@/assets/icons/SmallParkingIcon";
import SmallAreaIcon from "@/assets/icons/SmallAreaIcon";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import Image from "next/image";
import BackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const ProductDetailCard = (props) => {
  const {
    image,
    title,
    loc,
    homeDetail,
    bedrooms,
    bathrooms,
    area,
    parking,
    detailType,
  } = props;
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0px 20px 40px 0px #CDCDCD40",
      }}
    >
      <CardMedia sx={{ height: 384, position: "relative" }}>
        <Box>
          <Stack
            width={"163px"}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"row"}
            backgroundColor={"secondary.main"}
            color="common.white"
            sx={{
              borderBottomRightRadius: "10px",
              position: "absolute",
              zIndex: 9,
              height: '38px'
            }}
            gap={1}
          >
            <Typography
              fontSize={{ xs: "16px" }}
              fontWeight={500}
              variant="subtitle1"
            >
              {detailType}
            </Typography>
            <BackspaceIcon />
          </Stack>
        </Box>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </CardMedia>
      <CardContent>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            className="font-montserrat"
            color={"common.black"}
            textTransform={"capitalize"}
            gutterBottom
            variant="subtitle1"
            component="h3"
            fontSize={{ xs: "26px" }}
            fontWeight={500}
          >
            {title}
          </Typography>
          <Chip
            label={loc}
            sx={{
              color: "secondary.main",
              backgroundColor: "#F44A511A",
            }}
          />
        </Stack>
        <Typography
          fontSize={{ xs: "14px" }}
          fontWeight={400}
          variant="subtitle2"
          color="text.secondary"
        >
          {homeDetail}
        </Typography>
        <Divider sx={{ my: 1, mt: 2 }} />
        <Stack direction={"row"} gap={1}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Box
              sx={{
                bgcolor: "common.lightGrayBg",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <SmallBedIcon />
            </Box>
            <Typography
              fontSize={{ xs: "14px" }}
              fontWeight={400}
              variant="subtitle1"
              color="text.secondary"
            >
              {bedrooms}
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Box
              sx={{
                bgcolor: "common.lightGrayBg",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <SmallBathTabIcon />
            </Box>
            <Typography
              fontSize={{ xs: "14px" }}
              fontWeight={400}
              variant="subtitle1"
              color="text.secondary"
            >
              {bathrooms}
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Box
              sx={{
                bgcolor: "common.lightGrayBg",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <SmallParkingIcon />
            </Box>
            <Typography
              fontSize={{ xs: "14px" }}
              fontWeight={400}
              variant="subtitle1"
              color="text.secondary"
            >
              {parking}
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Box
              sx={{
                bgcolor: "common.lightGrayBg",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <SmallAreaIcon />
            </Box>
            <Typography
              fontSize={{ xs: "14px" }}
              fontWeight={400}
              variant="subtitle1"
              color="text.secondary"
            >
              {area}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductDetailCard;
