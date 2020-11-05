import React from 'react'

export interface MarkProps {
  key: string
  content: string
  start: number
  end: number
  tag: string
  color?: string
  onClick: (any) => any
  style?: React.CSSProperties
  tagNameColor?: string
}

const Mark: React.SFC<MarkProps> = props => (

  <mark
    style={props.style ? props.style : {backgroundColor: props.color || '#84d2ff', padding: '0 4px'}}
    data-start={props.start}
    data-end={props.end}
    onClick={() => props.onClick({start: props.start, end: props.end})}
  >
    {props.content}
    {props.tag && (
        <>
          <span style={{ 
            fontSize: '0.7em',
            fontWeight: 'bold',
            marginRight: '0.5em',
            marginLeft: '1em',
            color: props.tagNameColor || 'black' }}
          >
            {props.tag}
            </span>
          <span style={{
            background: props.tagNameColor ? props.tagNameColor : '#8a0f4a' ,
            marginLeft: '0.3em',
            paddingRight: '0.3em',
            paddingLeft: '0.3em',
            color: 'white',
            cursor: 'pointer',
          }}>
            x
          </span>
        </>
    )}
  </mark>
)

export default Mark
