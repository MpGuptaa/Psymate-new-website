import { useState, useEffect } from 'react';

const useDataFetching = (query, reRun) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		currentPage: 1,
		total: 0,
		totalPages: 0,
	});

	const fetchData = async () => {
		setLoading(true);
		try {
			// /api/pay 
			const response = await fetch(process.env.NEXT_PUBLIC_DEFAULT_SERVER_BASE_URL + query);
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();
			setData(data.data);
			setState({ count: data.total, pages: data.totalPages });
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
		return () => {};
	}, [query, reRun]);

	return { loading, data, pages: state.pages, count: state.count };
};

export default useDataFetching;
