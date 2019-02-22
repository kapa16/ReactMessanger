import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const ListItemLink = ({to, ...props}) => (
  <ListItem button component={Link} to={to} {...props}/>
  )
;

const ChatItem = ({selected, id, title}) => {
  return (
    <Fragment>
        <ListItemLink to={`/chat/${id}`} selected={selected}>
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