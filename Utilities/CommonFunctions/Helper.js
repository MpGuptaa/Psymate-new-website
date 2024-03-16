import Papa from 'papaparse';

import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

// Cookie functions
export const setCookies = (name, value, expiryInHours) => {
	Cookies.set(name, value, { expires: expiryInHours / 24, path: '/' }); // Convert expiryInHours to days
};

export const getCookies = (name) => {
	return Cookies.get(name);
};

export const removeCookies = (name, options = { path: '/' }) => {
	Cookies.remove(name, options);
};
export const paymentHandler = async (userData, amount, onSubmit, setloading) => {
	const init = async () => {
		return new Promise((resolve) => {
			if (typeof document === 'undefined') {
				resolve(false);
				return;
			}

			const script = document.createElement('script');
			script.src = 'https://checkout.razorpay.com/v1/checkout.js';

			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};

			document.body.appendChild(script);
		});
	};
	const res = await init();

	if (!res) {
		alert('Razorpay SDK Failed to load');
		setloading(false);
		return;
	}

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			amount: amount,
			currency: 'INR',
		}),
	};

	const data = await fetch('/api/pay', requestOptions)
		.then((res) => res.json())
		.catch((e) => {
			setloading(false);
		});

	if (!data) {
		// Handle the case where payment data is not received
		setloading(false);
		return;
	}

	const options = {
		key: process.env.NEXT_PUBLIC_RAZOR_PAY_API_KEY_LIVE,
		name: 'Psymate',
		currency: data.currency,
		amount: data.amount,
		description: 'Psymate Online Booking Appointment',
		image: `https://www.psymate.org/wp-content/uploads/2022/04/Psymate-logo.png`,
		handler: async function (response) {
			await onSubmit(response);
		},
		ondismiss: function () {
			setloading(false);
		},
		prefill: {
			name: userData?.displayName,
			email: userData?.email,
			contact: userData?.phone,
		},
		theme: {
			color: '#fdb536',
		},
	};

	const paymentObject = new window.Razorpay(options);
	paymentObject.open();

	// Set a timeout to check if the gateway is closed after 30 seconds
	setTimeout(() => {
		if (!paymentObject) {
			setloading(false);
		}
	}, 30000);
};
export const updateQuantity = (cart, setCart, item, type, value) => {
	const updatedCart = [...cart];
	const findCartItem = updatedCart.find((i) => i._id === item._id);
	if (findCartItem) {
		findCartItem.cartQuantity =
			type === '-'
				? findCartItem.cartQuantity === 1
					? 1
					: findCartItem.cartQuantity - 1
				: type === '+'
				? findCartItem.cartQuantity + 1
				: value;
		setCart(updatedCart);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
	} else {
		addToCart(item, cart, setCart);
	}
};

export const addToCart = (data, cart, setCart, hard = false) => {
	const existingItemIndex = cart.findIndex((item) => item._id === data._id);
	// 2
	if (existingItemIndex !== -1) {
		const updatedCart = [...cart];
		// [{0},{1},{2}]
		if (hard) {
			updatedCart[existingItemIndex] = data;
			setCart(updatedCart);
			localStorage.setItem('cart', JSON.stringify(updatedCart));
		} else {
			updatedCart[existingItemIndex].cartQuantity += 1;
			setCart(updatedCart);
			localStorage.setItem('cart', JSON.stringify(updatedCart));
		}
	} else {
		if (hard) {
			setCart((prevCart) => [...prevCart, data]);
			localStorage.setItem('cart', JSON.stringify([...cart, data]));
		} else {
			setCart((prevCart) => [
				...prevCart,
				{
					...data,
					cartQuantity: 1,
				},
			]);
			localStorage.setItem(
				'cart',
				JSON.stringify([
					...cart,
					{
						...data,
						cartQuantity: 1,
					},
				]),
			);
		}
	}

	toast.success('Added to cart', { toastId: 'Added to cart' });
};

export function createUrlFromName(name) {
	// Remove special characters and replace spaces with a single "-"
	const formattedName = name
		.replace(/[^\w\s]/gi, '')
		.replace(/\s+/g, '-')
		.toLowerCase();

	return formattedName;
}
export function validateEmail(email) {
	var mailFormat =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email === '') {
		return false;
	} else if (!mailFormat.test(email)) {
		return false;
	} else {
		return true;
	}
}
export const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export function convertTimeTo24Hour(timeStr) {
	let timeTokens = timeStr.split(' ');
	let time = timeTokens[0].split(':');
	let hour = parseInt(time[0]);
	let minute = parseInt(time[1]);

	if (timeTokens[1].toUpperCase() === 'PM' && hour !== 12) {
		hour += 12;
	} else if (timeTokens[1].toUpperCase() === 'AM' && hour === 12) {
		hour = 0;
	}

	return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}
export const generateDates = (days) => {
	const currentDate = new Date();
	const dates = [];
	for (let i = 0; i <= days; i++) {
		const newDate = new Date();
		newDate.setDate(currentDate.getDate() + i);
		dates.push({
			id: i,
			dateFull: newDate,
			date: newDate.toString().split(' ')[1] + ' ' + newDate.toString().split(' ')[2],
			dayDisplay: days[newDate.getDay()],
			day: newDate.toString().split(' ')[0],
			slots: [],
		});
	}
	return dates;
};

export function wordCounter(text) {
	const words = text.split(' ');

	return words.length;
}
export function getNoOfWords(text, number) {
	const words = text.split(' ');
	const limitedWords = words.slice(0, number);

	return limitedWords.join(' ');
}
export function getClinicCode(clinicName) {
	let words = clinicName.split(' ');
	let code = '';
	for (let i = 0; i < words.length; i++) {
		code += words[i].charAt(0);
	}
	return code.toUpperCase();
}

export const uid = () =>
	String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');
export function removeItemOnce(arr, value) {
	var index = arr.indexOf(value);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
}

export function generateRandomId(type, length) {
	let characters;

	if (type === 'number') {
		characters = '0123456789';
	} else if (type === 'mixed') {
		characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	} else {
		throw new Error('Invalid type specified');
	}

	let randomId = '';
	for (let i = 0; i < length; i++) {
		randomId += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return randomId;
}
export function toCamelCase(inputString) {
	if (typeof inputString !== 'string') {
		throw new Error('Input must be a string');
	}

	// Split the string by spaces and underscores
	const words = inputString.split(/[\s_]+/);

	// Capitalize the first letter of each word
	const camelCaseWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

	// Lowercase the first letter of the first word
	camelCaseWords[0] = camelCaseWords[0].charAt(0).toLowerCase() + camelCaseWords[0].slice(1);

	// Join the words together to form the camel case string
	const camelCaseString = camelCaseWords.join('');

	return camelCaseString;
}
export function removeSpecialCharacters(inputString) {
	// Use a regular expression to replace non-alphanumeric characters
	return inputString.replace(/[^a-zA-Z0-9]/g, '');
}

export function camelCaseToNormalCase(inputString) {
	if (typeof inputString !== 'string') {
		throw new Error('Input must be a string');
	}

	// Split the camelCase string by capital letters
	const words = inputString.split(/(?=[A-Z])/);

	// Capitalize the first letter of each word
	const normalCaseWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

	// Join the words together to form the normal case string
	const normalCaseString = normalCaseWords.join(' ');

	return normalCaseString;
}

export function getAllUniqueTagsLowercased(dataArray, index, key) {
	const tagsSet = new Set();

	dataArray?.forEach((item) => {
		const tag =
			index !== 'undefined'
				? item?.[key]?.toLowerCase()?.split(',')?.[index]
				: item?.[key]?.toLowerCase();
		tag && tagsSet.add(tag);
	});

	return Array.from(tagsSet);
}

export function getTimeDifference(dateString) {
	const date = new Date(dateString);
	const now = new Date();

	const timeDifference = now - date;

	if (timeDifference < 60000) {
		const seconds = Math.floor(timeDifference / 1000);
		return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
	} else if (timeDifference < 3600000) {
		const minutes = Math.floor(timeDifference / 60000);
		return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
	} else if (timeDifference < 86400000) {
		const hours = Math.floor(timeDifference / 3600000);
		return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
	} else if (timeDifference < 2592000000) {
		const days = Math.floor(timeDifference / 86400000);
		return `${days} day${days !== 1 ? 's' : ''} ago`;
	} else {
		const months = Math.floor(timeDifference / 2592000000);
		return `${months} month${months !== 1 ? 's' : ''} ago`;
	}
}

export function getTagsLowercased(dataArray) {
	const tagsSet = new Set();

	dataArray?.forEach((item) => {
		const tag = item?.tag?.toLowerCase();
		tagsSet.add(tag);
	});

	return Array.from(tagsSet);
}

export function validateForm(fields, setFields, state) {
	let isValid = true;
	const errorMessages = {};

	fields.forEach((field) => {
		if (field.required) {
			if (!state[field.name] || state[field.name] === '') {
				isValid = false;
				errorMessages[field.name] = `${camelCaseToNormalCase(field.name)} is required`;
			}
		}
	});

	if (!isValid) {
		// Display error messages or handle them as needed
		// For example, you can set an error state or display a message to the user
		const updatedInputs = fields.map((input) => {
			if (errorMessages[input.name]) {
				// Input has a validation error
				return {
					...input,
					error: 'border-danger text-danger', // Add error style
				};
			} else {
				return {
					...input,
					error: 'border-success text-success', // Add error style
				};
			}
		});
		setFields(updatedInputs);
		return false;
	}

	setFields(
		fields.map((input) => {
			return {
				...input,
				error: '', // Add error style
			};
		}),
	);
	return isValid;
}

export function extractCountryCode(phoneNumber) {
	if (phoneNumber.startsWith('91') && phoneNumber.length === 12) {
		return '91'; // Extract the country code "91" for India
	}
	return '';
}

export function removeCountryCode(phoneNumber, countryCode) {
	if (phoneNumber.startsWith(countryCode)) {
		return phoneNumber.slice(countryCode.length); // Remove the country code from the phone number
	}
	return phoneNumber;
}

export const exportData = (data, filename, format) => {
	let content, mimeType;

	// Convert headers to uppercase if data is an array of objects
	const formattedData =
		Array.isArray(data) && data.length > 0 && typeof data[0] === 'object'
			? data.map((item) =>
					Object.fromEntries(Object.entries(item).map(([key, value]) => [key, value])),
			  )
			: data;

	switch (format) {
		case 'csv':
			content = Papa.unparse(formattedData);
			mimeType = 'text/csv;charset=utf-8;';
			break;
		case 'json':
			content = JSON.stringify(formattedData, null, 2);
			mimeType = 'application/json;charset=utf-8;';
			break;
		case 'txt':
			content = formattedData.toString();
			mimeType = 'text/plain;charset=utf-8;';
			break;
		default:
			throw new Error(`Unsupported format: ${format}`);
	}

	const blob = new Blob([content], { type: mimeType });

	if (navigator.msSaveBlob) {
		// For IE 10 or older
		navigator.msSaveBlob(blob, filename);
	} else {
		// For modern browsers
		const link = document.createElement('a');
		if (link.download !== undefined) {
			const url = URL.createObjectURL(blob);
			link.setAttribute('href', url);
			link.setAttribute('download', filename);
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}
};
export const inputValueChange = (e, key, field, state, setState) => {
	var array = !state[field] || state[field].length === 0 ? (state[field] = []) : state[field];
	key === 'checkbox' && e.target.checked && array.push(e.target.value);
	key === 'checkbox' && !e.target.checked && removeItemOnce(array, e.target.value);
	if (key === 'checkbox') {
		setState({
			...state,
			[field]: array,
		});
	} else if (key === 'file') {
		setState({
			...state,
			[field]: e.target.files[0],
		});
	} else if (key === 'flatpicker') {
		setState({
			...state,
			[field]: new Date(e[0]).toISOString(),
		});
	} else if (key === 'toggle') {
		setState({
			...state,
			[field]: e.target.checked,
		});
	} else {
		setState({
			...state,
			[field]: e.target.value,
		});
	}
};

export function createSearchParams(obj) {
	const searchByArray = [];
	const searchArray = [];
	for (const key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			const value = obj[key];
			if (Array.isArray(value) && value.length > 0) {
				searchByArray.push(key.repeat(value.length));
				searchArray.push(value.join(','));
			} else if (typeof value === 'string' && value.trim() !== '') {
				searchByArray.push(key);
				searchArray.push(value);
			}
		}
	}
	const searchBy = searchByArray.join(',');
	const search = searchArray.join(',');
	return `searchBy=${searchBy}&search=${search}`;
}

export const truncateText = (text, maxLength) => {
	return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
