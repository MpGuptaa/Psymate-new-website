import React from 'react';
import PropTypes from 'prop-types';

const SkeletonTypo = ({ loading, tag, className, children }) => {
	const Element = tag;
	const classes = `${className} ${loading ? 'skeleton' : ''}`.trim();

	return <Element className={classes}>{children}</Element>;
};

SkeletonTypo.propTypes = {
	loading: PropTypes.bool.isRequired,
	tag: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default SkeletonTypo;
