import React from 'react';
import MaterialTable from 'material-table';


function Table(props) {

    const columns= [
      { title: 'Order Id', field: 'orderId' },
      { title: 'Product Id', field: 'productId' },
      { title: 'Seller Id', field: 'sellerId'},
      {
        title: 'Date',
        field: 'date',
      },
      { title: 'Pricing', field: 'pricing'},
      { title: 'Status', field: 'status', filtering: false},
    ]

    const data = [
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2020/08/21',pricing: 599, status:'Delivered' },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2021/12/19',pricing: 5699, status:'Pending'  },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2022/08/21',pricing: 699, status:'Cancelled'  },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2023/08/23',pricing: 999, status:'Cancelled'  },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2024/09/21',pricing: 5499, status:'Pending'  },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2010/08/21',pricing: 59944, status:'Delivered'   },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2020/04/21',pricing: 5399, status:'Delivered'   },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2020/08/21',pricing: 599, status:'Cancelled'  },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2020/08/21',pricing: 599, status:'Pending'  },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2020/08/21',pricing: 599, status:'Delivered'   },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2020/08/21',pricing: 599, status:'Pending'  },
      { orderId: 'A472U8370', productId: '#2U8370', sellerId: '@1309', date: '2020/08/21',pricing: 599, status:'Pending'  },
    ]  

    return (
      <>
        <MaterialTable
          title="Order List"
          columns={columns}
          data= {data}   
          options={{
            headerStyle:{backgroundColor:'#53B175', color:'white'},
            exportButton: true,
            filtering: true
          }}

        />
      </>
      )
}

export default Table