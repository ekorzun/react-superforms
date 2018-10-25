import React from 'react'
import cx from 'classnames'

const defaultStyle = {
  display: 'block',
  width: '100%'
}

const SuperFormDefaultRenderer = ({
  item, 
  value, 
  error,
  theme,
  onChange,
}) => {
  switch(item.type) {
    case 'number':
    case 'text': 
    case 'textarea': 
    case 'string': {
      const Component = item.type === 'textarea'
        ? 'textarea'
        : 'input'
      return (
        <Component
          {...item}
          autoComplete='off'
          name={item.name}
          onChange={onChange}
          className={cx(theme.input, error && theme.inputInvalid)}
          value={value || ''}
          style={defaultStyle}
        />
      )
    }

    default: {
      return (
        <div style={{
          ...defaultStyle,
          color: 'red',
          fontWeight: 'bold'
        }}>
          Unknown field type `{item.type}`
        </div>
      )
    }
  }
}

export default SuperFormDefaultRenderer