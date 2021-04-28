import './style.css';
import BioCard from '../bio-card/';

import Ferguson from '../../assets/img/Ferguson.jpg'
import Payne from '../../assets/img/Payne.jpg'
import Mitchell from '../../assets/img/Mitchell.jpg'

const textForMitchell = "Ms. Mitchell is so fun and bubbly that no one would guess that she has been teaching for 27 years. She has taught upper elementary Singapore Math for the past 14 years and been at the same leading private school of the southeast for 24 years. Her specialty is making long division, multiple digit multiplication, fractions, and multi-step word problems seem like a piece of cake!  She holds a BS in Elementary Education from the University of Central Florida."
const textForPayne = "Ms. Payne brings her smile and her 16 years teaching experience to every class. She has taught lower elementary grades ( K to 2nd grade) at a leading private school in Florida for the past 8 years. Ms. Payne holds a BA and MA in Education from the University of Texas at Austin. Her favorite subjects are math, reading, and science! Her dog Hattie may also make an appearance in class!"
const textForFerguson = "As a certified teacher of gifted and elementary education, Ms. Ferguson has been teaching for 25 years in grades 1-6 and could not imagine doing anything else. She currently teaches at a top private school. She holds a BA in Elementary Education from University of West Florida and did her graduate work in gifted education. She is very happily married and proud of her two daughters: a dental school student at Tufts University and a recent graduate from Auburn University."

const Block7 = () =>{
  return <>
  <div className="container block-7">
    <h2>Featured Singapore Math Teachers</h2>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 block-7__card">
        <BioCard image={Ferguson} text={textForFerguson} title="Ms. Ferguson" />
      </div>
      <div className="col-12 col-md-6 col-lg-4 block-7__card">
        <BioCard image={Payne} text={textForPayne} title="Ms. Payne"/>
      </div>
      <div className="col-12 col-md-6 col-lg-4 bio block-7__card">
        <BioCard image={Mitchell} text={textForMitchell} title="Ms. Mitchell" />
      </div>
    </div>
  </div>
  </>
}

export default Block7