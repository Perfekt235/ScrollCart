import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchData } from './data'

const CartCont = styled.div`
  height: 400px;
  width: 300px;
  margin: 12px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 0px 4px inset;
`

const Title = styled.p`

`

const Price = styled.p`

`

const AddCart = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
`

const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
`

const Cart = () => {
    const [data, setData] = useState()


    useEffect(()=>{
        async function loadDate() {
                try {
                const fetchedData = await fetchData();
                setData(fetchedData);
                } catch (err) {
                console.error('Chyba při načítání dat')
                }           
        }
        loadDate()
    }, [])

    console.log(data)




  return (
    <>
     {data && data.map((data, index)=>{
        
       return (
        <div key={index}>
            <CartCont key={index}>
              <Image src={data.image} />
              <Title>{data.title}</Title>
              <Price>{data.price}$</Price>
              <AddCart>Koupit</AddCart>
            </CartCont>
        </div>
       )
     })}
   </>
  )
}

export default Cart
