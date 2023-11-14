import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row, Table } from 'reactstrap';
import PageRegion from '../../../components/page_region';
import BackNavigation from '../../../components/back_navigation';
import "./CardDetail.css";

const cardData = [
    {
      imgUrl: 'logo192.png',
      title: 'Toko Mebel Sanjaya',
      category: 'Furniture',
      desc: 'Toko Furniture yang menjual berbagai macam furnitur seperti meja, kasur, lemari dan lainnya',
      phone: '08xxxxxxxxxx',
      address: 'jl. xxxx',
      contact: ''
    }
  ];

const imgData = [
{
    imgUrl: 'logo192.png',
}
];

class CardDetail extends Component<any, any> {
  componentDidMount = () => {
    
  };

  goBack = () => this.props.history.goBack();

  //goback nya bermasalah
  
  renderDetailHead = () => {
    return (
        <>
        <div className="cards-container1" >
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                <img src={card.imgUrl} alt={card.title} className="card-image" />
                <div className="card-content">
                    <h1>{card.title}</h1>
                    <h3 className='mt-3 pt-3'>Kategori : {card.category}</h3>
                </div>
                </div>
            ))}
        </div>

        {/* <div className="img-container">
        {imgData.map((card, index) => (
            <div className="card" key={index}>
            <img src={card.imgUrl} className="card-image" />
            
            </div>
        ))}
        </div> */}
        </>
    )
  }

  renderDetailShop = () => {
    return (
      <div className="cards-container1" >
        {cardData.map((card, index) => (
            <div className="card-detail" key={index}>
            <div className="card-content-detail">
                <h2>Informasi Detail</h2>
                <Row className="m-0" >
                  <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
                    <div>
                      Deskripsi
                    </div>
                  </Col>
                  <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
                    <div>
                      : {card.desc}
                    </div>
                  </Col>
                </Row>
                <Row className="m-0" >
                  <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
                    <p>No. telp</p>
                  </Col>
                  <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
                    <div>
                      : {card.phone}
                    </div>
                  </Col>
                </Row>
                <Row className="m-0" >
                  <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
                    <p>Alamat</p>
                  </Col>
                  <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
                    <div>
                      : {card.address}
                    </div>
                  </Col>
                </Row>
                <Row className="m-0" >
                  <Col md={3} lg={3} sm={6} xs={6} className="m-0 p-0 pt-3">
                    <p>No. telp</p>
                  </Col>
                  <Col md={8} lg={8} sm={12} xs={12} className="m-0 p-0 pt-3">
                    <div>
                      : {card.phone}
                    </div>
                  </Col>
                </Row>
                {/* <p>{card.address}</p>
                <p>{card.phone}</p>
                <p>{card.contact}</p> */}
            </div>
            </div>
        ))}
      </div>
    )
  }

  render() {

    return (
        <>
         {/* <h2>detail</h2> */}

         <PageRegion className="pt-2 pb-2 width-100-px">
            <BackNavigation label="&nbsp;" onClick={this.goBack} />
          </PageRegion>
          {this.renderDetailHead()}
          {this.renderDetailShop()}

       </>
    );
  }
}

export default CardDetail;
