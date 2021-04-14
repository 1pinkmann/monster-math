import './style.css';
import Cover1 from '../../assets/img/Cover-1.jpg';
import Cover2 from '../../assets/img/Cover-2.jpg';
import Cover3 from '../../assets/img/Cover-3.jpg';
import Quote from '../../assets/img/Quote.svg';

const Block9 = () => {
	return <>
		<div className="cover-bg">
			<img className="quote" src={Quote} alt="Teacher" />
			<div className="container block-9">
				<h2 className="block-9__title">Parent Reviews</h2>
				<div className="row">
					<div className="col-12 col-lg-4 ">
						<div className="card-feedback">
							<div className="card-feedback__image-wrapper">
								<img src={Cover1} alt="Teacher" />
							</div>
							<h4>- Camille Ault, writer and mom of two, San Diego, CA </h4>
							<p>
								“We’ve seen our daughter’s math comprehension skyrocket! After looking into various tutoring options, Monster Education has exceeded our expectations.  Her Singapore Math teacher has done an excellent job at keeping our daughter engaged while teaching new and challenging concepts beyond what her current school offers.  The weekly zoom meetings are convenient and easy to attend.“
            				</p>
						</div>
					</div>
					<div className="col-12 col-lg-4 ">
						<div className="card-feedback">
							<div className="card-feedback__image-wrapper">
								<img src={Cover2} alt="Teacher" />
							</div>
							<h4>- Amy Choi-Won, Ph.D. Mom of five & founder of My Parenting Guru, Orange County, CA</h4>
							<p>
								“I love the personal attention and the personalized education my daughter gets with Monster Education. In Singapore Math she enjoys learning with her small group of friends and extraordinary teachers. As a mom, I love getting personal feedback, seeing her progress, and having all the work done for me and curated by Monster Education.“
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-4 ">
						<div className="card-feedback">
							<div className="card-feedback__image-wrapper">
								<img src={Cover3} alt="Teacher" />
							</div>
							<h4>- Ariane Klein, mom of two, Los Angeles, CA</h4>
							<p>
								“My daughter has taken many Monster Education classes and I love that the teachers are all extremely knowledgeable and enthusiastic, groups are small and participation is seamlessly facilitated. I have been able to tailor classes to my daughter’s individual needs and sign up for classes with her friends. My daughter tends to push back with extra work, but this has not at all been the case with Monster Education.“
            				</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Block9