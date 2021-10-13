import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import './collection-overview.style.scss';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({collections}) =>(
    <div className='collection-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
</div>
);
const mapStateToProps=createSelector ({
    collections:selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);