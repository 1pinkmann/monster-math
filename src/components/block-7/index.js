import './style.css';
import BioCard from '../bio-card/';

const textForFerguson = "Ms. Mitchell is so fun and bubbly that no one would guess that she has been teaching for 27 years. She has taught upper elementary Singapore Math for the past 14 years and been at the same leading private school of the southeast for 24 years. Her specialty is making long division, multiple digit multiplication, fractions, and multi-step word problems seem like a piece of cake!  She holds a BS in Elementary Education from the University of Central Florida."
const textForPayne = "Ms. Payne brings her smile and her 16 years teaching experience to every class. She has taught lower elementary grades ( K to 2nd grade) at a leading private school in Florida for the past 8 years. Ms. Payne holds a BA and MA in Education from the University of Texas at Austin. Her favorite subjects are math, reading, and science! Her dog Hattie may also make an appearance in class!"
const textForMitchell = "As a certified teacher of gifted and elementary education, Ms. Ferguson has been teaching for 25 years in grades 1-6 and could not imagine doing anything else. She currently teaches at a top private school. She holds a BA in Elementary Education from University of West Florida and did her graduate work in gifted education. She is very happily married and proud of her two daughters: a dental school student at Tufts University and a recent graduate from Auburn University."

const Block7 = () =>{
  return <>
  <div className="container block-7">
    <h2>Featured Instructors and Coaches:</h2>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        <BioCard backgroundImageClass="Ferguson-bio" text={textForFerguson} />
        <h4>Ms. Ferguson</h4>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <BioCard backgroundImageClass="Payne-bio" text={textForPayne}/>
        <h4>Ms. Payne</h4>
      </div>
      <div className="col-12 col-md-6 col-lg-4 bio">
        <BioCard backgroundImageClass="Mitchell-bio" text={textForMitchell}/>
        <h4>Ms. Mitchell</h4>
      </div>
    </div>
  </div>
  </>
}

export default Block7