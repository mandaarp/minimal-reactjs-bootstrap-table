import React from "react";
import CellComponent from "./CellComponent";

class RowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.data
        }
    }
    onChange(event, dataKey) {
        const newState = {...this.state};
        newState[dataKey] = event.target.value;
        this.setState(newState);
        this.props.rowChanged(this.props.index, newState);
    }
    render() {
        return (
            <tr>
                {
                    Object.keys(this.state).map((dataKey) => {
                        return (
                            <CellComponent key={dataKey} dataKey={dataKey} value={this.state[dataKey]}
                                R               onChange={e => this.onChange(e, dataKey)}/>
                            );
                    })
                }
            </tr>
        );
    }
}

export default RowComponent;
