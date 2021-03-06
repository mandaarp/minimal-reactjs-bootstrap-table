import React from "react";
import RowComponent from "./RowComponent";
import Table from "react-bootstrap/Table";

class TableComponent extends React.Component {

    render() {
        return (
            <div>
                <Table className={'table'} striped bordered hover responsive style={{tableLayout: 'fixed', wordWrap: 'break-word'}}>
                    <thead className={'thead-dark'}>
                    <tr itemScope={'col'}>
                        {
                            Object.keys(this.props.data[0]).sort().map((element) => {
                                return (
                                    <th className={'text-center'} key={element}>
                                        {element}
                                    </th>
                                );
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data.map((element, index) => {
                            return (
                                <RowComponent key={index} index={index} data={element}
                                              rowChanged={(i, newValue) => this.props.onRowChange(i, newValue)}/>
                            );
                        })
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableComponent;
