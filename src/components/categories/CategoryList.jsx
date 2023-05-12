import React, { Component } from 'react'
import {connect} from 'react-redux'

class CategoryList extends Component {
  render() {
    return (
        <>
        <h3>categories</h3>
        <h5>{this.props.currentCategory.categoryName}</h5>
        </>
    )
  }
}
function mapStateToProps(state){
  return {
    currentCategory: state.changeCategpryReducer
  }
}
export default connect(mapStateToProps)(CategoryList)


