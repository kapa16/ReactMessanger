import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addChat, inputChatTitle, openCloseAddChatMenu } from "../../redux/actionsCreator/messageActionsCreator";

const NewChatForm = ({ open, inputChatTitle, openCloseAddChatMenu, addChat }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={openCloseAddChatMenu}
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
            onChange={(e) => inputChatTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={openCloseAddChatMenu} color="primary">
            Cancel
          </Button>
          <Button onClick={addChat} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { openAddChatForm } = state.messageReducer;
  return {
    open: openAddChatForm,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openCloseAddChatMenu, inputChatTitle, addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewChatForm);