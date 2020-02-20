import React from 'react';
import {Typography} from "@material-ui/core";
import withPage from "../Page/Page";

const Projects = () => {
    return (
        <Typography variant="h2" gutterBottom>
            Projects
        </Typography>
    );
};

export default withPage(Projects);