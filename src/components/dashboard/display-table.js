import React from "react"

class displaytable extends React.Component {
     
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }
    callAPI() {
        // fetch data from API
        fetch("http://localhost:3000/api/getallorders").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                list: data
            })
        })
    }
    
    render() {
        
        let tb_data = this.state.list.map((item) => {
             //let tb_products = item.products.map((product) => {
             
            //console.log("dataaaaaaaaaaa are: " + product.title)
                return (
                    <tr>
                        <td>{item.info.firstName}</td> 
                        <td>{item.info.lastName}</td> 
                        <td>{item.info.phone}</td> 
                        <td>{ item.products.map((item1) => <div>{item1.title}</div>) }</td> 
                        <td>{ item.products.map((item1) => <div>{item1.qty}</div>) }</td> 
                        <td>{ item.products.map((item1) => <div>{item1.price}</div>) }</td> 
                    </tr>
                )
            //})
            //console.log("Done for " + item.info.phone)
         })
            return (
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>First Name</th> 
                                <th>Last Name</th> 
                                <th>Phone</th> 
                                <th>Product</th> 
                                <th>Qty</th> 
                                <th>Price</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                        </tbody>
                    </table>
                </div>
 
            )
        }
    }


export default displaytable;