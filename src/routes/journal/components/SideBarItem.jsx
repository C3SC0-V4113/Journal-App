import { useMemo } from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import TurnedInNot from "@mui/icons-material/TurnedInNot";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { setActiveNote } from "../../../store";
import { useNavigate } from "react-router-dom";

export const SideBarItem = ({
  title = "",
  body = "",
  id = "",
  date,
  imageUrls = [],
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const onClickNote = () => {
    navigate(`/note/${id}`);
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
  };

  return (
    <ListItem disablePadding onClick={onClickNote}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container direction={"column"}>
          <ListItemText primary={newTitle} />
          <ListItemText
            sx={{
              width: 150,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            secondary={body}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};
