import React from 'react';
import Layout from '../../components/layout/Layout';
import PsychoBanner from '../../components/Psychotherapy/psychoBanner';
import PsyFeatures from '../../components/Psychotherapy/psyFeatures';

const Psychotherapy = () => {
	return (
		<>
			<Layout>
				<PsychoBanner />
				<PsyFeatures />
			</Layout>
		</>
	);
};

export default Psychotherapy;
