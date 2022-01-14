import {Typography} from '@mui/material';
import React from 'react';

const PageTitle: React.FC<{title: string}> = ({title}) => (<Typography variant="h2">{title}</Typography>)

export default PageTitle