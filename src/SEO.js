import React from 'react';
import {Helmet} from 'react-helmet';

function SEO(props) {

    return (
        <Helmet>
            <title>{props.seo.title}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximun-scale=12.0, minimun-scale=0.25, user-scalable=yes, target-densitydpi=medium-dpi" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content={props.seo.theme} />
            <meta name="description" content={props.seo.description} />
            <meta name="keywords" content={props.seo.keywords} />

            <meta property="og:type" content="website" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:url" content={props.seo.ogUrl} />
            <meta property="og:title" content={props.seo.title} />  
            <meta property="og:image:width" content={props.seo.ogImgWidth} />
            <meta property="og:image:height" content={props.seo.ogImgHeight} />
            <meta property="og:description" content={props.seo.description} />
            <meta property="fb:app_id" content={props.seo.ogAppId} />
            <meta property="og:image" content={props.seo.ogImg} />
            <meta property="og:image:secure_url" content={props.seo.ogImgSecureUrl} />

            <meta name="twitter:card" content={props.seo.twitterCard} />
            <meta name="twitter:url" content={props.seo.ogUrl} />
            <meta name="twitter:title" content={props.seo.title} />
            <meta name="twitter:description" content={props.seo.twitterDescrip} />
            <meta name="twitter:image" content={props.seo.ogImgSecureUrl} />

            <link rel="icon" type="image/png" sizes="192x192" href="/Common/images/icon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/Common/images/icon/android-icon-96x96.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/Common/images/icon/android-icon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/Common/images/icon/android-icon-16x16.png" />
        </Helmet>
    );
}

export default SEO;