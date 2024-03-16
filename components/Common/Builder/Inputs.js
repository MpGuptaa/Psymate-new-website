import CreatableSelect from 'react-select/creatable';
import Flatpickr from 'react-flatpickr';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { camelCaseToNormalCase, inputValueChange } from '../../../Utilities/CommonFunctions/Helper';
import { Col, FormLabel, Row } from 'react-bootstrap';

export const BasicInput = ({ k, state, setState }) => {
	return (
		<div className={`${k?.width} ${k?.colCssClasses}`} key={k?.name} xxl={k?.width}>
			{k?.label && (
				<FormLabel htmlFor='basicInput' className={`form-label`}>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</FormLabel>
			)}
			<Col xxl={k.horizontal ? 9 : 12}>
				<div className={k?.icon && 'form-icon right'}>
					<input
						className={`${
							k?.size === 'sm' || k?.size === 'lg'
								? `form-control form-control-${k?.size}`
								: 'form-control'
						} ${k?.icon ? k?.icon : ''} ${
							k?.rounded === 'true' ? 'rounded-pill' : ''
						} ${k?.error} border`}
						type={k?.element}
						id={k?.name}
            disabled={k?.disabled}
						defaultValue={k?.defaultValue}
						name={k?.name}
						readOnly={k?.readOnly}
						placeholder={k?.placeholder ? k?.placeholder : `${k?.label}`}
						// required={
						//   k?.required === "true" || k?.required === true ? true : false
						// }
						value={state?.[k?.name] || ''}
						onChange={(e) => inputValueChange(e, k?.element, k?.name, state, setState)}
					/>
					{/* <i className={k?.icon && k?.icon}></i> */}
					{k?.description && (
						<div id={`${k?.name}HelpBlock`} className='form-text'>
							{k?.description}
						</div>
					)}
				</div>
			</Col>
		</div>
	);
};

export const SelectInput = ({ k, state, setState }) => {
	return (
		<Col key={k?.name} xxl={k?.width} className={`${k?.width} ${k?.colCssClasses} ${k?.error}`}>
			{k?.label && (
				<label htmlFor='basicInput' className={`form-label text-capitalize`}>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</label>
			)}

			{k?.title && (
				<span title={k?.title} className='m-1'>
					Info
				</span>
			)}
			<CreatableSelect
				classNamePrefix='select'
				className={`${k?.rounded && 'rounded-pill'}`}
				isMulti={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('multiple')
						: k?.variants?.split(',')?.includes('multiple')
				}
				isDisabled={k?.disabled}
				isLoading={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('loading')
						: k?.variants?.split(',')?.includes('loading')
				}
				isClearable={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('clearable')
						: k?.variants?.split(',')?.includes('clearable')
				}
				isRtl={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('rtl')
						: k?.variants?.split(',')?.includes('rtl')
				}
				value={
					state && typeof state[k?.name] == 'string'
						? {
								label: state?.[k?.name],
								value: state?.[k?.name],
						  }
						: state?.[k?.name]?.map((i) => {
								return {
									label: i,
									value: i,
								};
						  })
				}
				isSearchable={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('searchable')
						: k?.variants?.split(',')?.includes('searchable')
				}
				placeholder={k?.placeholder ? k?.placeholder : `Search for ${k?.label}s`}
				onChange={(e) => {
					setState({
						...state,
						[k?.name]:
							typeof k?.variants !== 'string'
								? k?.variants?.includes('multiple')
									? e.map((i) => i?.value)
									: e?.value
								: k?.variants?.split(',')?.includes('multiple')
								? e.map((i) => i?.value)
								: e?.value,
					});
				}}
				options={(k?.items?.split(',') || [])?.map((i) => {
					return {
						label: i,
						value: i,
					};
				})}
			/>
		</Col>
	);
};

export const BasicSelectInput = ({ k, state, setState }) => {
	return (
		<Col className={`${k?.width} ${k?.colCssClasses} ${k?.error}`} key={k?.name} xxl={k?.width}>
			{k?.label && (
				<label htmlFor='basicInput' className={`form-label`}>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</label>
			)}
			{k?.title && (
				<span title={k?.title} className='m-1'>
					Info
				</span>
			)}
			<select
				className={`${
					k?.size === 'sm' || k?.size === 'lg'
						? `form-select form-select-${k?.size}`
						: 'form-select'
				} ${k?.icon ? 'form-select-icon' : ''} ${
					k?.rounded === 'true' ? 'rounded-pill' : ''
				} ${k?.error} border`}
				id={k?.name}
				defaultValue={k?.defaultValue}
				name={k?.name}
				readOnly={k?.readOnly}
				placeholder={k?.placeholder ? k?.placeholder : `${k?.label}`}
				// required={k?.required}
				value={state?.[k?.name] || ''}
				onChange={(e) => inputValueChange(e, k?.element, k?.name, state, setState)}>
				<option>Select {k?.label} </option>
				{k?.items.split(',').map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</Col>
	);
};

export const AsyncSelectInput = ({ k, state, setState }) => {
	return (
		<Col key={k?.name} className={`${k?.colCssClasses} ${k?.error}`} xxl={k?.width}>
			{k?.label && (
				<label htmlFor={k?.name} className='form-label'>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</label>
			)}
			{k?.title && (
				<span title={k?.title} className='m-1'>
					Info
				</span>
			)}
			<AsyncSelect
				className={`${k?.rounded && 'rounded-pill'}`}
				isMulti={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('multiple')
						: k?.variants?.split(',')?.includes('multiple')
				}
				isDisabled={k?.disabled}
				isLoading={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('loading')
						: k?.variants?.split(',')?.includes('loading')
				}
				isClearable={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('clearable')
						: k?.variants?.split(',')?.includes('clearable')
				}
				isRtl={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('rtl')
						: k?.variants?.split(',')?.includes('rtl')
				}
				isSearchable={
					typeof k?.variants !== 'string'
						? k?.variants?.includes('searchable')
						: k?.variants?.split(',')?.includes('searchable')
				}
				placeholder={k?.placeholder ? k?.placeholder : `Search for ${k?.label}`}
				value={
					Array.isArray(state?.[k?.name])
						? state?.[k?.name]?.map((i) => {
								return {
									label: k?.items
										?.split(',')
										?.map((a) => {
											return i?.[a?.trim()];
										})
										?.join(', '),
									value: i,
								};
						  })
						: k?.items
								?.split(',')
								?.map((a) => {
									return state?.[k?.name]?.[a];
								})
								?.join(', ')
						? {
								label: k?.items
									?.split(',')
									?.map((a) => {
										return state?.[k?.name]?.[a];
									})
									?.join(', '),
								value: state?.[k?.name],
						  }
						: []
				}
				onChange={(e) => {
					const dynamicStateUpdate = (key) => {
						const dynamicState = {};
						key.items.split(',').forEach((item) => {
							dynamicState[item.trim()] = e?.value[item.trim()] || null;
						});
						return dynamicState;
					};
					if (typeof e.value !== 'undefined') {
						setState({
							...state,
							[k?.name]: dynamicStateUpdate(k),
						});
					} else {
						const newArray = e.map((l) => {
							const dynamicState = {};
							k.items?.split(',')?.forEach((item) => {
								dynamicState[item.trim()] = l?.value?.[item.trim()] || null;
							});
							return dynamicState;
						});
						setState((prevState) => ({
							...prevState,
							[k?.name]: newArray,
						}));
					}
				}}
				loadOptions={async (inputValue) => {
					try {
						const apiOptions = k.options.split(',');

						const optionPromises = apiOptions.map(async (api) => {
							const response = await axios.get(
								`/${api.trim()?.split('_')[0]}&search=${inputValue}`,
							);
							const data = response.data;

							return {
								label: api.trim().split('_')[1],
								options: data.map((item) => ({
									value: item,
									label: k.items
										.split(',')
										.map((field) => item[field.trim()])
										.join(', '),
								})),
							};
						});

						const groupedOptions = await Promise.all(optionPromises);
						return groupedOptions;
					} catch (error) {
						console.error('Error loading options:', error);
						return [];
					}
				}}
			/>
		</Col>
	);
};

export const TextareaInput = ({ k, state, setState }) => {
	return (
		<Col key={k?.name} className={`${k?.colCssClasses}`} xxl={k?.width}>
			{k?.label && (
				<label htmlFor={k?.name} className='form-label'>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</label>
			)}
			{k?.title && (
				<span title={k?.title} className='m-1'>
					Info
				</span>
			)}
			<textarea
				className='form-control'
				id={k?.name}
				rows={k?.rows || 3}
				value={state?.[k?.name]}
				onChange={(e) => inputValueChange(e, 'textarea', k?.name, state, setState)}
			/>
		</Col>
	);
};

export const CheckBoxInput = ({ k, state, setState }) => {
	return (
		<Col className={`${k?.colCssClasses}`} key={k?.name} xxl={k?.width}>
			{k?.label && (
				<label htmlFor={k?.name} className='form-label'>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</label>
			)}
			{k?.description && (
				<div id={`${k?.name}HelpBlock`} className='form-text'>
					{k?.description}
				</div>
			)}
			{k?.title && k?.title !== '' && (
				<span title={k?.title} className='m-1'>
					Info
				</span>
			)}

			<div className='d-flex flex-wrap'>
				{k?.items.length !== 0
					? k?.items?.split(',')?.map((item) => {
							const variable = item;
							return (
								<div key={variable}>
									<div className='d-flex flex-wrap justify-content-between pl-5'>
										<input
											onChange={(e) =>
												inputValueChange(
													e,
													k.element,
													k?.name,
													state,
													setState,
												)
											}
											id={variable}
											name={variable}
											type={k.element}
											value={variable}
											checked={
												state?.[k?.name] &&
												state?.[k?.name]?.includes(variable)
											}
											// required={required ? required :k.required}
										/>
										<label
											className={`text-capitalize mx-3 my-1 ${k?.error} form-check-label`}
											htmlFor={variable}>
											{variable}
										</label>
									</div>
									{/* {description && (
                    <div id={`${variable}_description`} className="form-text">
                      {description}
                    </div>
                  )} */}
								</div>
							);
					  })
					: 'No Items Found'}
			</div>
		</Col>
	);
};

export const MultipleInput = ({ k, state, setState }) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => setModal(!modal);

	const handleChange = (index, event) => {
		const { name, value } = event.target;
		const newItems = [...state[k.name]];
		newItems[index] = {
			...newItems[index],
			[name?.toString()?.replace(/ /g, '_')?.toLowerCase()]: value,
		};
		setState({
			...state,
			[k.name]: newItems,
		});
	};

	const handleDeleteItem = (index) => {
		const newArr = state[k.name].filter((_, i) => i !== index);
		setState({ ...state, [k.name]: newArr });
	};
	return (
		<Col className={`${k?.colCssClasses} ${k?.error}`} key={k?.name} xxl={k?.width}>
			<div className='d-flex align-items-center'>
				<div className='flex-grow-1'>
					{k?.label && (
						<label htmlFor={k?.name} className='form-label fs-15'>
							{k?.label}
						</label>
					)}
				</div>
				<div className='flex-shrink-0'>
					<button
						type='button'
						className='btn btn-sm btn-success mb-3'
						onClick={() => {
							const newItem = {};
							setState({
								...state,
								[k.name]: [...(state[k.name] || []), newItem],
							});
						}}>
						Add {k?.label}
					</button>
				</div>
			</div>
			<Row className='d-flex flex-wrap'>
				{state?.[k.name] &&
					state?.[k?.name]?.map((item, index) => (
						<Col xxl={4} className='mb-3' key={index}>
							<div>
								<div className='form-check card-radio'>
									<Input
										id={`address_${index}`}
										name='shippingAddress'
										type='radio'
										className='form-check-input'
										defaultChecked
									/>
									<label
										className='form-check-label'
										htmlFor={`address_${index}`}>
										{k.items
											.toString()
											.split(',')
											.map((fieldName) => (
												<div key={fieldName} className='d-block'>
													<span className='mb-4 fw-semibold text-muted text-uppercase'>
														{camelCaseToNormalCase(fieldName)}
													</span>
													<span className='fs-15 mb-2 d-block'>
														{
															state[k.name][index][
																fieldName
																	.replace(/ /g, '_')
																	.toLowerCase()
															]
														}
													</span>
												</div>
											))}
									</label>
								</div>
								<div className='d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1'>
									<div onClick={() => toggleModal(index)}>
										<i className='ri-pencil-fill' />
									</div>
									<div onClick={() => handleDeleteItem(index)}>
										<i className='ri-delete-bin-fill' />
									</div>
								</div>
							</div>
							<Modal isOpen={modal} toggle={toggleModal}>
								<ModalHeader toggle={toggleModal}>Edit Item</ModalHeader>
								<ModalBody>
									<Row className='relative flex flex-col justify-start dark:bg-gray-800 md:flex-row'>
										{k.items
											.toString()
											.split(',')
											.map((l) => (
												<Col
													xxl={k?.options || 12}
													key={l}
													className={` w-full flex justify-start flex-col items-start ${
														k?.label ? 'mb-4' : ''
													}`}>
													<label
														htmlFor={l}
														className='form-label fw-bold'>
														{camelCaseToNormalCase(l)}
													</label>
													<Input
														className={`${
															k?.size
																? `form-control-${k?.size}`
																: 'form-control'
														} ${k?.icon ? 'form-control-icon' : ''} ${
															k?.rounded ? 'rounded-pill' : ''
														} `}
														type={k?.element}
														id={l}
														name={l}
														htmlFor={l}
														value={
															state[k.name][index][
																l.replace(/ /g, '_').toLowerCase()
															]
														}
														onChange={(event) =>
															handleChange(index, event)
														}
													/>
												</Col>
											))}
									</Row>
								</ModalBody>
								<ModalFooter>
									<Button color='primary' onClick={toggleModal}>
										Save Changes
									</Button>
								</ModalFooter>
							</Modal>
						</Col>
					))}
			</Row>
		</Col>
	);
};

export const RadioInput = ({ k, state, setState }) => {
	return (
		<Col key={k?.name} className={`${k?.colCssClasses}`} xxl={k?.width}>
			{k?.label && (
				<label htmlFor={k?.name} className={`form-label fw-bold ${k?.error}`}>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</label>
			)}
			{k?.title && k?.title !== '' && (
				<span title={k?.title} className='m-1'>
					Info
				</span>
			)}
			{k?.title && k?.title !== '' && (
				<div title={k?.title} className='text-capitalize mb-2'>
					{k?.title}
				</div>
			)}
			{k?.description && (
				<div id={`${k?.description}_description`} className='form-text'>
					{k?.description}
				</div>
			)}
			<div className={`d-flex ${k?.optionCssClasses ? k?.optionCssClasses : 'flex-wrap'}`}>
				{k?.items.length !== 0
					? k?.items?.split(',')?.map((item) => {
							const variable = item?.split('~')?.[0];
							const description = item?.split('~')?.[1];

							return (
								<Row className='' key={variable}>
									<div className={`d-flex align-items-center rounded-xl`}>
										<input
											onChange={(e) =>
												inputValueChange(
													e,
													k.element,
													k.name,
													state,
													setState,
												)
											}
											id={`${variable}_${k.name}`}
											aria-describedby={variable}
											type={k.element}
											name={k.name}
											value={variable}
											checked={state?.[k.name] && state[k.name] === variable}
										/>
										<label
											className={`mx-2 text-capitalize ${k?.error}`}
											htmlFor={`${variable}_${k.name}`}>
											{variable}
											{description ? (
												<span className='form-text'>{` - ${description}`}</span>
											) : (
												''
											)}
										</label>
									</div>
								</Row>
							);
					  })
					: 'No Items Found'}
				{/* {k?.title && k?.title !== "" && (
          <div title={k?.title} className="my-2" />
        )} */}
			</div>
		</Col>
	);
};

export const PickerInput = ({ k, state, setState }) => {
	return (
		<Col xxl={k?.width} className={`${k?.colCssClasses}`}>
			<div>
				<label htmlFor={k?.name} className='form-label'>
					{k?.label} {k?.required && '*'}
				</label>
				{k?.title && (
					<span title={k?.title} className='m-1'>
						Info
					</span>
				)}

				<Flatpickr
					className='form-control'
					onChange={(e) => {
						inputValueChange(e, 'flatpicker', k?.name, state, setState);
					}}
					options={{
						mode: k?.mode ? k?.mode : '',
						enableTime: k?.enableTime || true,
						noCalendar: k?.noCalendar || true,
						dateFormat: k?.dateFormat || 'H:i',
						time_24hr: k?.time_24hr || true,
					}}
				/>
			</div>
		</Col>
	);
};

export const ImageInput = ({ k, state, setState }) => {
	return (
		<Col xxl={k?.width} className={`${k?.colCssClasses} ${k?.error}`}>
			{k?.label && (
				<label htmlFor={k?.name} className='form-label text-capitalize'>
					{k?.label}
				</label>
			)}
			{k?.title && (
				<span title={k?.title} className='m-1'>
					{/* Add Info icon or component here */}
				</span>
			)}

			<Dropzone
				maxFiles={parseInt(k.items)}
				onDrop={(acceptedFiles) => {
					setState({
						...state,
						[k.name]: acceptedFiles.map((file) =>
							Object.assign(file, {
								preview: URL.createObjectURL(file),
								selectednames: ['Select'],
								cover: '',
							}),
						),
					});
				}}>
				{({ getRootProps, getInputProps }) => (
					<div className='avatar-upload d-flex flex-column justify-content-center align-items-center'>
						<div
							{...getRootProps()}
							className='flex justify-start my-4 items-center w-full'>
							<label
								htmlFor='dropzone-file'
								style={{
									position: 'relative',
								}}>
								{state?.[k?.name] ? (
									typeof state?.[k?.name] === 'string' ? (
										<Col className='col-6'>
											<img
												className='rounded-circle avatar-xl'
												alt='200x200'
												width='200'
												src={state?.[k?.name]}
											/>
										</Col>
									) : (
										state?.[k?.name]?.map((i) => (
											<Col key={i.preview} className='col-6'>
												<img
													className='rounded-circle avatar-xl'
													alt='200x200'
													width='200'
													src={i.preview}
												/>
											</Col>
										))
									)
								) : (
									<Col className='col-6'>
										<img
											className='rounded-circle avatar-xl'
											alt='200x200'
											width='200'
											// src={avatar4}
										/>
									</Col>
								)}
								<input
									{...getInputProps()}
									id='dropzone-file'
									type='file'
									name={k.name}
									className='hidden'
									accept='.png, .jpg, .jpeg'
								/>
							</label>
						</div>
						<Button
							onClick={(e) => {
								var items = [];
								typeof state?.[k.name] === 'object' &&
									state?.[k.name]?.map((i) => {
										const formData = new FormData();
										formData.append('file', i);
										axios
											.post(`${config.api.API_URL}/file/upload`, formData)
											.then((res) => {
												if (
													k.name === 'photoURL' ||
													k.name === 'thumbnail'
												) {
													setState({
														...state,
														[k.name]: res.results[0].Location,
													});
												} else {
													items.push(res.results[0].Location);
												}
												toast.success(`${k.label} Added`, {
													toastId: k.name,
												});
											})
											.catch((err) => {
												console.log(err);
											});
									});
								if (k.name === 'photoURL' || k.name === 'thumbnail') {
									setState({ ...state, [k.name]: items });
								}
							}}>
							Upload
						</Button>
					</div>
				)}
			</Dropzone>
		</Col>
	);
};

export const DocumentInput = ({ k, state, setState }) => {
	const handleDeleteImage = (index) => {
		const updatedImages = [...state[k.name]];
		updatedImages.splice(index, 1);
		setState({ ...state, [k.name]: updatedImages });
	};
	return (
		<Col xxl={k?.width} className={`${k?.colCssClasses} ${k?.error}`}>
			{k?.label && (
				<label htmlFor={k?.name} className='form-label text-capitalize'>
					{k?.label}
					{/* {(k?.required == "true" || k?.required == true) && "*"} */}
				</label>
			)}
			{k?.title && (
				<span title={k?.title} className='m-1'>
					Info
				</span>
			)}
			<Dropzone
				maxFiles={parseInt(k.items)}
				onDrop={(acceptedFiles) => {
					setState({
						...state,
						[k.name]: [
							...state[k.name],
							...acceptedFiles.map((file) =>
								Object.assign(file, {
									preview: URL.createObjectURL(file),
									selectednames: ['Select'],
									cover: '',
									uploaded: false,
								}),
							),
						],
					});
				}}>
				{({ getRootProps, getInputProps }) => (
					<div className='dropzone dz-clickable'>
						<div
							{...getRootProps()}
							className='flex justify-start text-center my-4 items-center w-full'>
							<label htmlFor='dropzone-file'>
								<div className='mb-3'>
									<i className='display-4 text-muted ri-upload-cloud-2-fill' />
								</div>
								<h5 className='text-muted'>Drop files here or click to upload.</h5>
								<input
									{...getInputProps()}
									id='dropzone-file'
									type='file'
									// required={required ? required :k.required === "true" ? true : false}
									name={k.name}
									className='hidden'
									accept='.png, .jpg, .jpeg'
								/>
							</label>
						</div>
					</div>
				)}
			</Dropzone>
			{state?.[k.name] && (
				<div className='d-flex flex-wrap'>
					{state[k.name].map((image, index) => {
						return (
							<div key={index} className='m-2' style={{ width: '200px' }}>
								<CardImg top src={image.preview} alt={`Image ${index}`} />
								<div className='d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-2'>
									<input
										type='text'
										className='mr-2 border-0 bg-light-gray'
										placeholder='Enter Label'
										value={image.text || ''}
										onChange={(e) => {
											const newText = e.target.value;
											const updatedImage = { ...image, text: newText };
											const updatedImages = [...state[k.name]];
											updatedImages[index] = updatedImage;
											setState({ ...state, [k.name]: updatedImages });
										}}
									/>
									<div className='ml-3' onClick={() => handleDeleteImage(index)}>
										<i className='ri-delete-bin-fill' />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
			<Button
				type='button'
				onClick={async (e) => {
					var items = [];
					const promises = state?.[k.name]
						?.filter((i) => !i.uploaded)
						?.map(async (i) => {
							const formData = new FormData();
							formData.append('file', i);
							try {
								const res = await axios.post(
									`${config.api.API_URL}/file/upload`,
									formData,
								);
								const updatedImage = {
									...i,
									preview: res.results[0].Location,
									uploaded: true,
								};
								items.push(updatedImage);
								toast.success(`${k.label} Added`, { toastId: k.name });
							} catch (err) {
								console.log(err);
							}
						});

					await Promise.all(promises);

					// Combine the uploaded images with the existing ones
					let all = [...state[k.name].filter((i) => i.uploaded), ...items];
					setState({ ...state, [k.name]: all });
				}}>
				Upload
			</Button>
		</Col>
	);
};
