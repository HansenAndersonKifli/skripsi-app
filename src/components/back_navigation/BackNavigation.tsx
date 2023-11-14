import React, { Component } from 'react';
import { IBackNavigationProps, IBackNavigationState } from './interfaces';
import './BackNavigation.scss';
import { IcnLeftArrow } from '../../assets/icon';

// you may change to class or function component
export default class BackNavigation extends Component<IBackNavigationProps, IBackNavigationState> {
  render() {
    const {
      label,
      onClick,
    } = this.props;

    const hasBackButton = (typeof onClick === "function");

    if (!hasBackButton) {
      return (
        <div className="C--backnavigation type--1 d-flex align-items-center mb-3">
          <h5 className="label">{label || 'back'}</h5>
        </div>
      )
    }

    return (
      <div
        className="C--backnavigation type--1 d-flex align-items-center mb-3"
      >
        <span onClick={onClick} className="icon cursor-pointer">
          <IcnLeftArrow width="1em" height="1em" />
        </span>
        <h5 className="label">{label || 'back'}</h5>
      </div>
    )
  }
}
