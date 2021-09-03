import React from "react";

const Table = ({ data }) => {
    
    const TR = () => {       
       
        if (data && data.length > 0) {
          return  data.map(item => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.values.join(',')}</td>
                        <td>{item.default}</td>
                    </tr>
                )
            })
        }
    }
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Values</th>
                    <th scope="col">Default</th>
                </tr>
            </thead>
            <tbody>
                <TR></TR>
            </tbody>
        </table>
    )
}

export default Table;