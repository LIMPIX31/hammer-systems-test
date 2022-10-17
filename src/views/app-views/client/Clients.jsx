import {Table} from "antd"
import useSWR from 'swr'
import {LoadingOutlined} from "@ant-design/icons"
import {NavLink} from "react-router-dom"

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, { id }) => <NavLink to={'/app/settings/user/' + id}>{text}</NavLink>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website'
  }
]

export const Clients = () => {
  const { data } = useSWR('https://jsonplaceholder.typicode.com/users', url => fetch(url).then(r => r.json()))

  return data ? <Table columns={columns} dataSource={data}/> : <LoadingOutlined />
}
