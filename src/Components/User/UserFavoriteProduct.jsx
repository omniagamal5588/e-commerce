import React from 'react'
import ProductCard from '../Products/ProductCard'
import { Row } from 'react-bootstrap'
import Pagination from '../utilities/Pagination'
import CardContainerHook from './../../Hook/product/card-container-hook'
import CardProductContainer from './../Products/CardProductContainer'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import { useState, useEffect } from 'react'
const UserFavoriteProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductWishList())
            setLoading(false)
        }
        get()
    }, [])

    const res = useSelector(state => state.wishListReducer.allWishList)
    useEffect(() => {
        if (loading === false) {
            if (res)
                setItems(res.data)
        }
    }, [loading])

   return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                {
                    items.length <= 0 ? (<h6>لا يوجد منتدات مفضله حاليا</h6>) : <CardProductContainer products={items} title="" btntitle="" />
                }

            </Row>
        </div>
    )
}

export default UserFavoriteProduct
