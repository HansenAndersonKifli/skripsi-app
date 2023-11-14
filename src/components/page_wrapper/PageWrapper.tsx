//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component } from 'react';
//  Region Import Constants

//  Region Import Interfaces
import { IPageWrapperProps, IPageWrapperState } from './PageWrapper.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function
import { combineClassName } from '../../utilities/CombineClassName';

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import './PageWrapper.scss';

// you may change to class or function component
class PageWrapper extends Component<IPageWrapperProps, IPageWrapperState> {
  //  render
  render() {

    const {children, className, ...rest} = this.props;
    return (
      <div
        {...rest}
        className={combineClassName('C--PageWrapper', className)}
      >
        {children}
      </div>
    )
  }
}

export default PageWrapper;
