import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DistrictsContainer from '../DistrictsContainer/DistrictsContainer.js';
import { shallow, mount } from 'enzyme';
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
		// console.log(wrapper)
	})

	// it('adds helper dataset to state', () => {
	// 	const district = new DistrictRepository(kinderData)
	// 	console.log(wrapper)
	// 	expect(wrapper.state('data')).toEqual(district.stats)
	// })





})
