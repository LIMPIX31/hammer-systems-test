import {Col, Row, Card} from "antd"
import Draggable from "react-draggable"
import {useCallback, useRef, useState} from "react"

const El = ({onClick, onPlaced, children}) => {
  return onClick ? (
    <div style={{width: '80px', height: '80px', backgroundColor: 'lightgray', textAlign: 'center'}} onClick={() => onClick?.(children)}>
      {children}
    </div>
  ) : (
    <Draggable axis={'both'} bounds={'parent'} grid={[50, 50]} onStop={onPlaced}>
      <div style={{width: '80px', height: '80px', backgroundColor: 'lightgray', textAlign: 'center', position: 'absolute' }}
           onClick={onClick}>
        {children}
      </div>
    </Draggable>
  )
}

export const Planner = () => {
  // No Typescript = No love for the project
  const [items, setItems] = useState([])

  const addItem = useCallback((title) => {
    setItems(v => [...v, { title, position: [0, 0]}])
  }, [])

  console.log(items)

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card title={'Элементы'}>
          <span>Жми не бойся</span>
          <Row gutter={8} style={{ marginBottom: 8 }}>
            <Col><El onClick={addItem}>Типа стул</El></Col>
            <Col><El onClick={addItem}>Типа стол</El></Col>
            <Col><El onClick={addItem}>Типа диван</El></Col>
          </Row>
          <Row gutter={8}>
            <Col><El onClick={addItem}>Типа ограждение</El></Col>
            <Col><El onClick={addItem}>Типа стойка</El></Col>
          </Row>
        </Card>
      </Col>
      <Col>
        <Card style={{width: '800px', height: '800px'}} bodyStyle={{height: '100%'}}>
          {items.map(item => (
            <El onPlaced={(_, { x, y }) => item.position = [x, y]}>{item.title}</El>
          ))}
        </Card>
      </Col>
    </Row>
  )
}
