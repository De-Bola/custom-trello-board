import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { CardHeader, IconButton } from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const CardContainer = styled.div`
margin-bottom: 10px;
`;



const TrelloCard = ({ text, id, index, closeAction }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card>
            <CardHeader style={{padding: 0}} action={<IconButton style={{height: 10}}>
              <CancelRoundedIcon onClick={closeAction}></CancelRoundedIcon></IconButton>}/>
            <CardContent>
              <Typography gutterBottom >
                {text}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;