import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import ProductList from '../product/ProductList'

export default class dashboard extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>

          <Col xs="9">
            <ProductList />

          </Col>
        </Row>
      </>
    )
  }
}
