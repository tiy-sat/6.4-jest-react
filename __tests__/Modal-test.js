// __tests__/CheckboxWithLabel-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Modal from '../modules/Modal';

jest.unmock('../modules/Modal');

describe('Modal', () => {

  it('should not be visible by default', () => {
    // This places our component into our test to find off of
    var modal = TestUtils.renderIntoDocument(
      <Modal isOpen={false}/>
    );
    // find modal on page
    var modalHidden = TestUtils.findRenderedDOMComponentWithClass(modal, "hidden");
    // assert it has text
    expect(modalHidden).toBeDefined();
  });

  it('should be visible when isOpen equals true', () => {
    var modal = TestUtils.renderIntoDocument(
      <Modal isOpen={true}/>
    );

    // find modal on page
    var modalOpen = TestUtils.findRenderedDOMComponentWithClass(modal, "modal");

    expect(modalOpen).toBeDefined();
  });
});
