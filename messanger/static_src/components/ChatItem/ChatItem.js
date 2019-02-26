import React, {Fragment} from 'react';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeChatId} from "../../redux/actionsCreator/messageActionsCreator";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {ListItem, ListItemText, Divider, ListItemAvatar, Avatar, Badge} from "@material-ui/core";

const ListItemLink = ({to, ...props}) => (
    <ListItem button component={Link} to={to} {...props}/>
  )
;

const ChatItem = ({countMessages, selected, id, title, img, changeChatId}) => {
  return (
    <Fragment>
      <ListItemLink
        to={`/chat/${id}`}
        selected={selected}
        onClick={() => changeChatId(id)}
      >

        <ListItemAvatar>
          <Avatar src={img}/>
        </ListItemAvatar>

        <Badge badgeContent={countMessages} color="primary">
          <ListItemText>
            {title}
          </ListItemText>
        </Badge>

      </ListItemLink>
      <Divider/>
    </Fragment>
  )
};

ChatItem.propTypes = {
  selected: PropTypes.bool,
  id: PropTypes.number,
  title: PropTypes.string
};

const mapDispatchToProps = (dispatch) => bindActionCreators({changeChatId}, dispatch);

export default connect(null, mapDispatchToProps)(ChatItem);