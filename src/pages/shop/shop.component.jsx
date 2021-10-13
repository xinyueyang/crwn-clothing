import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';


const ShopPage = ({collectios})=>(
            <div className='shop-page'>
              <CollectionOverview/>
            </div>
        );
    
export default ShopPage;