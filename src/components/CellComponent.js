import React from "react";

class CellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
        this.inputRef = React.createRef();
        this.onFocus.bind(this);
        this.onBlur.bind(this);
    }
    onFocus() {
        this.setState({edit: true},() => {
            this.inputRef.current.focus();
        });
    }
    onBlur() {
        this.setState({edit: false});
    }
    onChange(event, key) {
        this.props.onChange(event, key, event.target.value);
    }
    render() {
        return (
            <td>
                {
                    this.state.edit ?
                    <input ref={this.inputRef} onBlur={() => this.onBlur()} value={this.props.value}
                    onChange={e => this.onChange(e, this.props.dataKey)}
                    />
                    : <div onClick={() => this.onFocus()} > {this.props.value} </div>
                }
            </td>
        );
    }
}

export default CellComponent;
