import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function Tree() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
    >
      <TreeItem nodeId="1" label="Banco Do Brasil">
        <TreeItem nodeId="2" label="TODO" />
        <TreeItem nodeId="3" label="TODO" />
        <TreeItem nodeId="4" label="TODO" />
      </TreeItem>
      <TreeItem nodeId="5" label="Bradesco">
        <TreeItem nodeId="6" label="TODO" />
        <TreeItem nodeId="7" label="TODO"/>
      </TreeItem>
      <TreeItem nodeId="8" label="Itaú">
        <TreeItem nodeId="9" label="TODO" />
        <TreeItem nodeId="10" label="TODO"/>
      </TreeItem>
    </TreeView>
  );
}
