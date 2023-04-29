import { useContext } from "react";

import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Archive = ({ note }) => {
  const { notes, setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const unarchiveNote = (note) => {
    const updateNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updateNotes);
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = (note) => {
    const updateNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updateNotes);
    setDeletedNotes((prev) => [note, ...prev]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <UnarchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => unarchiveNote(note)}
        />
        <DeleteOutlineOutlinedIcon
          fontSize="small"
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
