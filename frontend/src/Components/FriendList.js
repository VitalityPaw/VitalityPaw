// FriendList.js
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const FriendList = ({ friends, onFriendClick }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {friends.map((friend) => (
        <Avatar
          key={friend.number}
          alt={friend.name}
          src={friend.avatar}
          style={{ margin: '8px', cursor: 'pointer' }}
          onClick={() => onFriendClick(friend)}
        />
      ))}
    </Box>
  );
};

export default FriendList;
