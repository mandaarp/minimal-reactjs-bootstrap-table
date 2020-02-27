import React from "react";
import RowComponent from "./RowComponent";
import Table from "react-bootstrap/Table";

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.rowChanged.bind(this);
    }
    rowChanged(index, newRow) {
        console.log(index, newRow);
    }
    render() {
        return (
                <Table>
                    <thead>

                    </thead>
                    <tbody>
                        {
                            this.props.data.map((element, index) => {
                                return (
                                    <RowComponent key={index} index={index} data={element} rowChanged={(i, newValue) => this.rowChanged(i, newValue)}/>
                                );
                            })
                        }
                    </tbody>
                </Table>

        );
    }
}

export default TableComponent;
