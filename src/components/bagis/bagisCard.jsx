import React from "react";
import { Button, Card, CardImg, CardImgOverlay,CardTitle } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import { getDataProperty } from "../../services/kampanya_service";
import "./bagis.css"
const BagisCard = (props) => {
  return (
    <div className="exdiv">
      <Card
        color="link"
        style={{ borderColor: "#205296", height:"280px" }}
      >
        <CardImg
          src={getDataProperty(props.kampanya,"ExternalLink")[0]}
          alt="Card image cap"
          width="100%"
          height="80%"
          style={{padding:"1px"}}
        />
        <CardImgOverlay>
          <div style={{ marginTop: "215px", marginLeft: "270px" }}>
            {" "}
            <Button
              style={{ borderRadius: "0px",backgroundColor:"#d11242",borderColor:"#d11242" }}
              tag={RouterNavLink}
              to={`/bagis/${props.kampanya.CampaignId}`}
            >
              Detaylı Bilgi
            </Button>
          </div>
        </CardImgOverlay>
        <div style={{ width: "250px" }}>
          {props.kampanya.CampaignName.length < 27 ? (
            <CardTitle className="cardTitle2">
              {props.kampanya.CampaignName}
              <br />
            </CardTitle>
          ) : (
            <CardTitle className="cardTitle">
              {props.kampanya.CampaignName}
            </CardTitle>
          )}
        </div>
      </Card>
    </div>
  );
};

export default BagisCard;
