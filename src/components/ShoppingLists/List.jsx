import React from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const List = ({ list, onDelete, onComplete }) => {
  const completed = {
    textDecoration: list.completed ? 'line-through' : '',
  };

  return (
    <li style={completed}>
      <p>{list?.name}</p>
      <span onClick={() => onComplete(list?.id)}>
        {list?.completed ? (
          <CheckCircleOutlineOutlinedIcon />
        ) : (
          <BorderColorOutlinedIcon />
        )}
      </span>
      <span onClick={() => onDelete(list?.id)}>
        <HighlightOffOutlinedIcon />
      </span>
    </li>
  );
};

export default List;
