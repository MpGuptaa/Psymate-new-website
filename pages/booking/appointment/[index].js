import useDataFetching from '../../../components/Common/DataFetch';
import BookAppointment from '../../../components/Common/bookAppointment';
import Layout from '../../../components/layout/Layout';
import Image from 'next/image';

function Booking({ id }) {
	const { data } = useDataFetching(`data/users?searchBy=_id&search=${id}&exact=true`);
	const user = data?.[0];

	return (
		<>
			<Layout>
				<div className='my-4'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-4 col-md-12 mt-4'>
								<div key={user?.displayName} className='row mx-50 my-50'>
									<div className=''>
										<div className='card-offer hover-up'>
											<div className='d-flex justify-content-between align-center'>
												<div className='doc-card'>
													<Image
														width={120}
														height={120}
														src={user?.photoURL}
														alt={user?.displayName}
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15 doc-name'>{user?.prefix} {user?.displayName}</h4>
													<p
														style={{ marginBottom: '8px' }}
														className=' color-grey-500 mb-8 doc-related-text'>
														{user?.qualifications}
													</p>
													<p
														style={{ marginBottom: '8px' }}
														className=' color-grey-500 mb-8 doc-related-text'>
														Experience: {user?.yearsOfExperience}
													</p>
													<p
														style={{ marginBottom: '8px' }}
														className=' color-grey-500 mb-8 doc-related-text'>
														Starts @ ₹{user?.price * 15} for 15 mins
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-8 col-md-12'>
								<BookAppointment id={id} profile={user} />
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export const getServerSideProps = async (context) => {
	try {
		return {
			props: {
				id: context.params.index,
				profile: JSON.stringify([]),
			},
		};
	} catch (e) {
		return {
			props: {
				id: '',
				profile: JSON.stringify([]),
			},
		};
	}
};
export default Booking;
