import {useHistory, useParams} from "react-router-dom"
import useSWR from "swr"
import {Button, Col, DatePicker, Form, Input, Row, message} from "antd"
import {useCallback} from "react"
import {LoadingOutlined} from "@ant-design/icons"

export const UserSettings = () => {
  const {replace: redirect} = useHistory()
  const {id} = useParams()

  const {
    data: {
      name,
      email,
      username,
      website,
      phone,
      address: {city, street, zipcode} = {}
    } = {}
  } = useSWR('https://jsonplaceholder.typicode.com/users/' + id, url => fetch(url).then(r => r.json()))

  const submit = useCallback(data => {
    message.loading({ content: 'Updating :]', key: 'nots?' })
    setTimeout(() => {
      redirect('/app/clients/list')
      message.success({ content: 'Done 😜', key: 'nots?', duration: 2 })
    }, 1000)
  })

  return name ? (
    <div className="mt-4">
      <Form
        name="basicInformation"
        layout="vertical"
        onFinish={submit}
        initialValues={
          {
            'name': name,
            'email': email,
            'username': username,
            'phoneNumber': phone,
            'website': website,
            'address': street,
            'city': city,
            'postcode': zipcode
          }
        }
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={16}>
            <Row>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!'
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{
                    required: true,
                    type: 'email',
                    message: 'Please enter a valid email!'
                  }]}
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Date of Birth"
                  name="dateOfBirth"
                >
                  <DatePicker className="w-100"/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Website"
                  name="website"
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24}>
                <Form.Item
                  label="Address"
                  name="address"
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="City"
                  name="city"
                >
                  <Input/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Post code"
                  name="postcode"
                >
                  <Input/>
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Save Change
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  ) : (
    <LoadingOutlined />
  )
}
