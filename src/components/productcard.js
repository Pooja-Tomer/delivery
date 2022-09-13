import React from "react";
import ProImage from "../assets/images/no-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSitemap,
  faBoxOpen,
  faIndianRupeeSign as faRupeeSign,
  faBalanceScaleLeft,
  faTag,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductCard(props) {
  return (
    <>

    <div className="row">
    <div className="col-md-4 col-4">
      <div className="img-box">
        <img
          src={props.image ? props.image : ProImage}
          className="img-fluid"
          width={100}
          alt="Player"
        />
      </div>
    </div>
    <div className="col-md-8 col-8 product-detail position-relative">
      <p>
        <span className="text-bold">{props.sku_name}</span>

    
      </p>
      <p>
        {props.sku_code ? (
          <>
            <span className="text-bold">{props.sku_code}</span>
            ,&nbsp;&nbsp;
          </>
        ) : null}
        <span className="text-black">{props.sku_name_kannada}</span>
      </p>
      {props.category_name ? (
        <p>
          <span className="text-green">{props.category_name}</span>,
          <span className="text-lightgreen">{props.subcategory_name}</span>
        </p>
      ) : null}
      {props.brand_name ? (
        <p>
          <span className="text-black">{props.brand_name}</span>
        </p>
      ) : null}

      {props.Price ? (


        <p className="pl-2">
        <FontAwesomeIcon icon={faTag} className="text-gray"/>
        &nbsp;<span className="order_var p_detail_var text-gray">Price</span>
        <span className="text-black order_value ">
          : &nbsp;
          <FontAwesomeIcon icon={faRupeeSign} />
          <div className="order_inner">
            <span className="pro_value_txt"> {props.Price}</span>
          </div>
        </span>
      </p>

            
      ) : null}

      {props.Weight ? (
        <p className="">
        <FontAwesomeIcon icon={faBalanceScaleLeft} />
          Weight :&nbsp;
          <b className="text-bold">
           
            &nbsp;
            {props.Weight}
          </b>
        </p>
      ) : null}
      {props.Quantity ? (

            <p className="pl-2">
              <FontAwesomeIcon icon={faSitemap} className="text-gray "/>
              &nbsp;<span className="order_var p_detail_var text-gray ">Quantity</span>
              <span className="text-black order_value ">
                : &nbsp;
            
                <div className="order_inner">
                  <span className="pro_value_txt"> {props.Quantity}</span>
                </div>
              </span>
            </p>
        
        
      ) : null}
      {props.TotalPrice ? (

        <p className="pl-2">
        
        &nbsp;<span className="order_var p_detail_var text-gray total_price">Total Price</span>
        <span className="text-black order_value ">
          : &nbsp;
          <FontAwesomeIcon icon={faRupeeSign} />
      
          <div className="order_inner">
            <span className="pro_value_txt"> {props.TotalPrice}</span>
          </div>
        </span>
      </p>
  

        
      ) : null}
    </div>

    </div>
      
      <hr />
      <div className="row hor">
        <div className="col-md-3 col-xs-4 text-center">
          <FontAwesomeIcon icon={faBalanceScale}  />
          <span className="text-black"> {props.Size}</span>
        </div>
        <div className="col-md-6 col-xs-4 text-center">
          <FontAwesomeIcon icon={faRupeeSign}  />
        <span className="text-black"> {props.mrp}</span>
        </div>
        <div className="col-md-3 col-xs-4 text-center">
          <FontAwesomeIcon icon={faBoxOpen}  />
         <span className="text-black">{props.Package}</span>
        </div>
      </div>
    </>
  );
}
