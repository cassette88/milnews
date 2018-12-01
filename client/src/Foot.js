import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

const divStyle = {
  width:'120px',
  height:'240px'
}

class Foot extends React.Component {
render() {
return (
<Footer color="black" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Military News Info</h5>
      <p>
     Latest miilitary news sourced by Google Alerts.
      </p>
      
      <iframe style={divStyle} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=milmerch-20&marketplace=amazon&region=US&placement=B0198NWP52&asins=B0198NWP52&linkId=45bcbdfb3ff9dd30829d4a976b314bfd&show_border=true&link_opens_in_new_window=true"></iframe>
      
      <iframe style={divStyle} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=milmerch-20&marketplace=amazon&region=US&placement=B00AAXYDTG&asins=B00AAXYDTG&linkId=42031abe53c2706a19f19b444acfc699&show_border=true&link_opens_in_new_window=true"></iframe>
      
      <iframe style={divStyle} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=milmerch-20&marketplace=amazon&region=US&placement=B07HBDNFBZ&asins=B07HBDNFBZ&linkId=09b69a6bca56bbc5e5e3b550ea1a8ac0&show_border=true&link_opens_in_new_window=true"></iframe>
      
      <iframe  style={divStyle} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=milmerch-20&marketplace=amazon&region=US&placement=B01HNNH8TW&asins=B01HNNH8TW&linkId=ca4f3845ef06984d4a657580c0b74742&show_border=true&link_opens_in_new_window=true"></iframe>
      
      <iframe style={divStyle} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=milmerch-20&marketplace=amazon&region=US&placement=B077X3F94M&asins=B077X3F94M&linkId=d398138c4eb675ec7f5d0a530f778c7a&show_border=true&link_opens_in_new_window=true"></iframe>
      
      <iframe style={divStyle} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=milmerch-20&marketplace=amazon&region=US&placement=B079P848NG&asins=B079P848NG&linkId=f7741cb1344239601a34610a310f6952&show_border=true&link_opens_in_new_window=true"></iframe>
      </Col>
      {/* <Col md="6">
      <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
      </Col> */}
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MilitaryInfo.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default Foot;