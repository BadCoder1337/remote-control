import React from 'react';
import logo from './logo.svg';
import { Layout, Menu, Icon } from 'antd';
import './App.css';
import HeaderMenu from './componets/HeaderMenu';

import { ClickParam } from 'antd/lib/menu';

const { Header, Content} = Layout;

export const Context = {
  state: {
    menuTab: 'light',
    lamps: [] as boolean[],
    doors: [] as boolean[],
  },
  actions: {
    LOG: (...args: any[]) => console.log(...args, 'test'),
    TAB_SELECT: function (e: ClickParam) {this.setState({ menuTab: e.key })},

    setState: console.log, // setState proxy
  },
};

const { Consumer, Provider } = React.createContext<typeof Context>(Context);

export default class App extends React.Component<{}, typeof Context.state> {
  static CConsumer = Consumer;
  static CProvider = Provider;

  public constructor(props: any) {
    super(props);

    (Object.keys(Context.actions) as Array<keyof typeof Context.actions>).map((k) => {
      this.actions[k] = this.actions[k].bind(this)
    });
    this.actions.TAB_SELECT = this.actions.TAB_SELECT.bind(this);
  }

  public state = Context.state;
  public actions = Context.actions;

  render() {
    return (
      <App.CProvider value={{
        state: {...this.state},
        actions: {...this.actions}
      }}>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 0' }}>
            <div className="logo">Smart House</div>
            <HeaderMenu />
          </Header>
          <Content style={{ padding: '0 10%', marginTop: 64, backgroundColor: 'pink' }}>
            <div style={{ background: '#fff',  minHeight: 380 }}>Content</div>
          </Content>
        </Layout>
      </App.CProvider>
    );
  }
}
