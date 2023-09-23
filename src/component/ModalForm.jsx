import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Divider} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name must be at least 5 characters")
    .max(30, "Name cannot exceed 30 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const initialValues = {
  name: "",
  email: "",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #00acc1",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ handleClose, open }) {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted values:", values);
    resetForm();
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              mb={1}
              component="h2"
              sx={{ textAlign: "center", color: "#00acc1" }}
            >
              Enter Your Information
            </Typography>
            <Divider />

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form style={{ marginTop: "1rem" }}>
                <div className="mb-2">
                  <label htmlFor="name" className="mainColor">Name:</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div>
                  <label htmlFor="email" className="mainColor">
                    Email:
                  </label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#00acc1",
                      "&:hover": { backgroundColor: "#00acc1" },
                      marginTop: "1rem",
                      width: "100%",
                    }}
                  >
                    Send
                  </Button>
                </div>
              </Form>
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
