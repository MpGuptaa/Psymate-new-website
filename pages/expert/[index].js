import { useEffect, useState } from 'react';
import useDataFetching from '../../components/Common/DataFetch';
import ExpertProfile from '../../components/Common/expertProfile';
import Layout from '../../components/layout/Layout';

function expertPage({ id }) {
	const { loading, data } = useDataFetching(`data/users?searchBy=_id&search=${id}&exact=true`);
	const [profile, setProfile] = useState([]);
	useEffect(() => {
		setProfile(data);
	}, [data]);

	return (
		<>
			<Layout>
				<div className='doc-page-outer-container'>
					<div className='container'>
						<ExpertProfile profile={profile?.[0]} loading={loading} id={id} />
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
export default expertPage;
