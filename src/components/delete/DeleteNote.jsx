import { useContext } from "react";

import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const DeleteNote = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, deletedNotes, setDeletedNotes } =
    useContext(DataContext);

  const restoreNote = (note) => {
    const updateNotes = deletedNotes.filter((data) => data.id !== note.id);
    setDeletedNotes(updateNotes);
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = (note) => {
    const updateNotes = notes.filter((data) => data.id !== note.id);
    setDeletedNotes(updateNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
      <DeleteForeverOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => deleteNote(note)}
        />
        <RestoreFromTrashOutlinedIcon
          fontSize="small"
          onClick={() => restoreNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
