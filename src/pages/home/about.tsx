import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

function About() {
  return (
    <Box
      pt={5}
      sx={{
        background:
          "linear-gradient(to bottom, rgb(169, 242, 255) 0%, white 25%)",
      }}
    >
      <Container component="section" fixed maxWidth="lg">
        <Stack spacing={2}>
          <Typography
            component="h2"
            variant="h3"
            textAlign="center"
            position="relative"
            zIndex={1}
          >
            關於我們
          </Typography>
          <Stack spacing={2} textAlign="left">
            <Typography component="p" variant="body1">
              <Typography component="span" variant="h5">
                J-Studio
              </Typography>
              專注於提供優質的網站和平台規劃及製作服務，致力於為客戶提供可高度客製化、高品質、可靠且創新的解決方案。無論您需要建立形象官網、儀表板、管理平台、活動網頁、操控介面，還是其他類型的內容，我們都能夠根據您的需求和目標，為您提供優良的方案。
            </Typography>
            <Typography component="p" variant="body1">
              製作時除了視覺美感，也注重用戶體驗，讓您的網站和平台能夠讓用戶感受到舒適、直觀、易用，而技術部分皆優先挑選靈活且主流的的技術、框架和工具，確保您的網站和平台在技術及效能上保持領先地位。
            </Typography>
            <Typography component="p" variant="body1">
              宗旨為客戶創造價值，並建立良好的合作關係。如果您正在尋找一個可信賴的網站和平台設計工作室，歡迎聯繫我們，我們將竭誠為您提供優質的服務。
            </Typography>
            <Typography component="p" variant="body1">
              此外，如果您有需要，這裡也提供延伸的服務和資訊，包括伺服器、網域、部署、維護等。
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
