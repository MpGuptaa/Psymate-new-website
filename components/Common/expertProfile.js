import Image from 'next/image';
import React from 'react';
import ContactUsForm from './contactUsForm';
import BookAppointment from './bookAppointment';
import SkeletonTypo from './Skeleton/Typography';

const ExpertProfile = ({ profile, loading, id }) => {
	const expertiseList = ['Depression', 'Anxiety'];
	console.log(profile);
	return (
		<section>
			<div className='row align-items-start'>
				<div className='col-xl-4 '>
					<div className='box-banner-left'>
						<Image
							src={profile?.photoURL}
							width={395}
							height={400}
							alt='doc-image'
							className='rounded'
						/>

						<SkeletonTypo loading={loading} tag='p' className='font-md color-grey-400'>
							{profile?.qualifications || 'No Qualifications'}
						</SkeletonTypo>
						<SkeletonTypo loading={loading} tag='p' className='font-md color-grey-400'>
							{profile?.yearsOfExperience || '0'} years of experience
						</SkeletonTypo>
						<ContactUsForm />
					</div>
				</div>
				<div className='col-xl-8'>
					<div className='box-banner-right-home6'>
						<div>
							<SkeletonTypo
								tag='h2'
								loading={loading}
								className='color-brand-1 mb-20'>
								{profile?.prefix || 'Mr.'} {profile?.displayName || 'Profile Name'}
							</SkeletonTypo>
							<SkeletonTypo
								tag='p'
								loading={loading}
								className='font-md color-grey-400 mb-40'>
								{profile?.qualifications || 'No Qualifications'}
							</SkeletonTypo>
							<SkeletonTypo
								tag='h4'
								loading={loading}
								className='color-brand-1 mb-20'>
								About Me
							</SkeletonTypo>
							<SkeletonTypo
								tag='p'
								loading={loading}
								className='font-md color-grey-400 mb-40'>
								{profile?.about || 'Verified Practitioner At Psymate Healthcare'}
							</SkeletonTypo>
							<SkeletonTypo
								tag='h5'
								loading={loading}
								className='color-brand-1 mb-20'>
								Expertise:
							</SkeletonTypo>
							{profile?.category?.map((expertise, index) => (
								<SkeletonTypo
									tag='span'
									loading={loading}
									key={expertise}
									className='doc-profile-expertise-container font-md color-grey-400'>
									{expertise}
								</SkeletonTypo>
							))}
						</div>
						<BookAppointment id={id} profile={profile} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExpertProfile;
