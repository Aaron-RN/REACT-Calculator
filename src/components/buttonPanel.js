import PropTypes from 'prop-types';
import React from 'react';
import Button from './button';


class ButtonPanel extends React.Component {
  renderButton(name, color, isWide = false) {
    const { onClick } = this.props;
    return (
      <Button onClick={onClick} name={name} color={color} wide={isWide} />
    );
  }

  render() {
    return (
      <div className="panel">
        <div className="btn-row">
          {this.renderButton('AC', '#CCC')}
          {this.renderButton('+/-', '#CCC')}
          {this.renderButton('%', '#CCC')}
          {this.renderButton('÷')}
        </div>
        <div className="btn-row">
          {this.renderButton('7', '#CCC')}
          {this.renderButton('8', '#CCC')}
          {this.renderButton('9', '#CCC')}
          {this.renderButton('x')}
        </div>
        <div className="btn-row">
          {this.renderButton('4', '#CCC')}
          {this.renderButton('5', '#CCC')}
          {this.renderButton('6', '#CCC')}
          {this.renderButton('-')}
        </div>
        <div className="btn-row">
          {this.renderButton('1', '#CCC')}
          {this.renderButton('2', '#CCC')}
          {this.renderButton('3', '#CCC')}
          {this.renderButton('+')}
        </div>
        <div className="btn-row">
          {this.renderButton('0', '#CCC', true)}
          {this.renderButton('.', '#CCC')}
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
