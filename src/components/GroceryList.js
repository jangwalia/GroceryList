import React from 'react'

import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: 500,
}));

function GroceryList({groceryList, handleDelete}) {
  const dense = false;
  function generate(element) {
    return groceryList.map((value) =>
      React.cloneElement(element, {
        key: value.id,
        children: (
          <>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={value.title} />



          </>
        ),
        secondaryAction: React.cloneElement(element.props.secondaryAction, {
          onClick: () => handleDelete(value.id),
        }),

      }),
    );
  }


  return (

   <Demo>
       <List dense={dense}>
       {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon/>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={groceryList.title}

                  />
                </ListItem>,
              )}
        </List>
    </Demo>

  // <ul>{groceryListItems}</ul>
  )
}

export default GroceryList
