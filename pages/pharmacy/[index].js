import SideButtons from '../../components/Common/sideBtns';
import PharmacyBanner from '../../components/Pharmacy/pharmacyBanner';
import Layout from '../../components/layout/Layout';

function pharmacy({ name }) {
	return (
		<>
			<Layout>
				<SideButtons />
				<PharmacyBanner />
			</Layout>
		</>
	);
}
export default pharmacy;
