import PropTypes from 'prop-types';
import React from 'react';
import Button from './button';


class ButtonPanel extends React.Component {
  renderButton(name) {
    const { onClick } = this.props;
    return (
      <Button onClick={onClick} name={name} />
    );
  }

  render() {
    return (
      <div className="panel">
        <div className="btn-row">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div className="btn-row">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('x')}
        </div>
        <div className="btn-row">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
        <div className="btn-row">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>
        <div className="btn-row">
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

// Specifies the default values for props:
ButtonPanel.defaultProps = {
  onClick: null,
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonPanel;
