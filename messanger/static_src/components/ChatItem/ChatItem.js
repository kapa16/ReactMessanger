import React, {Fragment} from 'react';
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const ChatItem = ({id, title}) => {

  const ListItemLink = (props) => <ListItem button component="a" {...props}/>;


  return (
    <Fragment>
      <ListItemLink href={`/chat/${id}`}>
        <ListItemText>
          {title}
        </ListItemText>
      </ListItemLink>
      <Divider/>
    </Fragment>

  )
};

export default ChatItem;