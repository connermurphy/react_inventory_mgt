import React from 'react';

class Alert extends React.Component {

    constructor(props) {
        super();

        this.state = {
            alertTypes: {
                danger: "danger",
                success: "success",
                info: "info"
            }
        }
    }

    buildAlert() {

        let alertClass = "font-bold";

        switch (this.props.type) {
            case this.state.alertTypes.danger:
                alertClass = "my-4 mx-4 bg-red-200 text-red-700 border-2 border-red-300 px-2 py-2 block rounded-sm";
                break;
            case this.state.alertTypes.success:
                alertClass = "my-4 mx-4 bg-green-200 text-green-700 border-2 border-green-300 px-2 py-2 block rounded-sm";
                break;
            case this.state.alertTypes.info:
                alertClass = "my-4 mx-4 bg-blue-200 text-blue-700 border-2 border-blue-300 px-2 py-2 block rounded-sm";
                break;
            default:
                break;
        }
        return alertClass;
    }

    render() {
        let alertClassValue = this.buildAlert();
        return (
            <div className={alertClassValue}>{this.props.msg}</div>
        )
    }
}

export default Alert;