import {Col, Row, Card, Button} from "antd"
import Draggable from "react-draggable"
import {useCallback, useRef, useState} from "react"

const El = ({onClick, onPlaced, children, startPos}) => {
  return onClick ? (
    <div style={{width: '80px', height: '80px', backgroundColor: 'lightgray', textAlign: 'center'}}
         onClick={() => onClick?.(children)}>
      {children}
    </div>
  ) : (
    <Draggable axis={'both'} bounds={'parent'} grid={[50, 50]} onStop={onPlaced} defaultPosition={startPos}>
      <div
        style={{width: '80px', height: '80px', backgroundColor: 'lightgray', textAlign: 'center', position: 'absolute'}}
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
    setItems(v => [...v, {title, position: [0, 0]}])
  }, [])

  const save = useCallback(() => {
    const a = document.createElement('a')
    const file = new Blob([JSON.stringify(items)], {type: 'text/plain'})
    a.href = URL.createObjectURL(file)
    a.download = 'layout.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [items])

  const fileRef = useRef()

  const load = useCallback(({ target: { files: [layout] } }) => {
    layout.text().then(json => {
      setItems(JSON.parse(json))
    })
  }, [])

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card title={'Элементы'}>
          <span>Жми чтобы добавить</span>
          <Row gutter={8} style={{marginBottom: 8}}>
            <Col><El onClick={addItem}>Типа стул</El></Col>
            <Col><El onClick={addItem}>Типа стол</El></Col>
            <Col><El onClick={addItem}>Типа диван</El></Col>
          </Row>
          <Row gutter={8} style={{marginBottom: 32}}>
            <Col><El onClick={addItem}>Типа ограждение</El></Col>
            <Col><El onClick={addItem}>Типа стойка</El></Col>
          </Row>
          <Row>
            <input
              ref={fileRef}
              type={'file'}
              onChange={load}
              style={{ display: "none" }}
            />
            <Col style={{marginBottom: 8}}><Button type={'primary'} onClick={save}>Сохранить планировку</Button></Col>
            <Col style={{marginBottom: 8}}><Button type={'primary'} onClick={() => fileRef.current?.click()}>Загрузить планировку</Button></Col>
            <Col><Button type={'danger'} onClick={() => setItems([])}>Сбросить планировку</Button></Col>
          </Row>
        </Card>
      </Col>
      <Col>
        <Card style={{width: '800px', height: '800px'}} bodyStyle={{height: '100%'}}>
          {items.map(item => (
            <El onPlaced={(_, {x, y}) => item.position = [x, y]} startPos={{ x: item.position[0], y: item.position[1] }}>{item.title}</El>
          ))}
        </Card>
      </Col>
    </Row>
  )
}
