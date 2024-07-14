/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_5 from '../../assets/program-5.png'
import program_6 from '../../assets/program-6.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
        <img src = {program_1} alt=""/>
        <p>Graduates Deploma</p>
        </div>
        <div className="program">
        <img src = {program_2} alt=""/>
        <p>Graduates Deploma</p>
        </div>
        <div className="program">
        <img src = {program_3} alt=""/>
        <p>Graduates Deploma</p>
        </div>
        <div className="program">
        <img src = {program_4} alt=""/>
        <p>Graduates Degree</p>
        </div> 
        <div className="program">
        <img src = {program_5} alt=""/>
        <p>Graduates Degree</p>
        </div> 
        <div className="program">
        <img src = {program_6} alt=""/>
        <p>Graduates Degree</p>
        </div>  
    </div>
  )
}

export default Programs
