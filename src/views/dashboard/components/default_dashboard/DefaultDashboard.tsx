//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

//  Region Import Constants

//  Region Import Interfaces
import { IDefaultDashboardProps, IDefaultDashboardState } from './DefaultDashboard.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function
// import { greetingSentence } from '../../../../utilities';

//  Region Import Components
// import { PageRegion } from '../../../../components/page_region';
import PageRegion from '../../../../components/page_region';

//  Region Import Assets

//  Region Import Style
import './DefaultDashboard.scss';

// you may change to class or function component
class DefaultDashboard extends Component<IDefaultDashboardProps, IDefaultDashboardState> {
  //  constructor declaration

  //  react lifecycle (componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc)

  //  onHandleFunction declaration

  //  render
  render() {
    // props destruction

    // state destruction

    // other variables if needed


    return (
      <PageRegion>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Card>
              <CardHeader>
                {/* <i className="fa fa-align-justify" /><strong></strong> */}
              </CardHeader>
              <CardBody>
                Welcome
              </CardBody>
            </Card>
          </Col>
        </Row>
      </PageRegion>
    )
  }
}

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default DefaultDashboard;
