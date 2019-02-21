import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";

const ChatItem = ({selected, id, title}) => {
  return (
    <Fragment>
      <ListItem
        selected={selected}
      >
        <Link to={`/chat/${id}`}>
          <ListItemText>
            {title}
          </ListItemText>
        </Link>
      </ListItem>
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