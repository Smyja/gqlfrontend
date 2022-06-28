import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Drawer,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import lo from "./attributes.js";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

interface HeaderSimpleProps {
  low: { link: string; label: string }[];
}

export function HeaderSimple({ low }: HeaderSimpleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState("");

  const { classes, cx } = useStyles();
  const linkos = lo[0].props.links;
  const items = linkos.map((link) => (
    
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        {/* <MantineLogo /> */}
        Relearn
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Drawer
          overlayOpacity={0.55}
          overlayBlur={3}
          opened={opened}
          onClose={() => toggleOpened(false)}
          position="top"
        >
          {/* Drawer content */}
          {items}
        </Drawer>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}