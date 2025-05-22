import React from "react";

import { CreateFile } from "./CreateFile";
import { Header } from "./Header";

import './CreatePage.css'

function CreatePage() {
    return (
        <div className="CreatePage">
            <Header />
            <CreateFile className='CreateFile' />
        </div>
    );
    }

export default CreatePage;