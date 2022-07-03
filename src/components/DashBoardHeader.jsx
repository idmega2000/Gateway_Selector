import * as React from 'react';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  node, func, shape, string, any,
} from 'prop-types';
import dynamic from 'next/dynamic';
import { Layout } from "antd";
// const BasicLayout = dynamic(() => import('@ant-design/pro-layout'), { ssr: false });

const DashBoardHeader = (props) => {
  const [tabActiveKey, setTabActiveKey] = React.useState(props.pageData.tabsList[0]);

  const handleTabChange = (key) => {
    setTabActiveKey(key);
    return props.sendTabActiveKey(key);
  };

  return (
    <Layout.Sider
      title={<h4>{props.pageData.title}</h4>}
    //   onTabChange={handleTabChange}
    //   tabList={props.pageData.tabsList}
    //   tabActiveKey={tabActiveKey}
    //   tabProps={{ size: 'small' }}
    >
      {props.children}
    </Layout.Sider>

  );
};

DashBoardHeader.propTypes = {
  userInfo: shape({
    user: shape({
      roleId: string,
    }),
  }),
  pageData: any,
  children: node,
  sendTabActiveKey: func.isRequired,
};


export default DashBoardHeader;
