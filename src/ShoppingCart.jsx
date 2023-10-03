import React from "react";
import ShoppingCartBody from "./ShoppingCartBody";

const dataObj = {"data":[
    {
        "url": 'https://lp2.hm.com/hmgoepprod?set=source[/46/a3/46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]',
        "title":'Relaxed Fit Jersey top',
        "price": 1499.00,
        "memberPrice": 1279.00,
        "artNo": 1021953016,
        "color": 'Brown/Cream striped',
        "size" : 'L',
        "total" : 1499.00
    },
    {
        "url": 'https://lp2.hm.com/hmgoepprod?set=source[/73/22/7322d5afe5e85ac0e773eb7b6d8ff41556a346ca.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]',
        "title":'Twill cap',
        "price": 799.00,
        "memberPrice": '',
        "artNo": 1155525001,
        "color": 'Light beige/Pine Hills',
        "size" : 'ONESIZE',
        "total" : 799.00
    },
    {
        "url": 'https://lp2.hm.com/hmgoepprod?set=source[/85/53/85532b1d55ead83298dcf1a05c255ced10990b8b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]',
        "title":'Canvas trainers',
        "price": 2299.00,
        "memberPrice": '',
        "artNo": 1128424001,
        "color": 'Light beige',
        "size" : '10.5',
        "total" : 2299.00
    }
]}

function ShoppingCart(){
    return(
        <div>
            <ShoppingCartBody dataObj={dataObj}/>
        </div>
    )
}

export default ShoppingCart