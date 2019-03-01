import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {openAddChatMenu} from "../../redux/actionsCreator/messageActionsCreator";

const NewChatForm = ({open, openAddChatMenu}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={openAddChatMenu}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter chat title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Chat title"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={openAddChatMenu} color="primary">
            Cancel
          </Button>
          <Button onClick={openAddChatMenu} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {openAddChatForm} = state.messageReducer;
  return {
    open: openAddChatForm,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({openAddChatMenu}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewChatForm);