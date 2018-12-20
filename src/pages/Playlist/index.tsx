import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { IStoreType } from './types';
import * as actions from './actions';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

interface IProps {
  getInitialData: () => void;
}

class Playlist extends React.Component<IProps, {}> {
  public render() {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav1</Menu.Item>
            <Menu.Item key="2">nav2</Menu.Item>
            <Menu.Item key="3">nav3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }

  public componentDidMount() {
    // fetch("http://localhost:4000/playlist/catlist").then(res => res.json()).then((resJson: IStoreType) => {
    //   console.log(resJson.all.category);
    // });
    this.props.getInitialData();
  }
};

// export function mapStateToProps(state: IStoreType) {
//   return {
//     all: state.all,
//   };
// }

export function mapDispatchToProps(dispatch: Dispatch<actions.actionType>) {
  return {
    getInitialData: () => dispatch(actions.getInitialData()),
  }
}

export default connect(null, mapDispatchToProps)(Playlist);