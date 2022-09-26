import './Introduction.css';
import React from 'react';
import ahoj from '../assets/ahoj.png';
import laurenciaPhoto from '../assets/laurenciaPhoto.png';
import educationTitle from '../assets/educationTitle.png';
import languageTitle from '../assets/languageTitle.png';
import languages from '../assets/languageSkills.png';
import skills from '../assets/skills.png';
import fellas from '../assets/fellas.png'
import iLike from '../assets/iLike.png';
import office from '../assets/office.png';

function Introduction() {
    return (
        <div className='Introduction'>
            <div className='left-col'>
                <div className='introduction-left-top'>
                    <img src={ahoj} alt='ahoj' className='ahojImage'/>
                </div>
                <div className='introduction-left-bottom'>
                    <div className='education-wrapper'>
                       <div className='education-title'>
                            <img src={educationTitle} alt='educationTitle' />
                        </div> 
                        <div className='education-text-wrapper'>
                            <p className='flex-child'>SEP 2021 - PRESENT University College of Northern Denmark - Aalborg: Design, Technology and Business</p>
                            <p className='flex-child'>SEP 2017 - JUN 2021 Samuel Mikovini Secondary Industrial School - Banská Štiavnica, Slovakia: Promotional Art</p>
                        </div>
                    </div>
                    <div className='languages-skills-wrapper'>
                        <div className='language-wrapper'>
                            <img src={languageTitle} alt='languageTitle' />
                            <img src={languages} alt='languages' className='languagesImage'/>
                        </div>
                        <div className='skills-wrapper'>
                            <img src={skills} alt='skills' className='skillsTitle'/>
                            <p>fellas</p>
                            <img src={fellas} alt='fellas' className='skillsImg' />
                            <p>ik how to do nice things with it</p>
                            <img src={iLike} alt='iLike' className='skillsImg' />
                            <p>please no</p>
                            <img src={office} alt='office' className='office' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-col'>
                <img src={laurenciaPhoto} alt='laurencia' />
            </div>
        </div>
    )
}

export default Introduction;