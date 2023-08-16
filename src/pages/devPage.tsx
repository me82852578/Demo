import { Box, Button, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function DevPage() {
  const { pid } = useParams();

  return (
    <Container sx={{ pt: 10 }}>
      <Box>DevPage - {pid}</Box>
      <Button component={Link} to="/">
        Back to Home
      </Button>
    </Container>
  );
}
