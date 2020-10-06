import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function GlobalNavi() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Menu>
            <Link href="/units">
              <MenuItem>
                <a>ユニット一覧</a>
              </MenuItem>
            </Link>
            <Button color="inherit">Login</Button>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const Menu = styled.div`
  margin-left: auto;
  display: flex;
`;
