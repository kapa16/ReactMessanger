import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {changeChatId} from "../../redux/actionsCreator/messageActionsCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

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
          <ListItemText>
            {title} ({countMessages})
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

const mapDispatchToProps = (dispatch) => bindActionCreators({changeChatId}, dispatch);

export default connect(null, mapDispatchToProps)(ChatItem);