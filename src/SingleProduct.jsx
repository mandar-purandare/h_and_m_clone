import React from 'react'
import SingleProductBody from './SingleProductBody'

const dataObj = {
    "bigImages":['https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff7%2Fff%2Ff7ffa69b8bc23c689c2009a103786045452a75bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
                'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc8%2F96%2Fc8966c87f0bc2c46bb8497b91d7e4e8af4843d8d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
                'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7f%2F67%2F7f678188dea6dd5c313816fedd4bdd9dc2669b21.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
                'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe5%2F1d%2Fe51dab73cffb263f82bd5a92ff248c4e54d3e56b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
                'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F31%2F94%2F31940cd590d044a9a6311d3f0a32ea2fa84239d0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
                'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F46%2Fa3%2F46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
                'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F23%2F1f%2F231f17c1d96931800c3796cfbc7e6738da5f2a31.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
                'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F49%2F65%2F49652a2c77ad819cba31d2d7aeec866e39cbbdfb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'],
    "smallImages":['https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff4%2F66%2Ff4665deecea65f2c98e507f8442d2f530d703b90.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
                   'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F46%2Fa3%2F46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
                  'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb2%2F9d%2Fb29dea35185ac2a9caae0915dc60286fe6a8cfa9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D'],
    "productName": 'Relaxed Fit Jersey Top',
    "productPrice": 1499,
    "memberPrice": 1279.00,
    "variants": 'Brown/Cream striped',
    "sizes": ['XS','S','M','L','XL','XXL'],
    "row2Data": [{
                    "url":'https://lp2.hm.com/hmgoepprod?set=source[/21/c3/21c31c065f525fa5bec312a248804601a9a3b3f9.jpg],origin[dam],category[men_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
                    "name":'Loose Jeans',
                    "price": 1999.00
                  },
                  {
                    "url":'https://lp2.hm.com/hmgoepprod?set=source[/73/22/7322d5afe5e85ac0e773eb7b6d8ff41556a346ca.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
                    "name":'Twill cap',
                    "price": 799.00
                  },
                  {
                    "url":'https://lp2.hm.com/hmgoepprod?set=source[/85/53/85532b1d55ead83298dcf1a05c255ced10990b8b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
                    "name":'Canvas trainers',
                    "price": 2299.00
                  },
                  {
                    "url":'https://lp2.hm.com/hmgoepprod?set=source[/6b/73/6b73497480377f7a1929dbff62a1b38ea62351df.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
                    "name":'Bangle',
                    "price": 799.00
                  }],
    "row3Data": [{
                  "url":'https://lp2.hm.com/hmgoepprod?set=source[/ba/75/ba75709f8b00ed2fb7990d1eac67f7fd977bb07d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
                  "name":'Loose Fit T-shirt',
                  "price": 799.00
                },
                {
                  "url":'https://lp2.hm.com/hmgoepprod?set=source[/f4/66/f4665deecea65f2c98e507f8442d2f530d703b90.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
                  "name":'Relaxed Fit Jersey top',
                  "price": 1499.00
                },
                {
                  "url":'https://lp2.hm.com/hmgoepprod?set=source[/b2/9d/b29dea35185ac2a9caae0915dc60286fe6a8cfa9.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
                  "name":'Relaxed Fit Jersey top',
                  "price": 1499.00
                },
                {
                  "url":'https://lp2.hm.com/hmgoepprod?set=source[/30/3b/303b85d60eb5e0836e0f2756ff207fc0b59c0c41.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
                  "name":'Relaxed Fit Sweatshirt',
                  "price": 799.00
                }]
}

function SingleProduct() {
  return (
    <SingleProductBody dataObj={dataObj}/>
  )
}

export default SingleProduct