import React, {Fragment} from 'react';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeChatId} from "../../redux/actionsCreator/messageActionsCreator";
import {bindActionCreators} from "redux";
import { push } from 'connected-react-router';
import {ListItem, ListItemText, Divider, ListItemAvatar, Avatar, Badge} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import './ChatItem.sass';

const styles = {
  root: {
    width: '100%',
    cursor: 'pointer',
  },
  badge: {
    bottom: '0',
    right: '20px',
    top: 'auto',
  },
};

const ChatItem = ({ hasNewMessage, countMessages, selected, id, title, img, changeChatId, classes, push }) => {
  return (
    <Fragment>
      <Badge
          classes={{root: classes.root, badge: classes.badge}}
          badgeContent={countMessages}
          color="primary"
      >
        <ListItem
          className={hasNewMessage ? "height-light" : ""}
          selected={selected}
          onClick={() => {
            changeChatId(id);
            push(`/chat/${id}`);
          }}
        >
          <ListItemAvatar>
            <Avatar src={img}/>
          </ListItemAvatar>
          <ListItemText>
            {title}
          </ListItemText>
        </ListItem>
      </Badge>
      <Divider/>
    </Fragment>
  )
};

ChatItem.propTypes = {
  countMessages: PropTypes.number,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  changeChatId: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators({changeChatId, push}, dispatch);

export default connect(null, mapDispatchToProps)(withStyles(styles)(ChatItem));