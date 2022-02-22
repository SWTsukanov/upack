import React from "react";

import OMenuFooter from '../organism/O_MenuFooter';
import OMenuHeader from '../organism/O_MenuHeader';
import OContactsList from '../organism/O_ContactsList';
import OAboutQuestions from '../organism/O_AboutQuestions';
import MUniquePack from '../molecule/M_UniquePack';
import OProductList from '../organism/O_ProductList';
import MDescription from '../molecule/M_Description';
import MAbout from '../molecule/M_About';
import MForm from '../molecule/M_Form';

const Landing = () => {
    return (
        <>
            <OMenuHeader />

            <MAbout />
            <MForm />
            <MDescription />
            <OProductList />

            <MUniquePack />
            <OAboutQuestions />

            <OContactsList />
            <OMenuFooter />
        </>
    )
}

export default Landing;