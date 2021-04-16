import React from 'react';
import { Route } from 'react-router-dom';

import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {createStructuredSelector} from 'reselect';

import {fetchCollectionsStartAsync } from './shop.actions';

import {selectIsCollectionsFetching} from '../../redux/shop/shop.selectors';

import WithSpinner from './../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner=WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner=WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount(){
    const {fetchCollectionsStartAsync}=this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {match, selectIsCollectionsFetching}=this.props;
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={selectIsCollectionsFetching} {...props}/>} />
    <Route path={`${match.path}/:collectionId`}  render={(props)=><CollectionPageWithSpinner isLoading={selectIsCollectionsFetching} {...props}/>} />
  </div>
);
}
}


const mapStateToProps=createStructuredSelector({
  selectIsCollectionsFetching: selectIsCollectionsFetching
});

const mapDispatchToProps=dispatch=>({
  fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStartAsync())
});

export default connect (null, mapDispatchToProps, mapStateToProps)  (ShopPage);
