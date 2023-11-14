//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component } from 'react';
//  Region Import Constants

//  Region Import Interfaces
import { IPageRegionProps, IPageRegionState } from './PageRegion.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function
import { addStyleXY } from '../../utilities/Styling';

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import './PageRegion.scss';
import classNames from 'classnames';

// you may change to class or function component
class PageRegion extends Component<IPageRegionProps, IPageRegionState> {
  //  render
  render() {

    const {
      children, className,
      autoOverflow, autoOverflowX, autoOverflowY,
      noGutter, noGutterX, noGutterY,
      useMargin,
      ...rest} = this.props;

    const Overflow = addStyleXY('auto-overflow', autoOverflow, autoOverflowX, autoOverflowY);
    const NoGutter = addStyleXY(useMargin ? 'no-margin' : 'no-padding', noGutter, noGutterX, noGutterY);

    return (
      <div
        {...rest}
        className={classNames('c-page-region', {
          'use-margin' : useMargin
        }, Overflow, NoGutter, className)}
      >
        {children}
      </div>
    )
  }
}

export default PageRegion;
