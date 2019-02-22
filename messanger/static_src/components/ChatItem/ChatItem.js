import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";


const ListItemLink = ({to, ...props}) => (
  <ListItem button component={Link} to={to} {...props}/>
  )
;

const ChatItem = ({selected, id, title, img}) => {
  return (
    <Fragment>
        <ListItemLink to={`/chat/${id}`} selected={selected}>
          <ListItemAvatar>
            <Avatar src={img}/>
          </ListItemAvatar>
          <ListItemText>
            {title}
          </ListItemText>
        </ListItemLink>
      <Divider/>
    </Fragment>
  )
};

ChatItem.propTypes ={
  selected: PropTypes.bool,
  id: PropTypes.number,
  title: PropTypes.string
};

export default ChatItem;