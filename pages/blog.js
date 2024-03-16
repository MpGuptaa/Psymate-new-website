import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';
import useDataFetching from '../components/Common/DataFetch';

const Blog2 = () => {
	const { loading, data } = useDataFetching(`data/blog?searchBy=published&search=Published`);
	const truncateName = (name) => {
		if (name.length > 50) {
			return name.slice(0, 80) + ' ...';
		}
		return name;
	};

	return (
		<>
			<Head>
				<title>News & blog2</title>
			</Head>

			<Layout>
				<section className='section mt-80'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12 text-center'>
								<span className='btn btn-tag'>The Psymate Blog</span>
								<h2 className='color-brand-1 mt-15'>
									Insight and advice from <br className='d-none d-lg-block' />
									our expert team
								</h2>
							</div>
						</div>

						<div className='box-list-blogs'>
							<div className='row'>
								{data?.map((blog, index) => (
									<div key={index} className='col-lg-4 col-md-6 mb-30 item-article'>
										<div className={`card-blog-grid card-blog-grid-3 hover-up ${blog?.category}`}>
											<div className='card-image'>
												{/* <Link href={data?.link}> */}
												<img src='/assets/imgs/page/blog/img3.png' alt='psymate' />
												{/* </Link> */}
												<label className='lbl-border'>{blog?.category}</label>
											</div>
											<div className='card-info'>
												<Link href={`/blog-detail/${blog._id}`}>
													<h4 className='color-brand-1'>{blog?.displayName}</h4>
												</Link>

												<p
													className='font-sm color-grey-500 mt-20'
													dangerouslySetInnerHTML={{ __html: blog.description }}
												/>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Blog2;
