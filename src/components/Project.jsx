import React from 'react';
import Header from './shared/Header';

import AllProject from './AllProject';

const Project = () => {
    return (
        <div id='project'>
            <Header subtitle={"MY PROJECTS"} title={"What are my Projects?_ "}></Header>
            <AllProject></AllProject>
        </div>
    );
};

export default Project;