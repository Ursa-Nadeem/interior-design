import { width } from '@mui/system';
import { Col, Divider, Row } from 'antd';
import React from 'react';
import living1 from '../Assets/living room/livingroom1.jpg';
import bathroom from '../Assets/bathroom.jpg';
import bedroom6 from '../Assets/bedrooms/bedroom6.jpg';
import kitchen from '../Assets/kitchen.jpg';
const Card = () => (
  <>
   
    {/* <Divider orientation="left">Responsive</Divider> */}
    <div style={{width:'100%'}}>
    <Row>
      <Col
        span={6}
        xs={{
          order: 1,
        }}
        sm={{
          order: 2,
        }}
        md={{
          order: 3,
        }}
        lg={{
          order: 4,
        }}
      >
        <img src={living1} style={{height:'300px',width:'350px'}} className='cards'/>
      </Col>
      <Col
        span={6}
        xs={{
          order: 2,
        }}
        sm={{
          order: 1,
        }}
        md={{
          order: 4,
        }}
        lg={{
          order: 3,
        }}
      >
        <img src={bathroom} style={{height:'300px', width:'350px'}} className='cards'/>
      </Col>
      <Col
        span={6}
        xs={{
          order: 3,
        }}
        sm={{
          order: 4,
        }}
        md={{
          order: 2,
        }}
        lg={{
          order: 1,
        }}
      >
        <img src={kitchen} style={{height:'300px', width:'350px'}} className='cards'/>
      </Col>
      <Col
        span={6}
        xs={{
          order: 4,
        }}
        sm={{
          order: 3,
        }}
        md={{
          order: 1,
        }}
        lg={{
          order: 2,
        }}
      >
         <img src={bedroom6} style={{height:'300px', width:'350px'}} className='cards'/>
      </Col>
    </Row>
</div>
  
  
   
  </>
);
export default Card;