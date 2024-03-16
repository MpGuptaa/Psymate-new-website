import React from 'react';
import Knowledgebase from '../slider/Knowledgebase';
import useDataFetching from './DataFetch';
import UseLoader from './UseLoader';

const OurCenters = () => {
	const { loading, data } = useDataFetching(`data/establishments?searchBy=active&search=true`);
	return (
		<section className='section mt-40 pt-50 pb-15 bg-grey-80'>
			<div className='container'>
				<h2 className='color-brand-1 mb-50 text-center'>Our Centers</h2>

				<div className='box-swiper'>
					<div className='swiper-container swiper-group-3'>
						<UseLoader loading={loading}>
							<Knowledgebase data={data} />
						</UseLoader>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurCenters;
