import { styled, Typography } from "@mui/material";
export const LineUpTypography = styled(Typography)`
    color: black;
    animation: 2s anim-lineUp ease-out;
    @keyframes anim-lineUp {
      0% {
        opacity: 0;
        transform: translateY(80%);
      }
      20% {
        opacity: 0;
      }
      50% {
        opacity: 1;
        transform: translateY(0%);
      }
      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  `