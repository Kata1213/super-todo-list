import React from 'react';
import { shallow } from 'enzyme';
import Details from '../component/View';
import '../../setUptest'

describe('details',()=>{
    let component;
    beforeAll(()=>{
        component=shallow(<Details/>);
    });

    it('should contains d',() =>{

    });

    it('should contains SaveButton',() =>{
        expect(component.find('.SaveButton').length).toBe(1);
    });

});