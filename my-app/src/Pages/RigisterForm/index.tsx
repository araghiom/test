import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Typography from "@mui/material/Typography";
import Form from "./Form";


const RegisterForm = (props: any) => {

   
  return (
    <>
      
        <Container component="main" maxWidth="sm">
          <CssBaseline>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Avatar
                sx={{
                  m: 2,
                  bgcolor: "secondary.main",
                  width: 100,
                  height: 100,
                }}>
                <AssignmentIcon />
              </Avatar>
              <Typography component="h1" variant="h3">
                Rigister
              </Typography>
              <Form />
            </Box>
          </CssBaseline>
        </Container>
     
    </>
  );
};





export default RegisterForm;
