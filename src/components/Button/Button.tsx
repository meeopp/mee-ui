import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

type ButtonProps = {
  text: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const MeeUIButton = ({ text, onClick }: ButtonProps) => {
  const classes = useStyles();
  return <Button className={classes.button} onClick={onClick}>
    {text}
  </Button>
}
