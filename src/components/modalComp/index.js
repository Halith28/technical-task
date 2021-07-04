import React, { useState } from "react";
import {
  Button,
  Grid,
  Modal,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  textField: {
    display: "inline-flex",
    width: "100%",
    marginTop: "20px",
    "& .MuiFormControl-root": {
      width: "90%",
    },
    "&:nth-child(even)": {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiFormControl-root": {
        width: "100%",
      },
      "&:nth-child(even)": {
        justifyContent: "center",
      },
    },
  },
  label: {
    width: "150px",
    alignSelf: "center",
  },
  formControl: {
    minWidth: 120,
  },
  paper: {
    padding: "20px 0px",
    backgroundColor: "#202020",
    boxShadow: "0px 6px 30px #0000003D",
    color: "#fff",
  },
  title: {
    display: "inline-flex",
    marginTop: 20,
    width: "100%",
  },
  modalHeader: {
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
  },
  modalBody: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  modalFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  closeButton: {
    position: "relative",
    float: "right",
    top: "10px",
    right: "10px",
    marginBottom: "-40px",
    padding: "2px",
    color: "#fff",
  },
}));

const ModalComp = (props) => {
  const classes = useStyles();
  const [Index, setIndex] = useState(0);

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item lg={4} md={4} sm={6} xs={10}>
          <IconButton
            className={classes.closeButton}
            onClick={props.handleClose}
          >
            <Close />
          </IconButton>
          <Paper className={classes.paper}>
            <div className={classes.modalBody}>
              <Typography variant="h5" align="center">
                {Index === 0 ? "Warning!" : "Successfully Assigned"}
              </Typography>
              <div style={{ margin: "20px 0px" }}>
                <Typography variant="subtitle2" align="center">
                  {Index === 0
                    ? "Some accounts already have the profiles assigned to it. Assigning new profile will replace the existing one."
                    : "Profile has been successfully assigned to selected accounts."}
                </Typography>
              </div>
            </div>
            <div className={classes.modalFooter}>
              <Button
                variant="outlined"
                style={{
                  textTransform: "capitalize",
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: 0,
                  boxShadow: "0px 6px 30px #0000003D",
                  marginRight: 10,
                }}
                onClick={() => props?.handleClose()}
              >
                {Index === 0 ? "Cancel" : "Close"}
              </Button>
              {Index === 0 && (
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: "capitalize",
                    borderRadius: 0,
                    backgroundColor: "#00AEEF",
                  }}
                  onClick={() => setIndex(1)}
                >
                  Assign Profile
                </Button>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Modal>
  );
};

ModalComp.defaultProps = {
  open: false,
};

ModalComp.propTypes = {
  open: PropTypes.bool,
};

export default ModalComp;
