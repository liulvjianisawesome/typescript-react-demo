import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ICategories, Sub, IStoreType } from './storeType';
import RootStoreType from '../../store/storeType';
import * as actions from './actions';

import { Layout, Menu, Cascader } from 'antd';
const { Header, Content, Footer } = Layout;

interface IOptions {
  value: string;
  label: string;
  children?: IOptions[];
}

function generateOptions(categories: ICategories, sub: Sub) {
  const options: IOptions[] = [{
    value: "",
    label: "",
  }];

  const categoriesKeys = Object.keys(categories);
  for (const key of categoriesKeys) {
    const subCategories = sub && sub.filter(item => String(item.category) === key);
    const children = [];
    if (subCategories && subCategories.length > 0) {
      for (const item of subCategories) {
        children.push({
          value: item.name,
          label: item.name,
        });
      }
    }
    options.push({
      value: key,
      label: categories[key],
      children,
    });
  }

  return options;
}

interface IProps extends IStoreType {
  getInitialData: () => void;
  getHot: () => void;
}

class Playlist extends React.Component<IProps, {}> {
  public render() {
    const {
      categories,
      sub,
      tags,
    } = this.props;
    console.log(tags);

    const options = generateOptions(categories, sub);

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
          <Cascader options={options} placeholder="选择分类" />
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.all.name}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }

  public componentDidMount() {
    this.props.getInitialData();
    this.props.getHot();
  }
};

function mapStateToProps(state: RootStoreType) {
  return {
    ...state.playlist,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.actionType>) {
  return {
    getInitialData: () => dispatch(actions.getInitialDataAction()),
    getHot: () => dispatch(actions.getHotAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);