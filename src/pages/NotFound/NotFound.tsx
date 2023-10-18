import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import RouterPaths from '../../router/router-types';

export default function NotFound() {
  return (
    <>
      <h1>Nice try!</h1>
      <Button component={Link} to={RouterPaths.Home}>
        Go Back
      </Button>
    </>
  );
}
